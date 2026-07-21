"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Baby,
  AlertTriangle,
  Activity,
  Users,
  ShieldCheck,
  Timer,
  ClipboardCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

/* Signature: pediatric triage board — priority tags (qizil/sariq/yashil)
   the way a real trauma triage screen works, but softened corners since
   this is the children's department. */

const triage = [
  {
    level: "1-daraja",
    label: "Favqulodda",
    color: "bg-red-500",
    text: "text-red-400",
    note: "darhol aralashuv",
  },
  {
    level: "2-daraja",
    label: "Shoshilinch",
    color: "bg-yellow-500",
    text: "text-yellow-400",
    note: "10 daqiqa ichida",
  },
  {
    level: "3-daraja",
    label: "Barqaror",
    color: "bg-[#34E7A6]",
    text: "text-[#34E7A6]",
    note: "kuzatuv ostida",
  },
];

const procedures = [
  {
    icon: Users,
    title: "Ko‘p a’zoli shikastlanishlar",
    desc: "Bir vaqtning o‘zida bir nechta tizim jarohatlangan holatlar.",
  },
  {
    icon: AlertTriangle,
    title: "Bosh va qorin bo‘shlig‘i birlashgan jarohatlari",
    desc: "Murakkab, ko‘p profilli jarrohlik yondashuvi talab etadigan holatlar.",
  },
  {
    icon: Activity,
    title: "Suyak-mushak tizimi siniqlari",
    desc: "Bolalar skeletiga mos maxsus fiksatsiya usullari.",
  },
  {
    icon: ShieldCheck,
    title: "Kuyish bilan birga kelgan jarohatlar",
    desc: "Kombinatsiyalangan travma va kuyish holatlarida kompleks davolash.",
  },
  {
    icon: Baby,
    title: "Bolalar reanimatsiyasi",
    desc: "Yosh xususiyatlariga moslashtirilgan intensiv terapiya.",
  },
  {
    icon: ClipboardCheck,
    title: "Post-travmatik reabilitatsiya",
    desc: "Jismoniy va psixologik tiklanish dasturi.",
  },
];

const phases = [
  {
    tag: "01 / Qabul",
    title: "Triaj",
    points: [
      "Og‘irlik darajasini aniqlash",
      "Ustuvorlikni belgilash",
      "Oilaga darhol xabar berish",
    ],
  },
  {
    tag: "02 / Aralashuv",
    title: "Shoshilinch yordam",
    points: [
      "Ko‘p tarmoqli jamoa",
      "Bir vaqtda bir nechta yo‘nalish",
      "Doimiy hayotiy monitoring",
    ],
  },
  {
    tag: "03 / Tiklanish",
    title: "Kompleks reabilitatsiya",
    points: [
      "Jismoniy reabilitatsiya",
      "Psixologik yordam",
      "Oila bilan hamkorlik",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function TriageBoard() {
  return (
    <div className="relative rounded-2xl border border-background/10 bg-black/30 overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5 pb-4">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          Triaj taxtasi
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-white/50">
          <Activity className="h-3.5 w-3.5 text-accent" />
          jonli
        </span>
      </div>
      <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-background/10">
        {triage.map((t, i) => (
          <motion.div key={t.level} variants={fadeUp} className="px-6 py-7">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`h-2.5 w-2.5 rounded-full ${t.color} ${i === 0 ? "animate-pulse" : ""}`}
              />
              <span className="font-mono text-[11px] tracking-widest text-white/40 uppercase">
                {t.level}
              </span>
            </div>
            <div className={`text-xl font-semibold mb-1 ${t.text}`}>
              {t.label}
            </div>
            <div className="text-sm text-white/50">{t.note}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PediatricPolytrauma() {
  return (
    <div className="bg-background text-white">
      <section
        id="pediatric-polytrauma"
        className="relative overflow-hidden pt-40 pb-20"
      >
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
                Bolalar shoshilinch blok
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Bolalar qo‘shaloq tan jarohatlari bo‘limi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Bir nechta a’zo va tizim bir vaqtda shikastlangan bolalarga
              ixtisoslashgan, ko‘p tarmoqli jamoa tomonidan ko‘rsatiladigan
              shoshilinch yordam bo‘limi.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
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
            <TriageBoard />
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
                Qanday holatlar bilan ishlaymiz
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
              Yordam yo‘li
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
            { icon: Timer, label: "24/7 bolalar shoshilinch yordami" },
            { icon: Users, label: "Ko‘p tarmoqli mutaxassislar jamoasi" },
            { icon: ClipboardCheck, label: "Oila bilan doimiy aloqa" },
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
                Farzandingizga shoshilinch yordam kerakmi?
              </h2>
              <p className="text-white/60 max-w-xl">
                Bolalar shoshilinch jamoamiz bilan bog‘laning — darhol harakatga
                o‘tamiz.
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

export default function PediatricPolytraumaPage() {
  return (
    <>
      <Header />
      <main>
        <PediatricPolytrauma />
      </main>
      <Footer />
    </>
  );
}
