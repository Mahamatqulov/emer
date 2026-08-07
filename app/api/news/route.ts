import { NextResponse } from "next/server";
import { getNewsList } from "@/lib/notion";

export async function GET() {
  const newsList = await getNewsList();
  return NextResponse.json(newsList);
}
