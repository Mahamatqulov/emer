"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Scissors,
  Droplet,
  ShieldCheck,
  Microscope,
  Target,
  Stethoscope,
  Clock,
  Timer,
  ClipboardCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const procedures = [
  {
    icon: Scissors,
    title: "Qorin bo‘shlig‘i jarrohligi",
    desc: "O‘tkir va rejali qorin bo‘shlig‘i patologiyalarida operativ yordam.",
  },
  {
    icon: Droplet,
    title: "O‘t pufagi va jigar jarrohligi",
    desc: "O‘t-tosh kasalligi va jigar sohasidagi aralashuvlar.",
  },
  {
    icon: ShieldCheck,
    title: "Churralarni tuzatish",
    desc: "Gernioplastika — turli lokalizatsiyadagi churralarni bartaraf etish.",
  },
  {
    icon: Microscope,
    title: "Laparoskopik operatsiyalar",
    desc: "Kichik kesmalar orqali kam travmatik jarrohlik usullari.",
  },
  {
    icon: Target,
    title: "Onkologik jarrohlik",
    desc: "Xavfli o‘smalarni radikal olib tashlash amaliyoti.",
  },
  {
    icon: Stethoscope,
    title: "Qayta tiklovchi jarrohlik",
    desc: "Murakkab operatsiyalardan keyingi funksional tiklash.",
  },
];

const phases = [
  {
    tag: "01 / Diagnostika",
    title: "Tekshiruv va tayyorgarlik",
    points: [
      "Zarur tasvirlash tekshiruvlari",
      "Operatsiya rejasini tuzish",
      "Anesteziologik baholash",
    ],
  },
  {
    tag: "02 / Operatsiya",
    title: "Jarrohlik bloki",
    points: [
      "Zamonaviy laparoskopik uskunalar",
      "Uzluksiz hayotiy monitoring",
      "Tajribali jarrohlar jamoasi",
    ],
  },
  {
    tag: "03 / Keyin",
    title: "Tiklanish",
    points: [
      "Operatsiyadan keyingi nazorat",
      "Og‘riqni boshqarish",
      "Erta faollashtirish dasturi",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function OperationTimerPanel() {
  return (
    <div className="relative rounded-2xl border border-background/10 bg-black/40 overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          Operatsion jarayon nazorati
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-[#7DD3FC]">
          <Clock className="h-3.5 w-3.5" />
          davom etmoqda
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_260px]">
        <div className="relative h-[280px] flex flex-col items-center justify-center gap-4">
          <svg viewBox="0 0 300 280" className="w-full h-full">
            <circle
              cx={150}
              cy={130}
              r={90}
              fill="none"
              stroke="#ffffff"
              strokeOpacity={0.12}
              strokeWidth={1.5}
            />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = 150 + 80 * Math.sin(angle);
              const y1 = 130 - 80 * Math.cos(angle);
              const x2 = 150 + 90 * Math.sin(angle);
              const y2 = 130 - 90 * Math.cos(angle);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#ffffff"
                  strokeOpacity={0.25}
                  strokeWidth={i % 3 === 0 ? 2 : 1}
                />
              );
            })}

            <g>
              <line
                x1={150}
                y1={130}
                x2={150}
                y2={55}
                stroke="#7DD3FC"
                strokeWidth={2.5}
                strokeLinecap="round"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 150 130"
                to="360 150 130"
                dur="8s"
                repeatCount="indefinite"
              />
            </g>
            <g>
              <line
                x1={150}
                y1={130}
                x2={150}
                y2={80}
                stroke="#ffffff"
                strokeOpacity={0.4}
                strokeWidth={1.5}
                strokeLinecap="round"
              />
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 150 130"
                to="360 150 130"
                dur="96s"
                repeatCount="indefinite"
              />
            </g>

            <circle cx={150} cy={130} r={5} fill="#7DD3FC" />

            <text
              x={150}
              y={245}
              fill="#7DD3FC"
              fontSize={22}
              fontWeight={700}
              textAnchor="middle"
              fontFamily="monospace"
            >
              02:14:36
            </text>
            <text
              x={150}
              y={263}
              fill="#ffffff"
              fillOpacity={0.4}
              fontSize={10}
              textAnchor="middle"
              fontFamily="monospace"
            >
              o‘tgan vaqt
            </text>
          </svg>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-background/10 px-6 py-5 font-mono text-xs text-white/60 space-y-3">
          <div className="flex justify-between">
            <span className="text-white/40">Operatsiya turi</span>
            <span className="text-[#7DD3FC]">laparoskopik</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Boshlanish</span>
            <span>09:42</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Jarrohlar jamoasi</span>
            <span className="text-[#7DD3FC]">5 kishi</span>
          </div>
          <div className="h-px bg-white/10 my-3" />
          <div className="flex justify-between">
            <span className="text-white/40">Asboblar</span>
            <span>24/24 tayyor</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Holat</span>
            <span className="text-[#7DD3FC]">davom etmoqda</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Surgery2() {
  return (
    <div className="bg-background text-white">
      <section id="surgery-2" className="relative overflow-hidden pt-40 pb-20">
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
              <span className="h-px w-8 bg-linear-gradient-to-r from-accent to-transparent" />
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                2-Xirurgiya blok
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              2-Jarrohlik bo‘limi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Qorin bo‘shlig‘i va umumiy jarrohlik yo‘nalishidagi murakkab
              holatlarni zamonaviy laparoskopik texnologiyalar asosida
              davolaydigan ixtisoslashtirilgan bo‘lim.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Konsultatsiyaga yozilish
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
            <OperationTimerPanel />
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
                Yo‘nalishlar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Qanday holatlarni davolaymiz
              </h2>
            </div>
            <span className="hidden md:block text-xs font-mono text-white/40 shrink-0">
              → yon tomonga suring
            </span>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto pl-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pr-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {procedures.map((p) => (
              <div
                key={p.title}
                className="snap-start shrink-0 w-[260px] rounded-2xl border border-white/10 bg-black p-6 relative overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute top-0 left-6 h-px w-10 bg-accent/60" />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 mb-5">
                  <p.icon
                    className="h-5.5 w-5.5 text-accent"
                    strokeWidth={1.5}
                  />
                </span>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-white/60 leading-6">{p.desc}</p>
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
              Davolash yo‘li
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Bemor uchun uchta bosqich
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
            { icon: Timer, label: "24/7 shoshilinch umumiy jarrohlik" },
            { icon: Microscope, label: "Zamonaviy laparoskopik uskunalar" },
            {
              icon: ClipboardCheck,
              label: "Operatsiyadan keyingi intensiv nazorat",
            },
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
                Jarrohlik bo‘yicha maslahat kerakmi?
              </h2>
              <p className="text-white/60 max-w-xl">
                Jarrohlarimiz bilan bog‘laning — holatingizni ko‘rib chiqib,
                keyingi qadamni belgilab beramiz.
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

export default function Surgery2Page() {
  return (
    <>
      <Header />
      <main>
        <Surgery2 />
      </main>
      <Footer />
    </>
  );
}
