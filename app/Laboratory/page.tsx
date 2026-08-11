"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Microscope,
  TestTube,
  FlaskConical,
  Dna,
  Droplet,
  ClipboardList,
  Timer,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const vials = [
  { level: 0.7, label: "Hb" },
  { level: 0.42, label: "Glu" },
  { level: 0.85, label: "WBC" },
  { level: 0.55, label: "CRP" },
  { level: 0.3, label: "Cr" },
  { level: 0.68, label: "K+" },
];

const readouts = [
  { param: "Gemoglobin", value: "142 g/L", norm: "130–160", status: "norma" },
  { param: "Glyukoza", value: "5.1 mmol/L", norm: "3.9–5.6", status: "norma" },
  {
    param: "Leykotsitlar",
    value: "11.2 ×10⁹/L",
    norm: "4.0–9.0",
    status: "yuqori",
  },
  { param: "CRP", value: "8 mg/L", norm: "0–5", status: "yuqori" },
];

const services = [
  {
    icon: Droplet,
    title: "Umumiy qon tahlili",
    desc: "Gemogramma, leykoformula va tez natija chiqarish tizimi.",
  },
  {
    icon: FlaskConical,
    title: "Biokimyoviy tahlillar",
    desc: "Jigar, buyrak funksiyasi va metabolik ko‘rsatkichlarni baholash.",
  },
  {
    icon: Dna,
    title: "Molekulyar-genetik (PCR)",
    desc: "Yuqumli va irsiy kasalliklarni molekulyar darajada aniqlash.",
  },
  {
    icon: Microscope,
    title: "Mikrobiologik tahlillar",
    desc: "Infeksiya qo‘zg‘atuvchilarini aniqlash va antibiotikga sezgirlik.",
  },
  {
    icon: TestTube,
    title: "Gormonal tekshiruvlar",
    desc: "Endokrin tizim faoliyatini keng ko‘rsatkichlar asosida tahlil qilish.",
  },
  {
    icon: ClipboardList,
    title: "Shoshilinch tahlillar (STAT)",
    desc: "Reanimatsiya va operatsiya oldi holatlar uchun tezkor natija.",
  },
];

const phases = [
  {
    tag: "01 / Namuna",
    title: "Qon va biomaterial olish",
    points: [
      "Steril sharoitda namuna olish",
      "Avtomatik markirovka tizimi",
      "Namunani darhol laboratoriyaga yetkazish",
    ],
  },
  {
    tag: "02 / Tahlil",
    title: "Avtomatlashtirilgan analiz",
    points: [
      "Yuqori aniqlikdagi analizatorlar",
      "Ikki bosqichli sifat nazorati",
      "Shoshilinch holatlar uchun tezlashtirilgan protokol",
    ],
  },
  {
    tag: "03 / Natija",
    title: "Xulosa va tavsiya",
    points: [
      "Elektron shaklda natija topshirish",
      "Shifokor bilan izohli konsultatsiya",
      "Arxivlangan tahlil tarixi",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function AnalysisPanel() {
  return (
    <div className="relative rounded-2xl border border-background/10 bg-black/40 overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          Namuna tahlili — real vaqt
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-[#7DD3FC]">
          <FlaskConical className="h-3.5 w-3.5" />
          skanerlanmoqda
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_280px]">
        <div className="relative h-[280px] flex items-end justify-center gap-6 px-8 pb-8 pt-10 overflow-hidden">
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in srgb, #7DD3FC 18%, transparent), transparent)",
            }}
            initial={{ left: "-10%" }}
            animate={{ left: ["-10%", "110%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          />
          {vials.map((v, i) => (
            <div
              key={v.label}
              className="relative w-9 h-[190px] rounded-b-xl rounded-t-md border border-white/15 bg-white/[0.03] overflow-hidden flex flex-col justify-end"
            >
              <motion.div
                className="w-full"
                style={{
                  background:
                    "linear-gradient(180deg, #7DD3FC, color-mix(in srgb, #7DD3FC 40%, transparent))",
                }}
                initial={{ height: 0 }}
                whileInView={{ height: `${v.level * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: easeOut }}
              />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-white/40">
                {v.label}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t md:border-t-0 md:border-l border-background/10 px-6 py-5 font-mono text-[11px] text-white/60 space-y-3">
          {readouts.map((r) => (
            <div
              key={r.param}
              className="flex items-center justify-between gap-2"
            >
              <span className="text-white/40 truncate">{r.param}</span>
              <span
                className={
                  r.status === "yuqori" ? "text-amber-400" : "text-[#7DD3FC]"
                }
              >
                {r.value}
              </span>
            </div>
          ))}
          <div className="h-px bg-white/10 my-3" />
          <div className="flex justify-between">
            <span className="text-white/40">Namunalar</span>
            <span>6 / 6 tayyor</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Holat</span>
            <span className="text-[#7DD3FC]">tasdiqlangan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Laboratory() {
  return (
    <div className="bg-background text-white">
      <section id="laboratory" className="relative overflow-hidden pt-40 pb-20">
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
                Diagnostika bloki
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Laboratoriya bo‘limi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Zamonaviy avtomatlashtirilgan analizatorlar va qat’iy sifat
              nazorati asosida ishlaydigan, shoshilinch va rejali tahlillarni
              qamrab oluvchi laboratoriya xizmati.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Tahlil topshirish
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
            <AnalysisPanel />
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
                Qanday tahlillarni bajaramiz
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
              Namunadan natijagacha
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
            { icon: Timer, label: "24/7 shoshilinch tahlillar" },
            {
              icon: Microscope,
              label: "Zamonaviy avtomatlashtirilgan uskunalar",
            },
            { icon: ShieldCheck, label: "Ikki bosqichli sifat nazorati" },
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
                Tahlil topshirish kerakmi?
              </h2>
              <p className="text-white/60 max-w-xl">
                Laboratoriyamiz bilan bog‘laning — kerakli tahlillarni tanlab,
                navbatga yozilamiz.
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

export default function LaboratoryPage() {
  return (
    <>
      <Header />
      <main>
        <Laboratory />
      </main>
      <Footer />
    </>
  );
}
