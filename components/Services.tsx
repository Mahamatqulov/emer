"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import services from "@/data/services.json";
import {
  FiTruck,
  FiHome,
  FiHeart,
  FiUser,
  FiUsers,
  FiLayers,
  FiZap,
  FiEye,
} from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  ambulance: <FiTruck className="w-8 h-8" />,
  stethoscope: <FiHome className="w-8 h-8" />,
  heart: <FiHeart className="w-8 h-8" />,
  bone: <FiLayers className="w-8 h-8" />,
  baby: <FiUser className="w-8 h-8" />,
  scalpel: <FiZap className="w-8 h-8" />,
  brain: <FiEye className="w-8 h-8" />,
  microscope: <FiUsers className="w-8 h-8" />,
};

export function Services() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-linear-to-b from-background via-primary/5 to-background py-24"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur-xl">
            Emergency Medical Center
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            {t("services.title")}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/60 p-8 shadow-[0_15px_45px_rgba(0,0,0,.08)] backdrop-blur-2xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_25px_70px_rgba(0,0,0,.18)] dark:border-white/10 dark:bg-slate-900/60"
            >
              {/* Animated Top Border */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-linear-to-r from-primary to-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 10,
                  scale: 1.1,
                }}
                className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/70 text-primary shadow-lg backdrop-blur-xl dark:bg-slate-800/70"
              >
                {iconMap[service.icon] ?? <FiHeart className="h-8 w-8" />}
              </motion.div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-bold tracking-tight text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-4 leading-7 text-muted-foreground">
                {service.description}
              </p>

              {/* Details */}
              <div className="relative z-10 mt-6 overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                <div className="border-t border-border pt-5">
                  <p className="text-sm leading-6 text-muted-foreground">
                    {service.details}
                  </p>

                  <div className="mt-5 flex items-center gap-2 font-semibold text-primary">
                    Batafsil
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Glass Reflection */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/20 blur-3xl transition-all duration-700 group-hover:scale-150 dark:bg-white/5" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
