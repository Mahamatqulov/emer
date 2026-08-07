// // Fayl joyi: lib/notion.ts
// // (avvalgi versiyani shu bilan almashtiring — "content" endi rich_text
// //  ustunidan to'g'ridan-to'g'ri o'qiladi, alohida sahifa-bloklarini
// //  Markdown'ga o'girish shart emas, chunki sizning "content" matningiz
// //  qisqa paragraf, to'liq formatlangan maqola emas.)
// import { Client } from "@notionhq/client";
// import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// export const notion = new Client({ auth: process.env.NOTION_TOKEN });
// const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

// // Query natijasining turini paket versiyasiga qarab o'zgarmasligi uchun
// // to'g'ridan-to'g'ri metoddan chiqarib olamiz (QueryDatabaseResponse
// // nomi paket versiyalarida o'zgarib turgani sababli import qilinmaydi).
// type QueryDatabaseResponse = Awaited<ReturnType<typeof notion.databases.query>>;

// export interface NewsItem {
//   id: string;
//   title: string;
//   excerpt: string;
//   content: string;
//   date: string;
//   category: string;
//   featured: boolean;
//   image: string | null;
// }

// function isFullPage(
//   page: QueryDatabaseResponse["results"][number],
// ): page is PageObjectResponse {
//   return "properties" in page;
// }

// function richTextToPlain(rt: { plain_text: string }[] | undefined): string {
//   return rt ? rt.map((t) => t.plain_text).join("") : "";
// }

// function mapPageToNewsItem(page: PageObjectResponse): NewsItem {
//   const props = page.properties;

//   const title =
//     props.Title?.type === "title" ? richTextToPlain(props.Title.title) : "";
//   const date =
//     props.Date?.type === "date" ? (props.Date.date?.start ?? "") : "";
//   const category =
//     props.Category?.type === "select"
//       ? (props.Category.select?.name ?? "")
//       : "";
//   const featured =
//     props.Featured?.type === "checkbox" ? props.Featured.checkbox : false;
//   const excerpt =
//     props.Excerpt?.type === "rich_text"
//       ? richTextToPlain(props.Excerpt.rich_text)
//       : "";
//   const content =
//     props.Content?.type === "rich_text"
//       ? richTextToPlain(props.Content.rich_text)
//       : "";

//   let image: string | null = null;
//   if (props.Image?.type === "files" && props.Image.files.length > 0) {
//     const file = props.Image.files[0];
//     image = file.type === "external" ? file.external.url : file.file.url;
//   }

//   return {
//     id: page.id,
//     title,
//     excerpt,
//     content,
//     date,
//     category,
//     featured,
//     image,
//   };
// }

// /** Barcha yangiliklarni sana bo'yicha (yangidan eskiga) qaytaradi */
// export async function getNewsList(): Promise<NewsItem[]> {
//   const response = await notion.databases.query({
//     database_id: DATABASE_ID,
//     sorts: [{ property: "Date", direction: "descending" }],
//   });

//   return response.results.filter(isFullPage).map(mapPageToNewsItem);
// }

// /** Faqat "Featured" belgilangan yangiliklar */
// export async function getFeaturedNews(): Promise<NewsItem[]> {
//   const all = await getNewsList();
//   return all.filter((n) => n.featured);
// }

// /** Kategoriya bo'yicha filtrlash */
// export async function getNewsByCategory(category: string): Promise<NewsItem[]> {
//   const all = await getNewsList();
//   return all.filter((n) => n.category === category);
// }

// /** Bitta yangilikni Notion page ID orqali olish (detal sahifa uchun) */
// export async function getNewsById(id: string): Promise<NewsItem | null> {
//   try {
//     const page = await notion.pages.retrieve({ page_id: id });
//     if (!isFullPage(page)) return null;
//     return mapPageToNewsItem(page);
//   } catch {
//     return null;
//   }
// }

// Fayl joyi: lib/notion.ts
// (avvalgi versiyani shu bilan almashtiring — "content" endi rich_text
//  ustunidan to'g'ridan-to'g'ri o'qiladi, alohida sahifa-bloklarini
//  Markdown'ga o'girish shart emas, chunki sizning "content" matningiz
//  qisqa paragraf, to'liq formatlangan maqola emas.)
import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

// Query natijasining turini paket versiyasiga qarab o'zgarmasligi uchun
// to'g'ridan-to'g'ri metoddan chiqarib olamiz.
type QueryDatabaseResponse = Awaited<
  ReturnType<typeof notion.dataSources.query>
>;

// Notion 2025-09-03 API'sidan boshlab database'lar bir nechta
// "data source"ga ega bo'lishi mumkin, shuning uchun so'rovlar endi
// database_id o'rniga data_source_id talab qiladi. Buni bir marta
// olib, keyingi chaqiruvlar uchun keshda saqlaymiz.
let cachedDataSourceId: string | null = null;

async function getDataSourceId(): Promise<string> {
  if (cachedDataSourceId) return cachedDataSourceId;

  const database = await notion.databases.retrieve({
    database_id: DATABASE_ID,
  });

  // @ts-expect-error - data_sources 2025-09-03 API'da qo'shildi
  const dataSourceId: string | undefined = database.data_sources?.[0]?.id;

  if (!dataSourceId) {
    throw new Error(
      "Data source ID topilmadi — NOTION_DATABASE_ID to'g'ri ekanini va integratsiya database'ga ulanganini tekshiring.",
    );
  }

  cachedDataSourceId = dataSourceId;
  return dataSourceId;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  featured: boolean;
  image: string | null;
}

function isFullPage(
  page: QueryDatabaseResponse["results"][number],
): page is PageObjectResponse {
  return "properties" in page;
}

function richTextToPlain(rt: { plain_text: string }[] | undefined): string {
  return rt ? rt.map((t) => t.plain_text).join("") : "";
}

function mapPageToNewsItem(page: PageObjectResponse): NewsItem {
  const props = page.properties;

  const title =
    props.Title?.type === "title" ? richTextToPlain(props.Title.title) : "";
  const date =
    props.Date?.type === "date" ? (props.Date.date?.start ?? "") : "";
  const category =
    props.Category?.type === "select"
      ? (props.Category.select?.name ?? "")
      : "";
  const featured =
    props.Featured?.type === "checkbox" ? props.Featured.checkbox : false;
  const excerpt =
    props.Excerpt?.type === "rich_text"
      ? richTextToPlain(props.Excerpt.rich_text)
      : "";
  const content =
    props.Content?.type === "rich_text"
      ? richTextToPlain(props.Content.rich_text)
      : "";

  let image: string | null = null;
  if (props.Image?.type === "files" && props.Image.files.length > 0) {
    const file = props.Image.files[0];
    image = file.type === "external" ? file.external.url : file.file.url;
  }

  return {
    id: page.id,
    title,
    excerpt,
    content,
    date,
    category,
    featured,
    image,
  };
}

/** Barcha yangiliklarni sana bo'yicha (yangidan eskiga) qaytaradi */
export async function getNewsList(): Promise<NewsItem[]> {
  const dataSourceId = await getDataSourceId();

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return response.results.filter(isFullPage).map(mapPageToNewsItem);
}

/** Faqat "Featured" belgilangan yangiliklar */
export async function getFeaturedNews(): Promise<NewsItem[]> {
  const all = await getNewsList();
  return all.filter((n) => n.featured);
}

/** Kategoriya bo'yicha filtrlash */
export async function getNewsByCategory(category: string): Promise<NewsItem[]> {
  const all = await getNewsList();
  return all.filter((n) => n.category === category);
}

/** Bitta yangilikni Notion page ID orqali olish (detal sahifa uchun) */
export async function getNewsById(id: string): Promise<NewsItem | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: id });
    if (!isFullPage(page)) return null;
    return mapPageToNewsItem(page);
  } catch {
    return null;
  }
}
