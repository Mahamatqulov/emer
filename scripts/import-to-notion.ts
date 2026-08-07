import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

// Notion 2025-09-03 API'sidan boshlab sahifalar database_id o'rniga
// data_source_id talab qiladi. Buni database'ni "retrieve" qilib olamiz.
async function getDataSourceId(): Promise<string> {
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

  return dataSourceId;
}

const newsData = [
  {
    id: 1,
    title: "Yangi zamonaviy yurak jarrohligi bo'limi ochildi",
    excerpt:
      "Bizning eng zamonaviy uskunalar bilan jihozlangan yurak jarrohligi markazimiz maxsus yurak amaliyotlari uchun bemorlarga xizmat ko'rsatishni boshladi.",
    content:
      "Eng so'nggi texnologiyalar bilan jihozlangan yangi zamonaviy yurak jarrohligi bo'limimiz ochilganini e'lon qilishdan mamnunmiz.",
    date: "2024-06-15",
    category: "Muassasa",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1640876777012-bdb00a6323e2?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Tez yordam bo'limi mukammallik mukofotiga sazovor bo'ldi",
    excerpt:
      "Tez yordam bo'limimiz bemorlarga yuqori sifatli g'amxo'rlik va tezkor javob berish uchun e'tirof etildi.",
    content:
      "Fidoyi tez yordam jamoamiz nufuzli \"Sog'liqni saqlashda mukammallik\" mukofotiga sazovor bo'ldi.",
    date: "2024-06-10",
    category: "E'tirof",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Bepul tibbiy ko'rik kampaniyasi boshlandi",
    excerpt:
      "Barcha aholi uchun bepul tibbiy ko'riklarni taklif etuvchi jamoat salomatligi tashabbusi.",
    content:
      "Ushbu oy jamoat uchun keng qamrovli bepul tibbiy ko'rik dasturini boshlaymiz.",
    date: "2024-06-01",
    category: "Jamoatchilik",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Dr. Karimov xalqaro konferensiyaga rahbarlik qildi",
    excerpt:
      "Bosh tez yordam shifokorimiz Global tibbiyot konferensiyasida ilmiy izlanishlarini taqdim etdi.",
    content:
      "Dr. Alisher Karimov tez tibbiy yordam amaliyotidagi yangi ilmiy natijalarini taqdim etdi.",
    date: "2024-05-28",
    category: "Ilmiy",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Yangi bolalar tez yordam bo'limi ishga tushirildi",
    excerpt:
      "Maxsus bolalar tez tibbiy yordam xizmati endi faoliyat yuritmoqda.",
    content: "Yangi maxsus bolalar tez yordam bo'limimizni ochdik.",
    date: "2024-05-20",
    category: "Muassasa",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Tibbiyot jamoasi ilg'or o'quv kursini yakunladi",
    excerpt:
      "Tibbiyot xodimlari eng so'nggi tez yordam protokollari bo'yicha sertifikat oldi.",
    content:
      "Tibbiyot jamoamiz zamonaviy tez yordam protokollari bo'yicha ilg'or o'quv kursini muvaffaqiyatli yakunladi.",
    date: "2024-05-15",
    category: "O'qitish",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1571772805064-207c8435df79?w=1200&q=80&auto=format&fit=crop",
  },
];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  if (!process.env.NOTION_TOKEN || !DATABASE_ID) {
    console.error(
      "Xatolik: NOTION_TOKEN yoki NOTION_DATABASE_ID topilmadi. .env.local ni tekshiring.",
    );
    process.exit(1);
  }

  const dataSourceId = await getDataSourceId();

  console.log(`${newsData.length} ta yangilik Notion'ga yuklanmoqda...`);

  for (const item of newsData) {
    try {
      await notion.pages.create({
        parent: { data_source_id: dataSourceId },
        properties: {
          Title: {
            title: [{ text: { content: item.title } }],
          },
          Date: {
            date: { start: item.date },
          },
          Category: {
            select: { name: item.category },
          },
          Featured: {
            checkbox: item.featured,
          },
          Excerpt: {
            rich_text: [{ text: { content: item.excerpt } }],
          },
          Content: {
            rich_text: [{ text: { content: item.content } }],
          },
          Image: {
            files: [
              {
                name: "cover",
                external: { url: item.image },
              },
            ],
          },
        },
      });

      console.log(`✅ Yuklandi: ${item.title}`);
    } catch (err) {
      console.error(`❌ Xatolik (${item.title}):`, err);
    }

    // Notion API cheklovi ~3 so'rov/soniya — xavfsizlik uchun kutamiz
    await sleep(350);
  }

  console.log("Import yakunlandi.");
}

main();
