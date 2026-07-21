"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Droplets,
  Droplet,
  Users,
  HeartPulse,
  Syringe,
  ThermometerSnowflake,
  FlaskConical,
  ClipboardCheck,
  Timer,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const bloodStock = [
  { type: "A(II) Rh+", level: 72, status: "yetarli", units: 48 },
  { type: "O(I) Rh−", level: 18, status: "tanqis", units: 6 },
  { type: "B(III) Rh+", level: 55, status: "yetarli", units: 30 },
  { type: "AB(IV) Rh−", level: 34, status: "kam", units: 12 },
];

const statusMap: Record<
  string,
  { label: string; dot: string; text: string; color: string }
> = {
  yetarli: {
    label: "Yetarli",
    dot: "bg-[#34E7A6]",
    text: "text-[#34E7A6]",
    color: "#34E7A6",
  },
  kam: {
    label: "Kam",
    dot: "bg-yellow-500",
    text: "text-yellow-400",
    color: "#FBBF24",
  },
  tanqis: {
    label: "Tanqis",
    dot: "bg-red-500",
    text: "text-red-400",
    color: "#FF3B57",
  },
};

const procedures = [
  {
    icon: Droplets,
    title: "Qon komponentlarini ajratish",
    desc: "Eritrotsit, plazma va trombotsit massasini alohida tayyorlash.",
  },
  {
    icon: Users,
    title: "Donorlik xizmati",
    desc: "Donorlarni tekshiruv va qon topshirish jarayonini tashkil etish.",
  },
  {
    icon: HeartPulse,
    title: "To‘liq qon quyish",
    desc: "Shoshilinch holatlarda mos qon guruhini tezkor yetkazish.",
  },
  {
    icon: Syringe,
    title: "Trombotsit kontsentrati",
    desc: "Qon ivishi buzilgan bemorlar uchun maxsus tayyorlov.",
  },
  {
    icon: FlaskConical,
    title: "Plazma tayyorlash",
    desc: "Muzlatilgan plazmani zaxiralash va operatsiyalarga taqdim etish.",
  },
  {
    icon: Timer,
    title: "Shoshilinch qon yetkazish",
    desc: "Reanimatsiya va jarrohlik bo‘limlariga tezkor yetkazib berish.",
  },
];

const phases = [
  {
    tag: "01 / Oldin",
    title: "Tekshiruv",
    points: [
      "Donor tibbiy ko‘rigi",
      "Qon guruhi va Rh omilini aniqlash",
      "Muvofiqlik (crossmatch) testi",
    ],
  },
  {
    tag: "02 / Davomida",
    title: "Qon olish/quyish",
    points: [
      "Steril sharoitda qon olish",
      "Hayotiy ko‘rsatkichlar monitoringi",
      "Laborant nazorati ostida jarayon",
    ],
  },
  {
    tag: "03 / Keyin",
    title: "Saqlash va nazorat",
    points: [
      "Belgilangan haroratda saqlash",
      "Bemor holatini kuzatish",
      "Zaxirani qayta hisoblash",
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

// A falling blood-drop animation used above each stock vial.
function FallingDrop({ color, delay = 0 }: { color: string; delay?: number }) {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 h-2 w-2 rounded-full"
      style={{
        background: color,
        clipPath: "path('M4 0C4 0 0 6 0 8a4 4 0 008 0C8 6 4 0 4 0Z')",
      }}
      initial={{ top: "-15%", opacity: 0 }}
      animate={{ top: ["-15%", "95%"], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay, ease: "easeIn" }}
    />
  );
}

// Vertical vial that fills to the current stock level.
function BloodVial({ level, color }: { level: number; color: string }) {
  return (
    <div className="relative h-16 w-6 mx-auto">
      <FallingDrop color={color} />
      <div className="absolute inset-0 top-3 rounded-b-full rounded-t-sm border border-white/15 bg-black/30 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0"
          style={{ background: color, opacity: 0.85 }}
          initial={{ height: 0 }}
          whileInView={{ height: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut }}
        />
      </div>
    </div>
  );
}

/* -------------------------------- section -------------------------------- */

function BloodTransfusion() {
  return (
    <div className="bg-background text-white">
      {/* HERO */}
      <section id="blood" className="relative overflow-hidden pt-40 pb-20">
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
              "radial-gradient(ellipse at center, color-mix(in srgb, #FF3B57 22%, transparent) 0%, transparent 65%)",
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
                Qon quyish bo‘limi
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Qon quyish bo‘limi
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Donorlardan qon yig‘ish, komponentlarga ajratish, laboratoriya
              tekshiruvidan o‘tkazish va shoshilinch holatlarda bemorlarga
              tezkor yetkazib berishni ta’minlaydigan bo‘lim.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Donor bo‘lish
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

          {/* LIVE BLOOD STOCK BOARD — signature element */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
                Qon zaxirasi taxtasi
              </span>
              <span className="flex items-center gap-2 text-xs font-mono text-[#FF3B57]">
                <Droplet className="h-3.5 w-3.5" />
                jonli
              </span>
            </div>

            <div className="relative rounded-2xl border border-background/10 bg-black/40 overflow-hidden">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-[#FF3B57]/10 to-transparent"
                animate={{ x: ["-10%", "110%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
              />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y divide-background/10 sm:divide-y-0 sm:divide-x">
                {bloodStock.map((b) => (
                  <motion.div
                    key={b.type}
                    variants={fadeUp}
                    className="px-6 py-6 relative"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-sm text-white/60">
                        {b.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${statusMap[b.status].dot} ${
                            b.status === "tanqis" ? "animate-pulse" : ""
                          }`}
                        />
                        <span
                          className={`text-[11px] font-mono uppercase tracking-wide ${statusMap[b.status].text}`}
                        >
                          {statusMap[b.status].label}
                        </span>
                      </span>
                    </div>

                    <div className="text-xs font-mono text-white/40 mb-4">
                      {b.units} doza mavjud
                    </div>

                    <BloodVial
                      level={b.level}
                      color={statusMap[b.status].color}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCEDURES */}
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
                Qanday xizmatlarni ko‘rsatamiz
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
                <span className="absolute top-0 left-6 h-1 w-12 rounded-full bg-primary" />

                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 mb-5">
                  <p.icon
                    className="h-5.5 w-5.5 text-primary"
                    strokeWidth={1.8}
                  />
                </span>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {p.title}
                </h3>

                <p className="text-sm leading-6 text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASES */}
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
              Qon yetib borishi uchun uchta bosqich
            </h2>
          </motion.div>

          <div className="relative">
            <div className="relative">
              <motion.svg
                viewBox="0 0 860 24"
                className="w-full h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M0 12 H860 M860 12 L850 4 M860 12 L850 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                />
              </motion.svg>
            </div>

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
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary">
                    {ph.tag}
                  </span>

                  <h3 className="mt-3 mb-5 text-xl font-semibold text-slate-900 dark:text-white">
                    {ph.title}
                  </h3>

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
            { icon: Timer, label: "24/7 shoshilinch qon yetkazib berish" },
            {
              icon: ThermometerSnowflake,
              label: "Belgilangan haroratda xavfsiz saqlash",
            },
            {
              icon: ShieldCheck,
              label: "To‘liq laboratoriya tekshiruvidan o‘tgan qon",
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
                  "radial-gradient(circle, color-mix(in srgb, #FF3B57 18%, transparent) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Qon kerakmi yoki donor bo‘lmoqchimisiz?
              </h2>
              <p className="text-white/60 max-w-xl">
                Qon quyish bo‘limi mutaxassislari bilan bog‘laning — mos qon
                guruhini tezkor topib beramiz.
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

export default function BloodTransfusionPage() {
  return (
    <>
      <Header />
      <main>
        <BloodTransfusion />
      </main>
      <Footer />
    </>
  );
}
