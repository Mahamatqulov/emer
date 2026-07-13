// "use client";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { FiPhone } from "react-icons/fi";
// import { HeartPulse } from "lucide-react";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence, type Variants } from "framer-motion";

// export function Hero() {
//   const { t } = useLanguage();
//   const backgrounds = ["/image/h1.jpg", "/image/h2.jpg", "/image/h3.jpg"];
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % backgrounds.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.2 },
//     },
//   };
//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
//       {/* Crossfade background */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentImage}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${backgrounds[currentImage]})` }}
//         />
//       </AnimatePresence>
//       <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />

//       {/* Aurora glow accents */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div
//           className="absolute rounded-full"
//           style={{
//             width: 700,
//             height: 700,
//             top: -200,
//             right: -150,
//             background:
//               "radial-gradient(circle,rgba(10,132,255,.25) 0%,transparent 65%)",
//           }}
//         />
//         <div
//           className="absolute rounded-full"
//           style={{
//             width: 500,
//             height: 500,
//             bottom: -120,
//             left: -100,
//             background:
//               "radial-gradient(circle,rgba(52,199,89,.15) 0%,transparent 65%)",
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid md:grid-cols-2 gap-12 items-center"
//         >
//           {/* Left content */}
//           <div className="space-y-6">
//             {/* Live status pill */}
//             <motion.div
//               variants={itemVariants}
//               className="inline-flex items-center gap-2.5 px-4 py-2 mt-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
//             >
//               <span className="relative flex w-2 h-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
//                 <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
//               </span>
//               <span className="text-xs font-semibold text-white">
//                 {t("hero.badge") || "24/7 Shoshilinch yordam"}
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               className="text-4xl md:text-5xl lg:text-4xl font-bold text-balance leading-[1.05] tracking-tight text-white"
//             >
//               {t("hero.title")}
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-lg text-white/85 max-w-xl"
//             >
//               {t("hero.subtitle")}
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 pt-2"
//             >
//               <button
//                 className="px-8 py-3.5 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:scale-95"
//                 style={{
//                   background: "linear-gradient(135deg,#0A84FF 0%,#0060CC 100%)",
//                   boxShadow: "0 10px 36px rgba(10,132,255,.42)",
//                 }}
//               >
//                 {t("hero.cta")}
//               </button>

//               <a
//                 href="tel:103"
//                 className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40 active:scale-95"
//               >
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
//                   <FiPhone className="h-5 w-5 animate-pulse" />
//                 </div>

//                 <div className="leading-tight">
//                   <p className="text-lg font-bold">103</p>
//                 </div>
//               </a>
//             </motion.div>

//             {/* Stats row */}
//             <motion.div
//               variants={itemVariants}
//               className="flex gap-8 pt-6 border-t border-white/15"
//             >
//               {[
//                 ["98.6%", "Qoniqish darajasi", "#FF9500"],
//                 ["45K+", "Bemorlar / yil", "#0A84FF"],
//                 ["320+", "Shifokorlar", "#34C759"],
//               ].map(([v, l, c]) => (
//                 <div key={l}>
//                   <div className="text-2xl font-bold" style={{ color: c }}>
//                     {v}
//                   </div>
//                   <div className="text-[11px] font-semibold uppercase tracking-wide text-white/60 mt-0.5">
//                     {l}
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right — video glass card */}
//           <motion.div variants={itemVariants} className="relative">
//             <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/20 backdrop-blur-sm">
//               <div className="relative w-full aspect-video">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                   title="Hospital Center Overview"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full"
//                 />
//               </div>
//             </div>

//             {/* Floating badge — On duty */}
//             <div className="hidden lg:flex absolute -left-6 -bottom-6 items-center gap-2.5 rounded-2xl px-4 py-3 border border-white/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl">
//               <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-green-500/15">
//                 <HeartPulse
//                   size={15}
//                   className="text-green-500"
//                   strokeWidth={2.5}
//                 />
//               </div>
//               <div>
//                 <div className="text-[13px] font-semibold text-slate-900 dark:text-white">
//                   21 shifokor
//                 </div>
//                 <div className="text-[11px] text-green-500 font-medium">
//                   ● Barcha bo'limlar faol
//                 </div>
//               </div>
//             </div>

//             {/* Floating badge — ER wait */}
//             <div className="hidden lg:flex absolute -right-4 -top-4 items-center gap-2 rounded-2xl px-4 py-3 border border-white/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl">
//               <span className="text-[13px] font-semibold text-slate-900 dark:text-white">
//                 Navbat: <span className="text-green-500">~4 daq</span>
//               </span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// 2

// "use client";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { FiPhone } from "react-icons/fi";
// import { HeartPulse } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   useReducedMotion,
//   animate,
//   type Variants,
// } from "framer-motion";

// /* ---------- kichik yordamchi: raqamni sanab chiqish ---------- */
// function useCountUp(target: number, decimals = 0, duration = 1.6) {
//   const [value, setValue] = useState(0);
//   const reduce = useReducedMotion();

//   useEffect(() => {
//     if (reduce) {
//       setValue(target);
//       return;
//     }
//     const controls = animate(0, target, {
//       duration,
//       delay: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//       onUpdate: (v) => setValue(v),
//     });
//     return () => controls.stop();
//   }, [target, duration, reduce]);

//   return value.toFixed(decimals);
// }

// export function Hero() {
//   const { t } = useLanguage();
//   const backgrounds = ["/image/h1.jpg", "/image/h2.jpg", "/image/h3.jpg"];
//   const [currentImage, setCurrentImage] = useState(0);
//   const reduce = useReducedMotion();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % backgrounds.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   /* ---------- tilt / liquid glass video karta ---------- */
//   const cardRef = useRef<HTMLDivElement>(null);
//   const mx = useMotionValue(0);
//   const my = useMotionValue(0);
//   const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
//     stiffness: 150,
//     damping: 18,
//   });
//   const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
//     stiffness: 150,
//     damping: 18,
//   });
//   const sheenX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (reduce || !cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     mx.set((e.clientX - rect.left) / rect.width - 0.5);
//     my.set((e.clientY - rect.top) / rect.height - 0.5);
//   };
//   const handleMouseLeave = () => {
//     mx.set(0);
//     my.set(0);
//   };

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.13, delayChildren: 0.15 },
//     },
//   };
//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 22 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   const stats = [
//     { v: 98.6, decimals: 1, suffix: "%", l: "Qoniqish darajasi", c: "#FFB020" },
//     { v: 45, decimals: 0, suffix: "K+", l: "Bemorlar / yil", c: "#0A84FF" },
//     { v: 320, decimals: 0, suffix: "+", l: "Shifokorlar", c: "#22D3A6" },
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-[#0B1220]">
//       {/* ---------- Fon: Ken Burns crossfade ---------- */}
//       {backgrounds.map((src, i) => (
//         <motion.div
//           key={src}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${src})` }}
//           initial={false}
//           animate={{
//             opacity: i === currentImage ? 1 : 0,
//             scale: i === currentImage ? 1.08 : 1,
//           }}
//           transition={{
//             opacity: { duration: 1.6, ease: "easeInOut" },
//             scale: { duration: 8, ease: "linear" },
//           }}
//         />
//       ))}
//       <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/70 via-[#0B1220]/55 to-[#0B1220]/85" />

//       {/* ---------- Aurora orqa fon ---------- */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <motion.div
//           className="absolute rounded-full"
//           style={{
//             width: 700,
//             height: 700,
//             top: -200,
//             right: -150,
//             background:
//               "radial-gradient(circle,rgba(10,132,255,.28) 0%,transparent 65%)",
//           }}
//           animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
//           transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute rounded-full"
//           style={{
//             width: 520,
//             height: 520,
//             bottom: -120,
//             left: -100,
//             background:
//               "radial-gradient(circle,rgba(34,211,166,.18) 0%,transparent 65%)",
//           }}
//           animate={reduce ? undefined : { x: [0, -25, 0], y: [0, 20, 0] }}
//           transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid md:grid-cols-2 gap-12 items-center"
//         >
//           {/* ---------- Chap kontent ---------- */}
//           <div className="space-y-6">
//             {/* Jonli status — yurak urishi ritmida */}
//             <motion.div
//               variants={itemVariants}
//               className="inline-flex items-center gap-2.5 px-4 py-2 mt-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md"
//             >
//               <span className="relative flex w-2.5 h-2.5">
//                 <motion.span
//                   className="absolute inline-flex h-full w-full rounded-full bg-[#22D3A6]"
//                   animate={
//                     reduce
//                       ? undefined
//                       : { scale: [1, 1.35, 1, 1.2, 1], opacity: [0.9, 0.3, 0.9, 0.3, 0.9] }
//                   }
//                   transition={{
//                     duration: 1.8,
//                     times: [0, 0.15, 0.3, 0.45, 1],
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//                 <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-[#22D3A6]" />
//               </span>
//               <span className="text-xs font-semibold text-white tracking-wide">
//                 {t("hero.badge") || "24/7 Shoshilinch yordam"}
//               </span>
//             </motion.div>

//             <motion.h1
//               variants={itemVariants}
//               style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
//               className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-balance leading-[1.05] tracking-tight text-white"
//             >
//               {t("hero.title")}
//             </motion.h1>

//             <motion.p
//               variants={itemVariants}
//               className="text-lg text-white/75 max-w-xl leading-relaxed"
//             >
//               {t("hero.subtitle")}
//             </motion.p>

//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 pt-2"
//             >
//               <motion.button
//                 whileHover={{ y: -3 }}
//                 whileTap={{ scale: 0.96 }}
//                 className="group relative overflow-hidden px-8 py-3.5 rounded-2xl font-semibold text-white flex items-center justify-center gap-2"
//                 style={{
//                   background: "linear-gradient(135deg,#0A84FF 0%,#0050B3 100%)",
//                   boxShadow: "0 10px 36px rgba(10,132,255,.42)",
//                 }}
//               >
//                 <span
//                   className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
//                   style={{
//                     background:
//                       "linear-gradient(115deg,transparent 20%,rgba(255,255,255,.35) 50%,transparent 80%)",
//                   }}
//                 />
//                 <span className="relative">{t("hero.cta")}</span>
//               </motion.button>

//               <motion.a
//                 whileHover={{ y: -3 }}
//                 whileTap={{ scale: 0.96 }}
//                 href="tel:103"
//                 className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF5C5C] to-[#E63946] px-5 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-red-500/40"
//               >
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
//                   <FiPhone className="h-5 w-5 animate-pulse" />
//                 </div>
//                 <p className="text-lg font-bold" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
//                   103
//                 </p>
//               </motion.a>
//             </motion.div>

//             {/* Statistika — sanab chiquvchi raqamlar */}
//             <motion.div
//               variants={itemVariants}
//               className="flex gap-8 pt-6 border-t border-white/10"
//             >
//               {stats.map((s) => {
//                 const val = useCountUp(s.v, s.decimals);
//                 return (
//                   <div key={s.l}>
//                     <div
//                       className="text-2xl font-bold tabular-nums"
//                       style={{ color: s.c, fontFamily: "'IBM Plex Mono', monospace" }}
//                     >
//                       {val}
//                       {s.suffix}
//                     </div>
//                     <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50 mt-0.5">
//                       {s.l}
//                     </div>
//                   </div>
//                 );
//               })}
//             </motion.div>
//           </div>

//           {/* ---------- O'ng — tilt liquid-glass video karta ---------- */}
//           <motion.div variants={itemVariants} className="relative" style={{ perspective: 1000 }}>
//             <motion.div
//               ref={cardRef}
//               onMouseMove={handleMouseMove}
//               onMouseLeave={handleMouseLeave}
//               style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//               className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/20 backdrop-blur-sm"
//             >
//               <div className="relative w-full aspect-video">
//                 <iframe
//                   width="100%"
//                   height="100%"
//                   src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//                   title="Hospital Center Overview"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="w-full h-full"
//                 />
//               </div>
//               {/* Liquid glass yaltirash */}
//               {!reduce && (
//                 <motion.div
//                   className="pointer-events-none absolute inset-y-0 w-1/3"
//                   style={{
//                     left: sheenX,
//                     background:
//                       "linear-gradient(90deg,transparent,rgba(255,255,255,.14),transparent)",
//                     mixBlendMode: "overlay",
//                   }}
//                 />
//               )}
//               <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
//             </motion.div>

//             {/* Suzuvchi badge — shifokorlar */}
//             <motion.div
//               className="hidden lg:flex absolute -left-6 -bottom-6 items-center gap-2.5 rounded-2xl px-4 py-3 border border-white/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl"
//               animate={reduce ? undefined : { y: [0, -6, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
//             >
//               <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-[#22D3A6]/15">
//                 <HeartPulse size={15} className="text-[#22D3A6]" strokeWidth={2.5} />
//               </div>
//               <div>
//                 <div className="text-[13px] font-semibold text-slate-900 dark:text-white">
//                   21 shifokor
//                 </div>
//                 <div className="text-[11px] text-[#22D3A6] font-medium">
//                   ● Barcha bo'limlar faol
//                 </div>
//               </div>
//             </motion.div>

//             {/* Suzuvchi badge — navbat */}
//             <motion.div
//               className="hidden lg:flex absolute -right-4 -top-4 items-center gap-2 rounded-2xl px-4 py-3 border border-white/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl"
//               animate={reduce ? undefined : { y: [0, -6, 0] }}
//               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
//             >
//               <span
//                 className="text-[13px] font-semibold text-slate-900 dark:text-white tabular-nums"
//                 style={{ fontFamily: "'IBM Plex Mono', monospace" }}
//               >
//                 Navbat: <span className="text-[#22D3A6]">~4 daq</span>
//               </span>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* ---------- Imzo element: EKG puls chizig'i ---------- */}
//       <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden opacity-70">
//         <svg
//           viewBox="0 0 1200 40"
//           preserveAspectRatio="none"
//           className="w-full h-full"
//         >
//           <motion.path
//             d="M0,20 L280,20 L300,20 L316,5 L332,35 L348,10 L364,20 L640,20 L660,20 L676,5 L692,35 L708,10 L724,20 L1200,20"
//             fill="none"
//             stroke="#22D3A6"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             pathLength="1"
//             style={{ strokeDasharray: "0.25 1" }}
//             animate={reduce ? undefined : { strokeDashoffset: [0, -1] }}
//             transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }

// 3

"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiPhone } from "react-icons/fi";
import { HeartPulse } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  animate,
  type Variants,
} from "framer-motion";

/* ---------- kichik yordamchi: raqamni sanab chiqish ---------- */
function useCountUp(target: number, decimals = 0, duration = 1.6) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setValue(target);
      return;
    }
    const controls = animate(0, target, {
      duration,
      delay: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [target, duration, reduce]);

  return value.toFixed(decimals);
}

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  /* ---------- tilt / liquid glass video karta (o'ng tomondagi) ---------- */
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });
  const sheenX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

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
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stats = [
    { v: 98.6, decimals: 1, suffix: "%", l: "Qoniqish darajasi", c: "#FFB020" },
    { v: 45, decimals: 0, suffix: "K+", l: "Bemorlar / yil", c: "#0A84FF" },
    { v: 320, decimals: 0, suffix: "+", l: "Shifokorlar", c: "#22D3A6" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-[#0B1220]">
      {/* ---------- Fon: video, sekin "breathing zoom" bilan ---------- */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoReady ? 1 : 0, transition: "opacity 1s ease" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
        >
          <source src="/image/h5.mp4" type="video/mp4" />
        </video>
        {/* Video tayyor bo'lguncha ko'rinadigan zaxira rasm */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/image/h5.mp4)",
            opacity: videoReady ? 0 : 1,
            transition: "opacity 1s ease",
          }}
        />
      </motion.div>

      {/* Pastga qarab quyuqlashadigan overlay — matn har doim o'qiladigan bo'lishi uchun */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0B1220]/75 via-[#0B1220]/60 to-[#0B1220]/90" />
      <div className="absolute inset-0 bg-linear-to-r from-[#0B1220]/50 via-transparent to-transparent" />

      {/* ---------- Aurora orqa fon ---------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -200,
            right: -150,
            background:
              "radial-gradient(circle,rgba(10,132,255,.28) 0%,transparent 65%)",
          }}
          animate={reduce ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            bottom: -120,
            left: -100,
            background:
              "radial-gradient(circle,rgba(34,211,166,.18) 0%,transparent 65%)",
          }}
          animate={reduce ? undefined : { x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* ---------- Chap kontent ---------- */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-2 mt-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md"
            >
              <span className="relative flex w-2.5 h-2.5">
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full bg-[#22D3A6]"
                  animate={
                    reduce
                      ? undefined
                      : {
                          scale: [1, 1.35, 1, 1.2, 1],
                          opacity: [0.9, 0.3, 0.9, 0.3, 0.9],
                        }
                  }
                  transition={{
                    duration: 1.8,
                    times: [0, 0.15, 0.3, 0.45, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-[#22D3A6]" />
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">
                {t("hero.badge") || "24/7 Shoshilinch yordam"}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-balance leading-[1.05] tracking-tight text-white"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/75 max-w-xl leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="group relative overflow-hidden px-8 py-3.5 rounded-2xl font-semibold text-white flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg,#0A84FF 0%,#0050B3 100%)",
                  boxShadow: "0 10px 36px rgba(10,132,255,.42)",
                }}
              >
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  style={{
                    background:
                      "linear-gradient(115deg,transparent 20%,rgba(255,255,255,.35) 50%,transparent 80%)",
                  }}
                />
                <span className="relative">{t("hero.cta")}</span>
              </motion.button>

              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                href="tel:103"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF5C5C] to-[#E63946] px-5 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-red-500/40"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <FiPhone className="h-5 w-5 animate-pulse" />
                </div>
                <p
                  className="text-lg font-bold"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  103
                </p>
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-6 border-t border-white/10"
            >
              {stats.map((s) => {
                const val = useCountUp(s.v, s.decimals);
                return (
                  <div key={s.l}>
                    <div
                      className="text-2xl font-bold tabular-nums"
                      style={{
                        color: s.c,
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {val}
                      {s.suffix}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-white/50 mt-0.5">
                      {s.l}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* ---------- O'ng — tilt liquid-glass video karta (YouTube) ---------- */}
          <motion.div
            variants={itemVariants}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/20 backdrop-blur-sm"
            >
              <div className="relative w-full aspect-video">
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
              {!reduce && (
                <motion.div
                  className="pointer-events-none absolute inset-y-0 w-1/3"
                  style={{
                    left: sheenX,
                    background:
                      "linear-gradient(90deg,transparent,rgba(255,255,255,.14),transparent)",
                    mixBlendMode: "overlay",
                  }}
                />
              )}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </motion.div>

            <motion.div
              className="hidden lg:flex absolute -left-6 -bottom-6 items-center gap-2.5 rounded-2xl px-4 py-3 border border-white/20 bg-white/90 dark:bg-slate-900/10 backdrop-blur-md shadow-xl"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-[#22D3A6]/15">
                <HeartPulse
                  size={15}
                  className="text-[#22D3A6]"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-slate-900 dark:text-white">
                  21 shifokor
                </div>
                <div className="text-[11px] text-[#22D3A6] font-medium">
                  ● Barcha bo'limlar faol
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:flex absolute -right-4 -top-4 items-center gap-2 rounded-2xl px-4 py-3 border border-white/20 bg-white/90 dark:bg-slate-900/10 backdrop-blur-md shadow-xl"
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
            >
              <span
                className="text-[13px] font-semibold text-slate-900 dark:text-white tabular-nums"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Navbat: <span className="text-[#22D3A6]">~4 daq</span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Imzo element: EKG puls chizig'i ---------- */}
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden opacity-70">
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <motion.path
            d="M0,20 L280,20 L300,20 L316,5 L332,35 L348,10 L364,20 L640,20 L660,20 L676,5 L692,35 L708,10 L724,20 L1200,20"
            fill="none"
            stroke="#22D3A6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            style={{ strokeDasharray: "0.25 1" }}
            animate={reduce ? undefined : { strokeDashoffset: [0, -1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </section>
  );
}
