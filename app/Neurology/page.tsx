"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  Brain,
  Waves,
  Zap,
  Activity,
  ShieldCheck,
  Timer,
  ClipboardCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const channels = [
  { name: "Fp1-F3", amp: 10, phase: 0 },
  { name: "F3-C3", amp: 16, phase: 0.6 },
  { name: "C3-P3", amp: 8, phase: 1.2 },
  { name: "P3-O1", amp: 13, phase: 1.9 },
];

function buildWave(amp: number, phase: number) {
  const points: string[] = [];
  const width = 300;
  const steps = 60;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y =
      Math.sin(i * 0.55 + phase) * amp * 0.5 +
      Math.sin(i * 1.3 + phase * 2) * amp * 0.25 +
      Math.sin(i * 0.15 + phase) * amp * 0.3;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return "M" + points.join(" L");
}

const services = [
  {
    icon: Activity,
    title: "Insult va qon aylanish buzilishlari",
    desc: "Miya qon aylanishi patologiyalarini tezkor diagnostika va davolash.",
  },
  {
    icon: Zap,
    title: "Epilepsiya va tutqanoq holatlari",
    desc: "EEG monitoring asosida tutqanoq turini aniqlash va terapiya tanlash.",
  },
  {
    icon: Brain,
    title: "Bosh og‘rig‘i va migren",
    desc: "Surunkali va kuchli bosh og‘riqlarining sababini aniqlash.",
  },
  {
    icon: Waves,
    title: "Perifer nerv kasalliklari",
    desc: "Neyropatiya va nerv tolalari shikastlanishlarini davolash.",
  },
  {
    icon: ClipboardCheck,
    title: "Harakat buzilishlari",
    desc: "Parkinson va boshqa ekstrapiramidal kasalliklar bo‘yicha nazorat.",
  },
  {
    icon: ShieldCheck,
    title: "EEG va EMG diagnostikasi",
    desc: "Miya va mushak-nerv faoliyatini elektrofiziologik baholash.",
  },
];

const phases = [
  {
    tag: "01 / Diagnostika",
    title: "Nevrologik ko‘rik va EEG",
    points: [
      "Batafsil nevrologik status",
      "Elektroensefalografiya (EEG)",
      "Zarur holatda MRI yo‘naltirish",
    ],
  },
  {
    tag: "02 / Davolash",
    title: "Individual terapiya rejasi",
    points: [
      "Dorivor terapiya tanlash",
      "Holat dinamikasini kuzatish",
      "Zarur holatda jarrohlikka yo‘naltirish",
    ],
  },
  {
    tag: "03 / Kuzatuv",
    title: "Reabilitatsiya va nazorat",
    points: [
      "Funksional tiklanish dasturi",
      "Muntazam nevrologik tekshiruv",
      "Uzoq muddatli kuzatuv rejasi",
    ],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function EEGPanel() {
  return (
    <div className="relative rounded-2xl border border-background/10 bg-black/40 overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
          EEG monitoring — jonli signal
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-[#7DD3FC]">
          <Activity className="h-3.5 w-3.5" />
          yozib olinmoqda
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_260px]">
        <div className="relative h-[280px] px-6 py-5 flex flex-col justify-between">
          {channels.map((c, i) => (
            <div
              key={c.name}
              className="relative flex items-center gap-3 h-1/4"
            >
              <span className="w-14 shrink-0 text-[10px] font-mono text-white/40">
                {c.name}
              </span>
              <svg
                viewBox="-2 -20 304 40"
                className="w-full h-10 overflow-visible"
              >
                <motion.path
                  d={buildWave(c.amp, c.phase)}
                  fill="none"
                  stroke="#7DD3FC"
                  strokeWidth={1.4}
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.6, delay: i * 0.15, ease: easeOut }}
                />
              </svg>
            </div>
          ))}
          <motion.div
            className="pointer-events-none absolute inset-y-0 w-px bg-[#7DD3FC]/50"
            initial={{ left: "0%" }}
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="border-t md:border-t-0 md:border-l border-background/10 px-6 py-5 font-mono text-xs text-white/60 space-y-3">
          <div className="flex justify-between">
            <span className="text-white/40">Chastota</span>
            <span className="text-[#7DD3FC]">9.8 Hz</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Amplituda</span>
            <span className="text-[#7DD3FC]">34 µV</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Kanallar</span>
            <span>4 / 19 faol</span>
          </div>
          <div className="h-px bg-white/10 my-3" />
          <div className="flex justify-between">
            <span className="text-white/40">Ritm</span>
            <span className="text-[#7DD3FC]">alfa-dominant</span>
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

function Neurology() {
  return (
    <div className="bg-background text-white">
      <section id="neurology" className="relative overflow-hidden pt-40 pb-20">
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
                Nerv tizimi bloki
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Nevrologiya bo‘limi
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Markaziy va perifer nerv tizimi kasalliklarini elektrofiziologik
              diagnostika va zamonaviy terapiya usullari asosida davolaydigan
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
            <EEGPanel />
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
            { icon: Timer, label: "24/7 shoshilinch nevrologik yordam" },
            { icon: Waves, label: "EEG va EMG diagnostikasi" },
            {
              icon: ClipboardCheck,
              label: "Individual reabilitatsiya dasturi",
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
                Nevrologik maslahat kerakmi?
              </h2>
              <p className="text-white/60 max-w-xl">
                Nevrologlarimiz bilan bog‘laning — holatingizni ko‘rib chiqib,
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

export default function NeurologyPage() {
  return (
    <>
      <Header />
      <main>
        <Neurology />
      </main>
      <Footer />
    </>
  );
}
