"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Wind,
  Activity,
  ShieldAlert,
  HeartPulse,
  Droplet,
  Gauge,
  Timer,
  ClipboardCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const procedures = [
  {
    icon: Wind,
    title: "Sun’iy ventilyatsiya (IVL)",
    desc: "Nafas yetishmovchiligida mexanik ventilyatsion qo‘llab-quvvatlash.",
  },
  {
    icon: Activity,
    title: "Gemodinamika monitoringi",
    desc: "Qon aylanish tizimini uzluksiz kuzatish va boshqarish.",
  },
  {
    icon: ShieldAlert,
    title: "Septik holatlar",
    desc: "O‘tkir infeksion asoratlarda intensiv antibakterial terapiya.",
  },
  {
    icon: HeartPulse,
    title: "Operatsiyadan keyingi kuzatuv",
    desc: "Og‘ir jarrohlik amaliyotlaridan so‘ng intensiv nazorat.",
  },
  {
    icon: Droplet,
    title: "Ekstrakorporal detoksikatsiya",
    desc: "Gemodializ va boshqa qon tozalash usullari.",
  },
  {
    icon: Gauge,
    title: "Ko‘p organli yetishmovchilik",
    desc: "Bir nechta organ tizimlari buzilishida kompleks terapiya.",
  },
];

const phases = [
  {
    tag: "01 / Qabul",
    title: "Tezkor baholash",
    points: [
      "Hayotiy ko‘rsatkichlarni tekshirish",
      "Og‘irlik darajasini aniqlash",
      "Zudlik bilan stabillashtirish",
    ],
  },
  {
    tag: "02 / Intensiv terapiya",
    title: "Uzluksiz kuzatuv",
    points: [
      "24/7 monitor va ventilyator nazorati",
      "Individual davolash rejasi",
      "Ko‘p tarmoqli mutaxassislar konsultatsiyasi",
    ],
  },
  {
    tag: "03 / Keyin",
    title: "Barqarorlashtirish",
    points: [
      "Ventilyatsiyadan bosqichma-bosqich ajratish",
      "Umumiy bo‘limga o‘tkazish",
      "Uzoq muddatli kuzatuv rejasi",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const pressureCycle = "M0,0 L5,0 L8,-40 L40,-40 L43,0 L70,0";
const volumeCycle = "M0,0 L35,-35 L70,0";

function VentilatorPanel() {
  return (
    <div className="relative rounded-2xl border border-background/10 bg-black/40 overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          Ventilyator monitoringi
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-[#7DD3FC]">
          <Activity className="h-3.5 w-3.5" />
          uzluksiz nazorat
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_260px]">
        <div className="relative h-[280px]">
          <svg viewBox="0 0 300 280" className="w-full h-full">
            {[50, 150, 240].map((y) => (
              <line
                key={y}
                x1={20}
                y1={y}
                x2={280}
                y2={y}
                stroke="#ffffff"
                strokeOpacity={0.06}
                strokeWidth={1}
              />
            ))}

            <text x={24} y={30} fill="#7DD3FC" fontSize={10} fontFamily="monospace">
              Bosim (cmH2O)
            </text>
            <motion.g
              transform="translate(20,90)"
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d={pressureCycle} fill="none" stroke="#7DD3FC" strokeWidth={2} />
              <path d={pressureCycle} fill="none" stroke="#7DD3FC" strokeWidth={2} transform="translate(70,0)" />
              <path d={pressureCycle} fill="none" stroke="#7DD3FC" strokeWidth={2} transform="translate(140,0)" />
              <path d={pressureCycle} fill="none" stroke="#7DD3FC" strokeWidth={2} transform="translate(210,0)" />
            </motion.g>

            <text x={24} y={165} fill="#f59e0b" fontSize={10} fontFamily="monospace">
              Hajm (ml)
            </text>
            <motion.g
              transform="translate(20,235)"
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <path d={volumeCycle} fill="none" stroke="#f59e0b" strokeWidth={2} />
              <path d={volumeCycle} fill="none" stroke="#f59e0b" strokeWidth={2} transform="translate(70,0)" />
              <path d={volumeCycle} fill="none" stroke="#f59e0b" strokeWidth={2} transform="translate(140,0)" />
              <path d={volumeCycle} fill="none" stroke="#f59e0b" strokeWidth={2} transform="translate(210,0)" />
            </motion.g>
          </svg>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-background/10 px-6 py-5 font-mono text-xs text-white/60 space-y-3">
          <div className="flex justify-between">
            <span className="text-white/40">FiO2</span>
            <span className="text-[#7DD3FC]">40%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">PEEP</span>
            <span className="text-[#7DD3FC]">5 cmH2O</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Nafas chastotasi</span>
            <span>16/min</span>
          </div>
          <div className="h-px bg-white/10 my-3" />
          <div className="flex justify-between">
            <span className="text-white/40">Rejim</span>
            <span className="text-[#7DD3FC]">SIMV</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Holat</span>
            <span className="text-[#7DD3FC]">barqaror</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntensiveCare() {
  return (
    <div className="bg-background text-white">
      <section id="icu" className="relative overflow-hidden pt-40 pb-20">
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
                Reanimatsiya blok
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Reanimatsiya va intensiv terapiya bo‘limi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Hayotga xavf tug‘diruvchi og‘ir holatdagi bemorlarga 24/7
              uzluksiz monitoring, sun’iy ventilyatsiya va intensiv terapiya
              ko‘rsatadigan shoshilinch bo‘lim.
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
            <VentilatorPanel />
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
            { icon: Timer, label: "24/7 reanimatsiya va intensiv nazorat" },
            { icon: Wind, label: "Sun’iy ventilyatsiya uskunalari" },
            {
              icon: ClipboardCheck,
              label: "Ko‘p tarmoqli mutaxassislar jamoasi",
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
                Shoshilinch reanimatsion yordam kerakmi?
              </h2>
              <p className="text-white/60 max-w-xl">
                Reanimatsiya jamoamiz bilan zudlik bilan bog‘laning — biz har
                doim tayyor turamiz.
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

export default function IntensiveCarePage() {
  return (
    <>
      <Header />
      <main>
        <IntensiveCare />
      </main>
      <Footer />
    </>
  );
}