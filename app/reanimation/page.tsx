"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Clock,
  Users,
  Wind,
  Zap,
  Stethoscope,
  ShieldAlert,
  Siren,
  Monitor,
  Syringe,
  ScanLine,
  PhoneCall,
  ArrowUpRight,
} from "lucide-react";

/* ---------------------------------- data --------------------------------- */
import { easeOut, Variants } from "framer-motion";

const stats = [
  { value: "24/7", label: "Uzluksiz kuzatuv" },
  { value: "12+", label: "Reanimatsiya o‘rinlari" },
  { value: "90 son.", label: "O‘rtacha javob vaqti" },
  { value: "1:1", label: "Hamshira–bemor nisbati" },
];

const directions = [
  {
    icon: Wind,
    title: "Sun’iy nafas yordami",
    desc: "Zamonaviy ventilyatorlar yordamida nafas yetishmovchiligi bo‘lgan bemorlarga to‘liq va qisman respirator qo‘llab-quvvatlash.",
  },
  {
    icon: HeartPulse,
    title: "Yurak-qon tomir monitoringi",
    desc: "EKG, arterial bosim va gemodinamikani uzluksiz kuzatish, zarur holatda defibrilyatsiya va kardiostimulyatsiya.",
  },
  {
    icon: ShieldAlert,
    title: "Og‘ir travma kuzatuvi",
    desc: "Politravma va operatsiyadan keyingi og‘ir holatdagi bemorlarni barqarorlashtirish va intensiv nazorat ostida davolash.",
  },
  {
    icon: Activity,
    title: "Sepsis va organ yetishmovchiligi",
    desc: "Ko‘p organli yetishmovchilik protokollari, gemodializ bilan hamkorlikda buyrak funksiyasini qo‘llab-quvvatlash.",
  },
  {
    icon: Syringe,
    title: "Toksikologik yordam",
    desc: "Zaharlanish va dori-preparat overdozasi holatlarida antidot terapiyasi va organizmni detoksifikatsiya qilish.",
  },
  {
    icon: Stethoscope,
    title: "Neyroreanimatsiya",
    desc: "Insult, bosh miya shikastlanishi va koma holatidagi bemorlar uchun ixtisoslashgan nevrologik kuzatuv.",
  },
];

const equipment = [
  {
    icon: Wind,
    name: "Yuqori sinfli ventilyatorlar",
    spec: "Invaziv va noinvaziv rejimlar",
  },
  {
    icon: Monitor,
    name: "Bedside monitorlar",
    spec: "SpO₂, EKG, NIBP, temperatura — real vaqtda",
  },
  {
    icon: Syringe,
    name: "Infuzomat va perfuzorlar",
    spec: "Aniq dozalash, dori titratsiyasi",
  },
  {
    icon: ScanLine,
    name: "Portativ USG apparati",
    spec: "To‘shak yonida tezkor diagnostika",
  },
  {
    icon: Zap,
    name: "Defibrillyator/kardiomonitor",
    spec: "Yurak to‘xtashida zudlik bilan aralashuv",
  },
  {
    icon: Siren,
    name: "Markazlashtirilgan nazorat posti",
    spec: "Barcha o‘rinlarni bir ekrandan kuzatish",
  },
];

const process = [
  {
    n: "01",
    title: "Yo‘naltirish",
    desc: "Tez yordam brigadasi yoki shifoxona bo‘limlaridan og‘ir ahvoldagi bemor qabul qilinadi.",
  },
  {
    n: "02",
    title: "Triaj va baholash",
    desc: "Reanimatolog shifokor bemor holatini zudlik bilan baholaydi, ustuvorlik darajasini belgilaydi.",
  },
  {
    n: "03",
    title: "Barqarorlashtirish",
    desc: "Nafas yo‘li, qon aylanishi va hayotiy ko‘rsatkichlar zudlik bilan barqarorlashtiriladi.",
  },
  {
    n: "04",
    title: "Uzluksiz kuzatuv",
    desc: "Bemor 24 soatlik monitoring ostida qoladi, davolash rejasi kunlik ravishda yangilanadi.",
  },
];

/* -------------------------------- motion -------------------------------- */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};
/* -------------------------------- section -------------------------------- */

function Reanimation() {
  return (
    <>
      {/* HERO */}
      <section
        id="reanimation"
        className="relative overflow-hidden pt-40 pb-24"
      >
        {/* watermark icon */}
        <HeartPulse
          className="pointer-events-none absolute -right-24 -top-16 h-[420px] w-[420px] text-foreground/[0.03]"
          strokeWidth={0.6}
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-linear-gradient-to-b from-accent/[0.07] via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-4">
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
                Statsionar bo‘lim · 24/7
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Reanimatsiya va
              <br className="hidden md:block" /> intensiv terapiya
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-8 max-w-2xl"
            >
              Og‘ir ahvoldagi bemorlarga eng murakkab daqiqalarda hayot uchun
              kurash olib boriladigan bo‘lim. Har bir o‘rin markazlashtirilgan
              monitoring tizimiga ulangan bo‘lib, tajribali reanimatolog
              shifokorlar va hamshiralar jamoasi bemor holatini soniyama-soniya
              kuzatib boradi.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Bog‘lanish
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="tel:1050"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 backdrop-blur-md px-6 py-3 text-sm font-medium hover:bg-background/60 transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-accent" />
                Shoshilinch: 1050
              </a>
            </motion.div>
          </motion.div>

          {/* stats */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="bg-background/70 backdrop-blur-md px-6 py-8"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Asosiy yo‘nalishlar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Nima bilan shug‘ullanamiz
            </h2>
            <p className="text-muted-foreground leading-7">
              Bo‘lim turli xil og‘ir klinik holatlarni qamrab oladi — nafas
              yetishmovchiligidan tortib, ko‘p organli yetishmovchilikkacha.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {directions.map((d) => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                className="group relative rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md p-6 transition-colors hover:border-accent/40"
              >
                <d.icon
                  className="h-8 w-8 text-accent mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-6">
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="py-24 border-t border-border/60 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Zamonaviy jihozlar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Har bir o‘rin — to‘liq jihozlangan
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {equipment.map((e) => (
              <motion.div
                key={e.name}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-md p-5"
              >
                <e.icon
                  className="h-6 w-6 text-accent shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <div className="font-medium text-sm">{e.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {e.spec}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Qabul jarayoni
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Bemor bo‘limga qanday tushadi
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="relative"
          >
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border/60 to-transparent hidden sm:block" />
            <div className="space-y-8">
              {process.map((p) => (
                <motion.div
                  key={p.n}
                  variants={fadeUp}
                  className="relative flex gap-6 sm:pl-0"
                >
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background font-mono text-sm text-accent">
                    {p.n}
                  </span>
                  <div className="pt-2.5">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-6 mt-1 max-w-xl">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM / CTA */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Tibbiy jamoa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
              Har smenada tayyor turgan mutaxassislar
            </h2>
            <p className="text-muted-foreground leading-7 max-w-xl">
              Reanimatolog-anesteziolog shifokorlar va yuqori malakali
              hamshiralar jamoasi kecha-yu kunduz smena asosida ishlaydi. Har
              bir bemorga alohida davolash rejasi tuziladi va kunlik konsilium
              orqali ko‘rib chiqiladi.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                1:1 hamshiralik nazorati og‘ir holatlarda
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-2xl border border-border/60 bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-md p-8"
          >
            <Clock className="h-8 w-8 text-accent mb-5" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold mb-2">
              Shoshilinch holatlarda
            </h3>
            <p className="text-sm text-muted-foreground leading-6 mb-6">
              Har qanday vaqtda qo‘ng‘iroq qiling — jamoamiz zudlik bilan
              choralar ko‘radi.
            </p>
            <a
              href="tel:1050"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground"
            >
              <PhoneCall className="h-4 w-4" />
              1050 raqamiga qo‘ng‘iroq qiling
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function ReanimationPage() {
  return (
    <>
      <Header />
      <main>
        <Reanimation />
      </main>
      <Footer />
    </>
  );
}
