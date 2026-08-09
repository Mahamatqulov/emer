import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

type QueryDatabaseResponse = Awaited<
  ReturnType<typeof notion.dataSources.query>
>;

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

  const allResults: QueryDatabaseResponse["results"] = [];
  let cursor: string | undefined = undefined;

  do {
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      sorts: [{ property: "Date", direction: "descending" }],
      start_cursor: cursor,
      page_size: 100, // maksimal ruxsat etilgan qiymat
    });

    allResults.push(...response.results);
    cursor = response.has_more
      ? (response.next_cursor ?? undefined)
      : undefined;
  } while (cursor);

  return allResults.filter(isFullPage).map(mapPageToNewsItem);
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
