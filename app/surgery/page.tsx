"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Scissors,
  Bone,
  Brain,
  Eye,
  Baby,
  Heart,
  ClipboardCheck,
  Timer,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  Activity,
} from "lucide-react";

const rooms = [
  {
    id: "OT-1",
    status: "band",
    proc: "Umumiy jarrohlik",
    eta: "≈ 40 daq. qoldi",
    bpm: 78,
  },
  {
    id: "OT-2",
    status: "tayyor",
    proc: "Ortopediya",
    eta: "15:30 boshlanadi",
    bpm: null,
  },
  {
    id: "OT-3",
    status: "bosh",
    proc: "—",
    eta: "Navbatga tayyor",
    bpm: null,
  },
  {
    id: "OT-4",
    status: "band",
    proc: "Nevrojarrohlik",
    eta: "≈ 1 soat qoldi",
    bpm: 66,
  },
];

const statusMap: Record<string, { label: string; dot: string; text: string }> =
  {
    band: { label: "Band", dot: "bg-red-500", text: "text-red-400" },
    tayyor: {
      label: "Tayyorlanmoqda",
      dot: "bg-yellow-500",
      text: "text-yellow-400",
    },
    bosh: { label: "Bo‘sh", dot: "bg-[#34E7A6]", text: "text-[#34E7A6]" },
  };

const procedures = [
  {
    icon: Scissors,
    title: "Umumiy jarrohlik",
    desc: "Qorin bo‘shlig‘i, ichak va yumshoq to‘qima operatsiyalari.",
  },
  {
    icon: Bone,
    title: "Travmatologiya-ortopediya",
    desc: "Suyak sinishlari, bo‘g‘im va tayanch-harakat tizimi jarrohligi.",
  },
  {
    icon: Brain,
    title: "Nevrojarrohlik",
    desc: "Bosh miya va orqa miya sohasidagi murakkab aralashuvlar.",
  },
  {
    icon: Heart,
    title: "Yurak-tomir jarrohligi",
    desc: "Yurak va yirik tomirlardagi shoshilinch operativ yordam.",
  },
  {
    icon: Eye,
    title: "Oftalmojarrohlik",
    desc: "Ko‘z sohasidagi mikroaraluv talab qiluvchi operatsiyalar.",
  },
  {
    icon: Baby,
    title: "Bolalar jarrohligi",
    desc: "Yosh bemorlar uchun moslashtirilgan operativ yondashuv.",
  },
];

const phases = [
  {
    tag: "01 / Oldin",
    title: "Tayyorgarlik",
    points: [
      "To‘liq tibbiy tekshiruv",
      "Anesteziolog konsultatsiyasi",
      "Bemor va oila bilan suhbat",
    ],
  },
  {
    tag: "02 / Davomida",
    title: "Operatsiya",
    points: [
      "Sterillik nazorati",
      "Hayotiy ko‘rsatkichlar monitoringi",
      "Jamoaviy nazorat ostida aralashuv",
    ],
  },
  {
    tag: "03 / Keyin",
    title: "Tiklanish",
    points: [
      "Reanimatsiyada kuzatuv",
      "Og‘riqni boshqarish",
      "Bosqichma-bosqich faollashtirish",
    ],
  },
];

/* -------------------------------- motion -------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/* ------------------------------ mini pieces ------------------------------ */

// A small ECG-style trace used inside occupied-room monitor cards.
function VitalTrace({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 120 28" className="w-full h-7" preserveAspectRatio="none">
      <motion.path
        d="M0 14 L20 14 L26 4 L32 24 L38 14 L46 14 L52 8 L56 20 L62 14 L120 14"
        fill="none"
        stroke={active ? "#34E7A6" : "currentColor"}
        strokeOpacity={active ? 1 : 0.25}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={
          active
            ? { duration: 1.8, repeat: Infinity, ease: "linear" }
            : { duration: 0.6 }
        }
      />
    </svg>
  );
}

/* -------------------------------- section -------------------------------- */

function Surgery() {
  return (
    <div className="bg-background text-white">
      {/* HERO */}
      <section id="surgery" className="relative overflow-hidden pt-40 pb-20">
        {/* sterile floor grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* overhead surgical-lamp glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[900px]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 22%, transparent) 0%, transparent 65%)",
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
                Operatsion blok
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Jarrohlik bo‘limi
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Zamonaviy diagnostika va operativ davolash usullari
              qo‘llaniladigan bo‘lim. Rejalashtirilgan va shoshilinch
              operatsiyalar malakali jarrohlar jamoasi tomonidan, to‘liq
              sterillik nazorati ostida amalga oshiriladi.
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

          {/* LIVE OT MONITOR BOARD — signature element */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
                Operatsion xonalar monitori
              </span>
              <span className="flex items-center gap-2 text-xs font-mono text-[#34E7A6]">
                <Activity className="h-3.5 w-3.5" />
                jonli
              </span>
            </div>

            <div className="relative rounded-2xl border border-background/10 bg-black/40 overflow-hidden">
              {/* faint CRT scanline sweep */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#34E7A6]/10 to-transparent"
                animate={{ x: ["-10%", "110%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y divide-background/10 sm:divide-y-0 sm:divide-x">
                {rooms.map((r) => {
                  const isBand = r.status === "band";
                  return (
                    <motion.div
                      key={r.id}
                      variants={fadeUp}
                      className="px-6 py-6 relative"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-sm text-white/60">
                          {r.id}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${statusMap[r.status].dot} ${
                              isBand ? "animate-pulse" : ""
                            }`}
                          />
                          <span
                            className={`text-[11px] font-mono uppercase tracking-wide ${statusMap[r.status].text}`}
                          >
                            {statusMap[r.status].label}
                          </span>
                        </span>
                      </div>

                      <div className="font-semibold text-sm mb-1">{r.proc}</div>
                      <div className="text-xs font-mono text-white/40 mb-3">
                        {r.eta}
                      </div>

                      <VitalTrace active={isBand} />

                      {isBand && r.bpm && (
                        <div className="mt-1 text-right font-mono text-[11px] text-[#34E7A6]/80">
                          {r.bpm} bpm
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCEDURES — instrument tray, horizontal scroll-snap */}
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
                Qanday operatsiyalarni bajaramiz
              </h2>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto pl-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pr-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {procedures.map((p) => (
              <div
                key={p.title}
                className="snap-start shrink-0 w-[260px] rounded-2xl border border-white/10 bg-black p-6 relative overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Accent line */}
                <span className="absolute top-0 left-6 h-1 w-12 rounded-full bg-primary" />

                {/* Icon */}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 mb-5">
                  <p.icon
                    className="h-5.5 w-5.5 text-primary"
                    strokeWidth={1.8}
                  />
                </span>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASES — connected by a single continuous trace, since order is real */}
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
              Operatsiya yo‘li
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Bemor uchun uchta bosqich
            </h2>
          </motion.div>

          <div className="relative">
            <motion.path
              d="M0 12 H860 M860 12 L850 4 M860 12 L850 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.1,
                ease: easeOut,
              }}
            />

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-200 dark:bg-slate-700"
            >
              {phases.map((ph) => (
                <motion.div
                  key={ph.tag}
                  variants={fadeUp}
                  className="bg-white dark:bg-slate-900 px-7 py-9 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  {/* Step */}
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
                    {ph.tag}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 mb-5 text-xl font-semibold text-slate-900 dark:text-white">
                    {ph.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-3">
                    {ph.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-6"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-16 border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-3 gap-8">
          {[
            { icon: Timer, label: "24/7 shoshilinch jarrohlik yordami" },
            {
              icon: ShieldCheck,
              label: "To‘liq sterillik va xavfsizlik nazorati",
            },
            {
              icon: ClipboardCheck,
              label: "Har bir operatsiyadan keyin nazorat",
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

      {/* CTA */}
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
                Operatsiya kerakmi yoki maslahat olmoqchimisiz?
              </h2>
              <p className="text-white/60 max-w-xl">
                Jarroh shifokorlarimiz bilan bog‘laning — holatingizni ko‘rib
                chiqib, keyingi qadamni belgilab beramiz.
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

export default function SurgeryPage() {
  return (
    <>
      <Header />
      <main>
        <Surgery />
      </main>
      <Footer />
    </>
  );
}
