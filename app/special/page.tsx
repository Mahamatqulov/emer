"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import {
  BrainCircuit,
  Users2,
  ClipboardList,
  Microscope,
  FlaskConical,
  ScanEye,
  Dna,
  FileSearch,
  UserCheck,
  PhoneCall,
  ArrowUpRight,
  MessagesSquare,
} from "lucide-react";

/* ---------------------------------- data --------------------------------- */

const stats = [
  { value: "15+", label: "Yo‘nalish mutaxassislari" },
  { value: "48 soat", label: "O‘rtacha konsilium muddati" },
  { value: "300+", label: "Yillik murakkab holatlar" },
];

const areas = [
  {
    icon: Users2,
    title: "Ko‘p tarmoqli konsilium",
    desc: "Bir nechta yo‘nalish shifokorlari — kardiolog, nevrolog, jarroh va boshqalar — bemor holatini birgalikda ko‘rib chiqadi va yagona davolash rejasini ishlab chiqadi.",
  },
  {
    icon: FileSearch,
    title: "Ikkilamchi tibbiy xulosa",
    desc: "Boshqa shifoxonalarda qo‘yilgan tashxis yoki tavsiya etilgan davolash rejasi qayta ko‘rib chiqiladi, zarur bo‘lsa qo‘shimcha tekshiruvlar tayinlanadi.",
  },
  {
    icon: Dna,
    title: "Kamdan-kam uchraydigan holatlar",
    desc: "Aniq tashxis qo‘yilmagan yoki noodatiy simptomatikaga ega bemorlar uchun chuqurlashtirilgan diagnostik qidiruv olib boriladi.",
  },
  {
    icon: ClipboardList,
    title: "Operatsiya oldi maxsus baholash",
    desc: "Yuqori xavf guruhidagi bemorlar uchun operatsiyagacha bo‘lgan kengaytirilgan tekshiruv va anesteziologik risklarni baholash.",
  },
];

const diagnostics = [
  {
    icon: ScanEye,
    name: "Yuqori aniqlikdagi MRT/KT",
    spec: "Nozik to‘qima va organ tuzilishini tahlil qilish",
  },
  {
    icon: FlaskConical,
    name: "Kengaytirilgan laboratoriya",
    spec: "Biokimyoviy va immunologik chuqur tekshiruvlar",
  },
  {
    icon: Microscope,
    name: "Gistologik va biopsiya tahlili",
    spec: "To‘qima namunalarini mikroskopik tekshirish",
  },
  {
    icon: BrainCircuit,
    name: "Neyrofunksional diagnostika",
    spec: "EEG va nevrologik funksional testlar",
  },
];

const process = [
  {
    n: "01",
    title: "Murojaat",
    desc: "Bemor yoki boshqa bo‘lim shifokori orqali yo‘naltiriladi.",
  },
  {
    n: "02",
    title: "Hujjatlar tahlili",
    desc: "Oldingi tashxis va tekshiruv natijalari ko‘rib chiqiladi.",
  },
  {
    n: "03",
    title: "Konsilium",
    desc: "Tegishli mutaxassislar birgalikda holatni muhokama qiladi.",
  },
  {
    n: "04",
    title: "Yakuniy xulosa",
    desc: "Aniq davolash rejasi va tavsiyalar bemorga taqdim etiladi.",
  },
];

/* -------------------------------- motion -------------------------------- */

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

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

/* -------------------------------- section -------------------------------- */

function Special() {
  return (
    <>
      {/* HERO */}
      <section id="special" className="relative overflow-hidden pt-40 pb-24">
        <BrainCircuit
          className="pointer-events-none absolute -left-20 -top-10 h-[380px] w-[380px] text-foreground/[0.03]"
          strokeWidth={0.6}
        />
        <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-accent/[0.07] via-transparent to-transparent" />

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
              <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                Konsultativ xizmat
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Maxsus bo‘lim
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-8 max-w-2xl"
            >
              Aniq tashxis qiyin bo‘lgan yoki bir nechta yo‘nalishni qamrab
              oladigan murakkab klinik holatlar uchun mo‘ljallangan bo‘lim. Bu
              yerda turli sohadagi yuqori malakali shifokorlar birgalikda
              ishlab, har bir bemor uchun aniq va asoslangan davolash yo‘lini
              belgilaydi.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Konsultatsiyaga yozilish
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="tel:1050"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 backdrop-blur-md px-6 py-3 text-sm font-medium hover:bg-background/60 transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-accent" />
                Ma’lumot olish
              </a>
            </motion.div>
          </motion.div>

          {/* stats — 3-up, larger cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-20 grid sm:grid-cols-3 gap-5"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="rounded-2xl border border-border/60 bg-background/50 backdrop-blur-md px-7 py-9"
              >
                <div className="text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
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

      {/* AREAS — alternating rows */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-16"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Ish yo‘nalishlari
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Qanday holatlar bilan ishlaymiz
            </h2>
          </motion.div>

          <div className="divide-y divide-border/60 border-y border-border/60">
            {areas.map((a, i) => (
              <motion.div
                key={a.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="group grid md:grid-cols-[auto_1fr_auto] items-start md:items-center gap-6 py-9"
              >
                <span className="font-mono text-xs text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-5">
                  <a.icon
                    className="h-7 w-7 text-accent shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-1.5">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-6 max-w-2xl">
                      {a.desc}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-accent transition-colors hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSTICS */}
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
              Diagnostika imkoniyatlari
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Chuqur tekshiruv uchun asos
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-4"
          >
            {diagnostics.map((d) => (
              <motion.div
                key={d.name}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-md p-5"
              >
                <d.icon
                  className="h-6 w-6 text-accent shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <div className="font-medium text-sm">{d.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {d.spec}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS — horizontal steps */}
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
              Konsiliumga qanday tushiladi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Murojaat jarayoni
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {process.map((p, i) => (
              <motion.div key={p.n} variants={fadeUp} className="relative">
                <div className="rounded-2xl border border-border/60 bg-background/40 backdrop-blur-md p-6 h-full">
                  <span className="font-mono text-2xl text-accent">{p.n}</span>
                  <h3 className="font-semibold mt-3 mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-6">
                    {p.desc}
                  </p>
                </div>
                {i < process.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-3 h-px w-6 bg-gradient-to-r from-border/80 to-transparent" />
                )}
              </motion.div>
            ))}
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
              Mutaxassislar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5">
              Bir necha yo‘nalish, bitta xulosa
            </h2>
            <p className="text-muted-foreground leading-7 max-w-xl">
              Kardiologiya, nevrologiya, jarrohlik va boshqa yo‘nalish
              shifokorlari zarurat bo‘yicha konsiliumga jalb qilinadi. Bemorga
              faqat bitta — barcha mutaxassislar kelishgan yakuniy tavsiya
              beriladi.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <UserCheck className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                Har bir holat individual tarzda ko‘rib chiqiladi
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
            <MessagesSquare
              className="h-8 w-8 text-accent mb-5"
              strokeWidth={1.5}
            />
            <h3 className="text-xl font-semibold mb-2">
              Ikkilamchi xulosa kerakmi?
            </h3>
            <p className="text-sm text-muted-foreground leading-6 mb-6">
              Tashxis yoki davolash rejasi bo‘yicha shubhangiz bo‘lsa,
              mutaxassislarimizdan qo‘shimcha fikr so‘rashingiz mumkin.
            </p>

            <a
              href="tel:1050"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground"
            >
              <PhoneCall className="h-4 w-4" />
              Bog‘lanish
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function SpecialPage() {
  return (
    <>
      <Header />
      <main>
        <Special />
      </main>
      <Footer />
    </>
  );
}
