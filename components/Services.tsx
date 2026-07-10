// "use client";

// import React from "react";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { motion } from "framer-motion";
// import services from "@/data/services.json";
// import {
//   FiTruck,
//   FiHome,
//   FiHeart,
//   FiUser,
//   FiUsers,
//   FiLayers,
//   FiZap,
//   FiEye,
// } from "react-icons/fi";

// const iconMap: Record<string, React.ReactNode> = {
//   ambulance: <FiTruck className="w-8 h-8" />,
//   stethoscope: <FiHome className="w-8 h-8" />,
//   heart: <FiHeart className="w-8 h-8" />,
//   bone: <FiLayers className="w-8 h-8" />,
//   baby: <FiUser className="w-8 h-8" />,
//   scalpel: <FiZap className="w-8 h-8" />,
//   brain: <FiEye className="w-8 h-8" />,
//   microscope: <FiUsers className="w-8 h-8" />,
// };

// export function Services() {
//   const { t } = useLanguage();

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section
//       id="services"
//       className="relative overflow-hidden bg-linear-to-b from-background via-primary/5 to-background py-24"
//     >
//       {/* Background Blur */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
//         <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="mb-20 text-center"
//         >
//           <span className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur-xl">
//             Emergency Medical Center
//           </span>

//           <h2 className="mt-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
//             {t("services.title")}
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
//             {t("services.subtitle")}
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
//         >
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               variants={cardVariants}
//               whileHover={{
//                 y: -10,
//                 scale: 1.03,
//               }}
//               whileTap={{
//                 scale: 0.98,
//               }}
//               className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/60 p-8 shadow-[0_15px_45px_rgba(0,0,0,.08)] backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_25px_70px_rgba(0,0,0,.18)] dark:border-white/10 dark:bg-slate-900/60"
//             >
//               {/* Animated Top Border */}
//               <div className="absolute left-0 top-0 h-1 w-0 bg-linear-to-r from-primary to-cyan-400 transition-all duration-500 group-hover:w-full" />

//               {/* Glow */}
//               <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//               {/* Icon */}
//               <motion.div
//                 whileHover={{
//                   rotate: 10,
//                   scale: 1.1,
//                 }}
//                 className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/70 text-primary shadow-lg backdrop-blur-xl dark:bg-slate-800/70"
//               >
//                 {iconMap[service.icon] ?? <FiHeart className="h-8 w-8" />}
//               </motion.div>

//               {/* Title */}
//               <h3 className="relative z-10 text-2xl font-bold tracking-tight text-foreground">
//                 {service.title}
//               </h3>

//               {/* Description */}
//               <p className="relative z-10 mt-4 leading-7 text-muted-foreground">
//                 {service.description}
//               </p>

//               {/* Details */}
//               <div className="relative z-10 mt-6 overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
//                 <div className="border-t border-border pt-5">
//                   <p className="text-sm leading-6 text-muted-foreground">
//                     {service.details}
//                   </p>

//                   <div className="mt-5 flex items-center gap-2 font-semibold text-primary">
//                     Batafsil
//                     <span className="transition-transform duration-300 group-hover:translate-x-2">
//                       →
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Glass Reflection */}
//               <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/20 blur-3xl transition-all duration-700 group-hover:scale-150 dark:bg-white/5" />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiPhone } from "react-icons/fi";
import { Calendar, HeartPulse, Clock, BadgeCheck, Play } from "lucide-react";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();
  const backgrounds = ["/image/h1.jpg", "/image/h2.jpg", "/image/h3.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.13, delayChildren: 0.15 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const glass =
    "border border-white/15 bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.28)]";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Crossfade background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgrounds[currentImage]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />

      {/* Aurora glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full animate-[drift1_18s_ease-in-out_infinite]"
          style={{
            width: 720,
            height: 720,
            top: -220,
            right: -180,
            background:
              "radial-gradient(circle,rgba(10,132,255,.30) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full animate-[drift2_22s_ease-in-out_infinite]"
          style={{
            width: 520,
            height: 520,
            bottom: -140,
            left: -120,
            background:
              "radial-gradient(circle,rgba(52,199,89,.18) 0%,transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-16 items-center"
        >
          {/* ── Left content ── */}
          <div>
            <motion.div
              variants={itemVariants}
              className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7 ${glass}`}
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
              </span>
              <span className="text-xs font-semibold text-white">
                {t("hero.badge") || "24/7 Shoshilinch yordam"}
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="text-xs font-semibold text-[#5AC8FA]">
                Navbat: ~4 daq
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[42px] sm:text-5xl lg:text-6xl xl:text-[68px] font-bold text-balance leading-[1.04] tracking-tight text-white mb-6"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 max-w-xl mb-9 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3.5 pt-1 mb-12"
            >
              <button
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-white transition-all hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#0A84FF 0%,#0060CC 100%)",
                  boxShadow:
                    "0 12px 32px rgba(10,132,255,.45), inset 0 1px 0 rgba(255,255,255,.2)",
                }}
              >
                <Calendar size={17} strokeWidth={2.5} />
                {t("hero.cta")}
              </button>

              <a
                href="tel:103"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/40 active:scale-95"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <FiPhone className="h-4 w-4 animate-pulse" />
                </span>
                <span className="text-lg font-bold leading-none">103</span>
              </a>

              <button
                className={`hidden sm:flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white/90 transition-all hover:-translate-y-0.5 active:scale-95 ${glass}`}
              >
                <Play size={14} strokeWidth={2.5} className="fill-white/90" />
                Video
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-6 border-t border-white/15"
            >
              {[
                ["98.6%", "Qoniqish darajasi", "#FF9500"],
                ["45K+", "Bemorlar / yil", "#5AC8FA"],
                ["320+", "Shifokorlar", "#34C759"],
              ].map(([v, l, c]) => (
                <div key={l}>
                  <div
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: c }}
                  >
                    {v}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50 mt-0.5">
                    {l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — video card + floating cards ── */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block h-[560px]"
          >
            {/* Main video panel */}
            <div
              className={`absolute right-0 top-6 w-[86%] rounded-3xl overflow-hidden ${glass}`}
            >
              <div className="relative w-full aspect-[4/5]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Hospital Center Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Floating card — Cardiac ICU */}
            <motion.div
              className={`absolute -left-6 top-0 w-[190px] rounded-2xl p-4 ${glass}`}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-green-500/20">
                  <HeartPulse
                    size={15}
                    className="text-green-400"
                    strokeWidth={2.5}
                  />
                </div>
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-white/50">
                  Reanimatsiya
                </span>
              </div>
              <div className="text-[28px] font-bold tracking-tight text-white leading-none">
                98.2%
              </div>
              <div className="text-[11px] text-white/45 mt-1">
                Yashash ko'rsatkichi
              </div>
              <div className="flex gap-1 mt-2.5">
                {[80, 95, 70, 88, 100, 76, 92].map((h, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full bg-green-400"
                    style={{ height: `${h * 0.26}px`, opacity: 0.3 + h / 300 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating card — On duty */}
            <motion.div
              className={`absolute -left-10 bottom-24 w-[220px] rounded-2xl p-4 ${glass}`}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="text-[10.5px] font-bold uppercase tracking-wider text-white/50 mb-3">
                Hozir navbatchi
              </div>
              <div className="flex -space-x-2.5 mb-2.5">
                {[
                  "photo-1559839734-2b71ea197ec2",
                  "photo-1612349317150-e413f6a5b16d",
                  "photo-1594824476967-48c8b964273f",
                ].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/${id}?w=48&h=48&fit=crop`}
                    alt="Shifokor"
                    className="w-8 h-8 rounded-full border-2 border-black/40 object-cover"
                  />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-black/40 flex items-center justify-center text-white text-[10px] font-bold bg-[#0A84FF]">
                  +18
                </div>
              </div>
              <div className="text-[14px] font-semibold text-white">
                21 shifokor faol
              </div>
              <div className="text-[11px] text-green-400 font-medium mt-0.5">
                ● Barcha bo'limlar faol
              </div>
            </motion.div>

            {/* Floating pill — JCI-style accreditation */}
            <motion.div
              className={`absolute right-2 -bottom-4 rounded-2xl px-4 py-3 flex items-center gap-2.5 ${glass}`}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              <BadgeCheck
                size={16}
                className="text-[#5AC8FA]"
                strokeWidth={2}
              />
              <div>
                <div className="text-[12px] font-bold text-white">
                  Davlat litsenziyasi
                </div>
                <div className="text-[10px] text-white/45">
                  Rasmiy akkreditatsiya
                </div>
              </div>
            </motion.div>

            {/* Floating pill — ER wait */}
            <motion.div
              className={`absolute -right-6 top-40 rounded-2xl px-4 py-3 ${glass}`}
              animate={{ y: [0, 9, 0] }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              }}
            >
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-[#FF9500]" strokeWidth={2.5} />
                <span className="text-[13px] font-semibold text-white">
                  Navbat <span className="text-green-400">~4 daq</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
