"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { motion, easeOut, Variants } from "framer-motion";
import Image from "next/image";
import {
  Award,
  Briefcase,
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

const director = {
  name: "Aliyev Bahodir Rustamovich",
  position: "Bosh direktor",
  degree: "Tibbiyot fanlari doktori, professor",
  experience: "22 yillik tajriba",
  message:
    "Markazimizning asosiy vazifasi — har bir bemorga eng yuqori sifatli va tezkor shoshilinch tibbiy yordamni ko‘rsatishdir. Jamoamiz bilan biz doimo bu maqsad sari ishlaymiz.",
  photo:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  email: "direktor@fstb.uz",
  phone: "+998 73 244 92 11",
};

const leaders = [
  {
    name: "Karimova Nodira Anvarovna",
    position: "Tibbiy ishlar bo‘yicha direktor o‘rinbosari",
    degree: "Tibbiyot fanlari nomzodi",
    experience: "18 yil tajriba",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    email: "tibbiy@fstb.uz",
    phone: "+998 73 244 92 11",
    reception: "Dushanba, Chorshanba 14:00–17:00",
  },
  {
    name: "Yusupov Sardor Davronovich",
    position: "Iqtisodiy va moliyaviy masalalar bo‘yicha o‘rinbosar",
    degree: "Iqtisod fanlari magistri",
    experience: "14 yil tajriba",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    email: "moliya@fstb.uz",
    phone: "+998 73 244 92 11",
    reception: "Seshanba, Payshanba 10:00–13:00",
  },
  {
    name: "Rahimova Gulnoza Baxtiyorovna",
    position: "Bosh hamshira",
    degree: "Oliy toifali hamshira",
    experience: "20 yil tajriba",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    email: "hamshira@fstb.uz",
    phone: "+998 73 244 92 11",
    reception: "Har kuni 09:00–12:00",
  },
  {
    name: "Tursunov Jamshid Olimovich",
    position: "Sifat nazorati bo‘limi boshlig‘i",
    degree: "Tibbiyot fanlari nomzodi",
    experience: "12 yil tajriba",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
    email: "sifat@fstb.uz",
    phone: "+998 73 244 92 11",
    reception: "Dushanba, Juma 13:00–16:00",
  },
  {
    name: "Nazarova Shahnoza Ilhomovna",
    position: "Kadrlar bo‘limi boshlig‘i",
    degree: "Boshqaruv magistri",
    experience: "10 yil tajriba",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    email: "kadrlar@fstb.uz",
    phone: "+998 73 244 92 11",
    reception: "Har kuni 09:00–13:00",
  },
  {
    name: "Ergashev Ulug‘bek Farhodovich",
    position: "Fuqarolik mudofaasi va FVV bo‘yicha o‘rinbosar",
    degree: "Oliy harbiy-tibbiy ma’lumot",
    experience: "16 yil tajriba",
    photo:
      "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=800&auto=format&fit=crop",
    email: "fvv@fstb.uz",
    phone: "+998 73 244 92 11",
    reception: "Seshanba, Payshanba 14:00–17:00",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function DirectorCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-background/10 bg-black/40">
      <div className="grid md:grid-cols-[280px_1fr]">
        <div className="relative h-[280px] md:h-full">
          <Image
            src={director.photo}
            alt={director.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
        </div>

        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-3">
            Markaz rahbari
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-1">
            {director.name}
          </h3>
          <p className="text-accent text-sm font-medium mb-4">
            {director.position}
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-5 font-mono text-xs text-white/50">
            <span className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-accent" />
              {director.degree}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5 text-accent" />
              {director.experience}
            </span>
          </div>

          <p className="text-white/70 leading-7 mb-6 max-w-xl">
            {director.message}
          </p>

          <div className="flex flex-wrap gap-4 font-mono text-xs text-white/60">
            <a
              href={`mailto:${director.email}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              {director.email}
            </a>
            <a
              href={`tel:${director.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              {director.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeaderCard({ leader }: { leader: (typeof leaders)[number] }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-black overflow-hidden shadow-lg hover:shadow-2xl hover:border-accent/40 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={leader.photo}
          alt={leader.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      <div className="p-6 relative">
        <h3 className="font-semibold text-lg mb-1">{leader.name}</h3>
        <p className="text-accent text-sm mb-3">{leader.position}</p>
        <div className="flex flex-col gap-1.5 font-mono text-xs text-white/45">
          <span className="flex items-center gap-1.5">
            <Award className="h-3 w-3 text-accent/70" />
            {leader.degree}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-3 w-3 text-accent/70" />
            {leader.experience}
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/95 backdrop-blur-sm border-t border-white/10 p-6 space-y-2.5 font-mono text-xs text-white/70">
        <a
          href={`mailto:${leader.email}`}
          className="flex items-center gap-2 hover:text-accent transition-colors"
        >
          <Mail className="h-3.5 w-3.5 text-accent" />
          {leader.email}
        </a>
        <a
          href={`tel:${leader.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2 hover:text-accent transition-colors"
        >
          <Phone className="h-3.5 w-3.5 text-accent" />
          {leader.phone}
        </a>
        <span className="flex items-center gap-2 text-white/50">
          <Calendar className="h-3.5 w-3.5 text-accent" />
          {leader.reception}
        </span>
      </div>
    </div>
  );
}

function Administration() {
  return (
    <div className="bg-background text-white">
      <section
        id="administration"
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
              <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                Ma’muriyat blok
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.05]"
            >
              Markaz rahbariyati
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/70 leading-8 max-w-2xl"
            >
              Markazimiz faoliyatini boshqaradigan tajribali rahbarlar va bo‘lim
              boshliqlari jamoasi bilan tanishing.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-16"
          >
            <motion.div variants={fadeUp}>
              <DirectorCard />
            </motion.div>
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
            className="max-w-2xl mb-14"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
              Boshqaruv jamoasi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Bo‘lim boshliqlari va o‘rinbosarlar
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {leaders.map((leader) => (
              <motion.div key={leader.name} variants={fadeUp}>
                <LeaderCard leader={leader} />
              </motion.div>
            ))}
          </motion.div>
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
                Ma’muriyat bilan bog‘lanish kerakmi?
              </h2>
              <p className="text-white/60 max-w-xl">
                Murojaat va takliflaringiz bo‘yicha qabulxonamiz orqali
                bog‘lanishingiz mumkin.
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

export default function AdministrationPage() {
  return (
    <>
      <Header />
      <main>
        <Administration />
      </main>
      <Footer />
    </>
  );
}
