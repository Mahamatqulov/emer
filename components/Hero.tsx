"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiPhone } from "react-icons/fi";
import { HeartPulse } from "lucide-react";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();
  const backgrounds = ["/image/h1.jpg", "/image/h2.jpg", "/image/h3.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Crossfade background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgrounds[currentImage]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70" />

      {/* Aurora glow accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 700,
            height: 700,
            top: -200,
            right: -150,
            background:
              "radial-gradient(circle,rgba(10,132,255,.25) 0%,transparent 65%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: -120,
            left: -100,
            background:
              "radial-gradient(circle,rgba(52,199,89,.15) 0%,transparent 65%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left content */}
          <div className="space-y-6">
            {/* Live status pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-2 mt-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-green-400" />
              </span>
              <span className="text-xs font-semibold text-white">
                {t("hero.badge") || "24/7 Shoshilinch yordam"}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-4xl font-bold text-balance leading-[1.05] tracking-tight text-white"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/85 max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                className="px-8 py-3.5 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#0A84FF 0%,#0060CC 100%)",
                  boxShadow: "0 10px 36px rgba(10,132,255,.42)",
                }}
              >
                {t("hero.cta")}
              </button>

              <a
                href="tel:103"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/40 active:scale-95"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <FiPhone className="h-5 w-5 animate-pulse" />
                </div>

                <div className="leading-tight">
                  <p className="text-lg font-bold">103</p>
                </div>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-6 border-t border-white/15"
            >
              {[
                ["98.6%", "Qoniqish darajasi", "#FF9500"],
                ["45K+", "Bemorlar / yil", "#0A84FF"],
                ["320+", "Shifokorlar", "#34C759"],
              ].map(([v, l, c]) => (
                <div key={l}>
                  <div className="text-2xl font-bold" style={{ color: c }}>
                    {v}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-white/60 mt-0.5">
                    {l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — video glass card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/20 backdrop-blur-sm">
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
            </div>

            {/* Floating badge — On duty */}
            <div className="hidden lg:flex absolute -left-6 -bottom-6 items-center gap-2.5 rounded-2xl px-4 py-3 border border-white/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-green-500/15">
                <HeartPulse
                  size={15}
                  className="text-green-500"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <div className="text-[13px] font-semibold text-slate-900 dark:text-white">
                  21 shifokor
                </div>
                <div className="text-[11px] text-green-500 font-medium">
                  ● Barcha bo'limlar faol
                </div>
              </div>
            </div>

            {/* Floating badge — ER wait */}
            <div className="hidden lg:flex absolute -right-4 -top-4 items-center gap-2 rounded-2xl px-4 py-3 border border-white/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xl">
              <span className="text-[13px] font-semibold text-slate-900 dark:text-white">
                Navbat: <span className="text-green-500">~4 daq</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
