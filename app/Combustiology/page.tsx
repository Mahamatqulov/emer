"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Flame,
  Droplet,
  Activity,
  ShieldCheck,
  Timer,
  ClipboardCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

/* Signature: burn-severity gauge — a heat gradient bar (amber → deep red)
   marking I–III degree classification, the clinical way burn depth is
   communicated, instead of a generic icon grid. */

const degrees = [
  {
    level: "I daraja",
    desc: "Teri yuzasi qizargan, og‘riqli",
    width: "33%",
    color: "from-amber-300 to-amber-500",
  },
  {
    level: "II daraja",
    desc: "Pufakchalar, chuqurroq shikastlanish",
    width: "66%",
    color: "from-orange-400 to-red-500",
  },
  {
    level: "III daraja",
    desc: "To‘liq qalinlikdagi teri shikastlanishi",
    width: "100%",
    color: "from-red-600 to-red-900",
  },
];

const procedures = [
  {
    icon: Flame,
    title: "Termik kuyishlar davolash",
    desc: "Olov, issiq suyuqlik va bug‘ ta’sirida yuzaga kelgan kuyishlar.",
  },
  {
    icon: Droplet,
    title: "Kimyoviy kuyishlar",
    desc: "Agressiv moddalar ta’siridagi teri va to‘qima shikastlanishlari.",
  },
  {
    icon: Activity,
    title: "Elektr kuyishlari",
    desc: "Elektr toki ta’siridan yuzaga kelgan chuqur shikastlanishlar.",
  },
  {
    icon: ShieldCheck,
    title: "Teri transplantatsiyasi",
    desc: "Chuqur kuyishlarda teri payvandlash operatsiyalari.",
  },
  {
    icon: ClipboardCheck,
    title: "Chandiq profilaktikasi va korreksiyasi",
    desc: "Bitishdan keyingi chandiqlarni kamaytirish terapiyasi.",
  },
  {
    icon: Flame,
    title: "Bolalarda kuyish travmalari",
    desc: "Yosh bemorlar uchun moslashtirilgan davolash yondashuvi.",
  },
];

const phases = [
  {
    tag: "01 / Birlamchi",
    title: "Shoshilinch yordam",
    points: [
      "Kuyish maydonini baholash",
      "Og‘riqni nazorat qilish",
      "Infeksiyadan himoya",
    ],
  },
  {
    tag: "02 / Faol davolash",
    title: "Yara parvarishi",
    points: [
      "Zamonaviy bog‘lam materiallari",
      "Kerak bo‘lsa teri transplantatsiyasi",
      "Suyuqlik balansini nazorat qilish",
    ],
  },
  {
    tag: "03 / Tiklanish",
    title: "Reabilitatsiya",
    points: [
      "Chandiqqa qarshi terapiya",
      "Harakat funksiyasini tiklash",
      "Uzoq muddatli kuzatuv",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function SeverityGauge() {
  return (
    <div className="relative rounded-2xl border border-background/10 bg-black/30 overflow-hidden px-6 py-6">
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          Kuyish darajasi shkalasi
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-orange-400">
          <Flame className="h-3.5 w-3.5" />
          klinik tasnif
        </span>
      </div>
      <div className="space-y-5">
        {degrees.map((d) => (
          <motion.div key={d.level} variants={fadeUp}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">{d.level}</span>
              <span className="text-xs text-white/50">{d.desc}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${d.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: d.width }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: easeOut }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Combustiology() {
  return (
    <div className="bg-background text-white">
      <section
        id="combustiology"
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
                Kuyish markazi
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Kombustiologiya bo‘limi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Termik, kimyoviy va elektr kuyishlarni zamonaviy yara parvarishi
              va teri transplantatsiyasi usullari bilan davolaydigan
              ixtisoslashgan bo‘lim.
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
            <SeverityGauge />
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
            { icon: Timer, label: "24/7 kuyish markazi" },
            { icon: Droplet, label: "Zamonaviy yara parvarishi" },
            { icon: ClipboardCheck, label: "Chandiqqa qarshi terapiya" },
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
                Kuyish bo‘yicha shoshilinch yordam kerakmi?
              </h2>
              <p className="text-white/60 max-w-xl">
                Kombustiologiya jamoamiz bilan bog‘laning — darhol harakatga
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

export default function CombustiologyPage() {
  return (
    <>
      <Header />
      <main>
        <Combustiology />
      </main>
      <Footer />
    </>
  );
}
