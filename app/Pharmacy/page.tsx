"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Pill,
  Leaf,
  Baby,
  Truck,
  Package,
  ClipboardCheck,
  Timer,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const weekDays = [
  { day: "Dush", taken: true },
  { day: "Sesh", taken: true },
  { day: "Chor", taken: true },
  { day: "Pay", taken: false },
  { day: "Jum", taken: false },
  { day: "Shan", taken: false },
  { day: "Yak", taken: false },
];

const ticket = [
  { time: "08:00", drug: "Amoksitsillin 500mg", status: "qabul qilindi" },
  { time: "13:00", drug: "Vitamin D3", status: "qabul qilindi" },
  { time: "20:00", drug: "Antigistamin", status: "kutilmoqda" },
  { time: "22:00", drug: "Magne B6", status: "kutilmoqda" },
];

const services = [
  {
    icon: Pill,
    title: "Retsept asosidagi dorilar",
    desc: "Shifokor retseptiga muvofiq dori tanlash va farmatsevt nazorati.",
  },
  {
    icon: Package,
    title: "Retseptsiz dorilar",
    desc: "Kundalik salomatlik uchun keng assortimentdagi mahsulotlar.",
  },
  {
    icon: ClipboardCheck,
    title: "Tibbiy buyumlar",
    desc: "Bandaj, shprits, tonometr va boshqa tibbiy jihozlar.",
  },
  {
    icon: Leaf,
    title: "Shifobop o‘simlik vositalari",
    desc: "Tabiiy davolash vositalari, choy va damlamalar.",
  },
  {
    icon: Baby,
    title: "Bola va ona uchun mahsulotlar",
    desc: "Chaqaloq parvarishi va onalik davri uchun tanlangan tovarlar.",
  },
  {
    icon: Truck,
    title: "Tezkor yetkazib berish",
    desc: "Uyingizga dori va tibbiy buyumlarni tez yetkazib berish xizmati.",
  },
];

const phases = [
  {
    tag: "01 / Buyurtma",
    title: "Retsept yoki ro‘yxat yuborish",
    points: [
      "Onlayn yoki telefon orqali buyurtma",
      "Farmatsevt tomonidan tekshirish",
      "Muqobil dorilar bo‘yicha maslahat",
    ],
  },
  {
    tag: "02 / Tayyorlash",
    title: "Ombordan yig‘ish va tekshirish",
    points: [
      "Dorilarni ombordan yig‘ish",
      "Muddat va sifatni tekshirish",
      "Retsept asosida to‘g‘ri dozani tasdiqlash",
    ],
  },
  {
    tag: "03 / Yetkazish",
    title: "Topshirish va yo‘riqnoma",
    points: [
      "Filialdan olib ketish yoki kuryer",
      "Elektron chek va qabul qilish yo‘riqnomasi",
      "Qo‘shimcha savollar bo‘yicha maslahat",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function WeeklyDosePanel() {
  return (
    <div className="relative rounded-2xl border border-background/10 bg-black/40 overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          Haftalik dorilar nazorati — bugun payshanba
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-[#34D399]">
          <Pill className="h-3.5 w-3.5" />
          kuzatilmoqda
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_280px]">
        <div className="relative h-[280px] flex items-center justify-center gap-4 px-6 pb-8 pt-10 overflow-hidden">
          {weekDays.map((d, i) => (
            <div key={d.day} className="flex flex-col items-center gap-3">
              <motion.div
                className="relative h-14 w-14 rounded-full border-2 border-dashed border-white/15 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
              >
                <div
                  className={`h-9 w-9 rounded-full flex items-center justify-center ${
                    d.taken
                      ? "bg-[#34D399]"
                      : "bg-white/[0.04] border border-white/15"
                  }`}
                >
                  <Pill
                    className={`h-4 w-4 ${
                      d.taken ? "text-black" : "text-white/25"
                    }`}
                    strokeWidth={1.75}
                  />
                </div>
              </motion.div>
              <span className="text-[10px] font-mono text-white/40 uppercase">
                {d.day}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t md:border-t-0 md:border-l border-background/10 px-6 py-5 font-mono text-[11px] text-white/60 space-y-3">
          <div className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-1">
            Bugungi retsept
          </div>
          {ticket.map((t) => (
            <div
              key={t.time}
              className="flex items-center justify-between gap-2 border-b border-dashed border-white/10 pb-2 last:border-none"
            >
              <div className="flex flex-col">
                <span className="text-white/70">{t.drug}</span>
                <span className="text-white/30 text-[10px]">{t.time}</span>
              </div>
              <span
                className={
                  t.status === "kutilmoqda"
                    ? "text-amber-400"
                    : "text-[#34D399]"
                }
              >
                {t.status}
              </span>
            </div>
          ))}
          <div className="h-px bg-white/10 my-3" />
          <div className="flex justify-between">
            <span className="text-white/40">Bugungi dozalar</span>
            <span>2 / 4 qabul qilindi</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Holat</span>
            <span className="text-[#34D399]">kuzatilmoqda</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pharmacy() {
  return (
    <div className="bg-background text-white">
      <section id="pharmacy" className="relative overflow-hidden pt-40 pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[900px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 20%, transparent) 0%, transparent 65%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                Farmatsevtika bloki
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Dorixona bo‘limi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Retsept asosida va retseptsiz dorilar, tibbiy buyumlar hamda
              malakali farmatsevt maslahati bilan ishlaydigan, kundalik va
              shoshilinch ehtiyojlarni qamrab oluvchi dorixona xizmati.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Buyurtma berish
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:1050"
                className="inline-flex items-center gap-2 rounded-full border border-background/20 px-6 py-3 text-sm font-medium hover:bg-background/10 transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-accent" />
                Shoshilinch: 1050
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-20"
          >
            <WeeklyDosePanel />
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-end justify-between mb-10 gap-4"
          >
            <div className="max-w-xl">
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                Xizmatlar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Qanday mahsulotlarni taklif qilamiz
              </h2>
            </div>
            <span className="hidden md:block text-xs font-mono text-white/40 shrink-0">
              → yon tomonga suring
            </span>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto pl-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pr-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {services.map((s) => (
              <div
                key={s.title}
                className="snap-start shrink-0 w-[260px] rounded-2xl border border-white/10 bg-black p-6 relative overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute top-0 left-6 h-px w-10 bg-accent/60" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 mb-5">
                  <s.icon
                    className="h-5.5 w-5.5 text-accent"
                    strokeWidth={1.5}
                  />
                </span>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-white/60 leading-6">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Jarayon
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Buyurtmadan yetkazishgacha
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10"
          >
            {phases.map((ph) => (
              <motion.div
                key={ph.tag}
                variants={fadeUp}
                className="bg-black px-7 py-9"
              >
                <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                  {ph.tag}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-5">{ph.title}</h3>
                <ul className="space-y-3">
                  {ph.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2.5 text-sm text-white/60"
                    >
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-3 gap-8">
          {[
            { icon: Timer, label: "24/7 shoshilinch dorilar" },
            { icon: Truck, label: "Tezkor yetkazib berish" },
            { icon: ShieldCheck, label: "Sertifikatlangan mahsulotlar" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <t.icon
                className="h-5 w-5 text-accent shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-sm text-white/60">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-background/5 border border-background/10 px-8 py-14 md:px-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Dori kerakmi?
              </h2>
              <p className="text-white/60 max-w-xl">
                Dorixonamiz bilan bog‘laning — kerakli dorilarni tanlab,
                buyurtmangizni rasmiylashtiramiz.
              </p>
            </div>
            <a
              href="tel:1050"
              className="relative inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground shrink-0"
            >
              <PhoneCall className="h-4 w-4" />
              1050 raqamiga qo‘ng‘iroq qiling
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PharmacyPage() {
  return (
    <>
      <Header />
      <main>
        <Pharmacy />
      </main>
      <Footer />
    </>
  );
}
