"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Gem,
  Shield,
  ShieldAlert,
  Microscope,
  HeartPulse,
  Repeat,
  Droplets,
  Timer,
  ClipboardCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const procedures = [
  {
    icon: Gem,
    title: "Buyrak va siydik toshi",
    desc: "Urolitiaz holatlarida zamonaviy toshlarni parchalash usullari.",
  },
  {
    icon: Shield,
    title: "Prostata kasalliklari",
    desc: "Prostata bezining yallig‘lanishi va gipertrofiyasini davolash.",
  },
  {
    icon: ShieldAlert,
    title: "Siydik yo‘llari infeksiyasi",
    desc: "O‘tkir va surunkali infeksion holatlarda kompleks davolash.",
  },
  {
    icon: Microscope,
    title: "Endourologik jarrohlik",
    desc: "Kam invaziv, endoskopik asbob-uskunalar yordamidagi aralashuvlar.",
  },
  {
    icon: HeartPulse,
    title: "Erkaklar reproduktiv salomatligi",
    desc: "Bepushtlik va reproduktiv tizim buzilishlarini tekshirish.",
  },
  {
    icon: Repeat,
    title: "Buyrak transplantatsiyasi",
    desc: "Surunkali buyrak yetishmovchiligida ko‘chirib o‘tkazish yo‘nalishi.",
  },
];

const phases = [
  {
    tag: "01 / Diagnostika",
    title: "UZI va laborator tekshiruv",
    points: [
      "Uroflowmetriya tahlili",
      "Siydik va qon tekshiruvlari",
      "Kasallik tarixini o‘rganish",
    ],
  },
  {
    tag: "02 / Davolash",
    title: "Endourologik aralashuv",
    points: [
      "Litotripsiya yoki endoskopiya",
      "Kam invaziv jarrohlik",
      "Individual dori-darmon terapiyasi",
    ],
  },
  {
    tag: "03 / Keyin",
    title: "Kuzatuv va tiklanish",
    points: [
      "Nazorat tekshiruvlari",
      "Funksional tiklanish dasturi",
      "Qayta kasallanishni oldini olish",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function FlowMonitorPanel() {
  return (
    <div className="relative rounded-2xl border border-background/10 bg-black/40 overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          Uroflowmetriya monitoringi
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-[#7DD3FC]">
          <Droplets className="h-3.5 w-3.5" />
          faol o‘lchov
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_260px]">
        <div className="relative h-[280px]">
          <svg viewBox="0 0 300 200" className="w-full h-full">
            {[50, 90, 130, 170].map((y) => (
              <line
                key={y}
                x1={20}
                y1={y}
                x2={280}
                y2={y}
                stroke="#ffffff"
                strokeOpacity={0.08}
                strokeWidth={1}
              />
            ))}
            <line
              x1={20}
              y1={20}
              x2={20}
              y2={170}
              stroke="#ffffff"
              strokeOpacity={0.15}
              strokeWidth={1}
            />
            <line
              x1={20}
              y1={170}
              x2={280}
              y2={170}
              stroke="#ffffff"
              strokeOpacity={0.15}
              strokeWidth={1}
            />

            <motion.path
              d="M20,170 Q60,170 80,120 Q100,60 150,55 Q200,60 220,110 Q240,150 280,155"
              fill="none"
              stroke="#7DD3FC"
              strokeWidth={2.5}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />

            <motion.circle
              cx={150}
              cy={55}
              r={4}
              fill="#7DD3FC"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx={150}
              cy={55}
              r={9}
              fill="none"
              stroke="#7DD3FC"
              strokeWidth={1}
              animate={{ opacity: [0.6, 0, 0.6], r: [6, 14, 6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <text
              x={22}
              y={45}
              fill="#ffffff"
              fillOpacity={0.35}
              fontSize={9}
              fontFamily="monospace"
            >
              30
            </text>
            <text
              x={22}
              y={85}
              fill="#ffffff"
              fillOpacity={0.35}
              fontSize={9}
              fontFamily="monospace"
            >
              20
            </text>
            <text
              x={22}
              y={125}
              fill="#ffffff"
              fillOpacity={0.35}
              fontSize={9}
              fontFamily="monospace"
            >
              10
            </text>
            <text
              x={20}
              y={185}
              fill="#ffffff"
              fillOpacity={0.35}
              fontSize={9}
              fontFamily="monospace"
            >
              vaqt (s)
            </text>
          </svg>
        </div>

        <div className="border-t md:border-t-0 md:border-l border-background/10 px-6 py-5 font-mono text-xs text-white/60 space-y-3">
          <div className="flex justify-between">
            <span className="text-white/40">Qmax</span>
            <span className="text-[#7DD3FC]">24.6 ml/s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Qo‘rtacha</span>
            <span className="text-[#7DD3FC]">14.2 ml/s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Hajm</span>
            <span>310 ml</span>
          </div>
          <div className="h-px bg-white/10 my-3" />
          <div className="flex justify-between">
            <span className="text-white/40">Davomiylik</span>
            <span>21 sek</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Holat</span>
            <span className="text-[#7DD3FC]">me’yorida</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Urology() {
  return (
    <div className="bg-background text-white">
      <section id="urology" className="relative overflow-hidden pt-40 pb-20">
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
                Urologiya blok
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Urologiya bo‘limi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Siydik-tanosil tizimi kasalliklarini zamonaviy diagnostika va kam
              invaziv endourologik usullar asosida davolaydigan
              ixtisoslashtirilgan bo‘lim.
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
            <FlowMonitorPanel />
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
            { icon: Timer, label: "24/7 shoshilinch urologik yordam" },
            { icon: Microscope, label: "Zamonaviy endourologik uskunalar" },
            {
              icon: ClipboardCheck,
              label: "Kam invaziv jarrohlik usullari",
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
                Urologik maslahat kerakmi?
              </h2>
              <p className="text-white/60 max-w-xl">
                Urologlarimiz bilan bog‘laning — holatingizni ko‘rib chiqib,
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

export default function UrologyPage() {
  return (
    <>
      <Header />
      <main>
        <Urology />
      </main>
      <Footer />
    </>
  );
}
