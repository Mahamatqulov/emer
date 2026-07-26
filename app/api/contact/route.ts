import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Barcha maydonlar to'ldirilishi shart" },
        { status: 400 },
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Server konfiguratsiyasi xato" },
        { status: 500 },
      );
    }

    const text = `📩 *Yangi murojaat — Farg'onashoshilinch*\n\n👤 *Ism:* ${escapeMd(name)}\n✉️ *Email:* ${escapeMd(email)}\n💬 *Xabar:*\n${escapeMd(message)}`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "MarkdownV2",
        }),
      },
    );

    if (!tgRes.ok) {
      const err = await tgRes.text();
      console.error("Telegram xatosi:", err);
      return NextResponse.json(
        { error: "Telegramga yuborishda xato" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Serverda xato yuz berdi" },
      { status: 500 },
    );
  }
}

function escapeMd(str: string) {
  return str.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
