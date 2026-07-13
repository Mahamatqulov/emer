"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import CountUp from "react-countup";
import { FiUsers, FiCalendar } from "react-icons/fi";
import { FaUserDoctor, FaBed } from "react-icons/fa6";

export function Statistics() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });
  const [finished, setFinished] = useState<Record<string, boolean>>({});

  const stats = [
    {
      key: "patients",
      value: 50000,
      label: t("stats.patients_label"),
      suffix: "+",
      icon: FiUsers,
      cx: 150,
    },
    {
      key: "doctors",
      value: 150,
      label: t("stats.doctors_label"),
      suffix: "+",
      icon: FaUserDoctor,
      cx: 450,
    },
    {
      key: "beds",
      value: 500,
      label: t("stats.beds_label"),
      suffix: "+",
      icon: FaBed,
      cx: 750,
    },
    {
      key: "years",
      value: 25,
      label: t("stats.years_label"),
      suffix: "+",
      icon: FiCalendar,
      cx: 1050,
    },
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        delay: 0.5 + i * 0.18,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      {/* Ambient aurora — hero bilan bir xil oilaviy tovush */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 flex items-center justify-center gap-2.5"
        >
          <span className="relative flex h-2 w-2">
            <motion.span
              className="absolute inline-flex h-full w-full rounded-full bg-primary"
              animate={
                isInView ? { scale: [1, 1.4, 1], opacity: [0.9, 0.2, 0.9] } : {}
              }
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t("stats.eyebrow") || "Ishonch raqamlarda"}
          </span>
        </motion.div>

        {/* Signature: EKG chizig'i — har bir spike bevosita kartochka ustida to'xtaydi */}
        <div className="relative mx-auto mb-2 h-16 w-full max-w-6xl md:h-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
          >
            <motion.path
              d="M0,60 L130,60 L140,20 L150,100 L160,10 L170,60 L430,60 L440,20 L450,100 L460,10 L470,60 L730,60 L740,20 L750,100 L760,10 L770,60 L1030,60 L1040,20 L1050,100 L1060,10 L1070,60 L1200,60"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={isInView ? { pathLength: 1, opacity: 0.45 } : {}}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            {stats.map((s, i) => (
              <motion.circle
                key={s.key}
                cx={s.cx}
                cy={10}
                r={5}
                fill="var(--accent)"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: [0, 1, 0.7], scale: [0, 1.4, 1] } : {}
                }
                transition={{ duration: 0.5, delay: 0.4 + i * 0.18 + 1.2 }}
              />
            ))}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card/40 px-4 py-8 text-center backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:bg-card/70"
              >
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15"
                  whileHover={{
                    scale: [1, 1.18, 1, 1.1, 1],
                    transition: { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 1] },
                  }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>

                <div className="bg-linear-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent md:text-5xl tabular-nums">
                  {isInView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.2}
                      delay={0.5 + index * 0.18}
                      suffix={stat.suffix}
                      onEnd={() =>
                        setFinished((prev) => ({ ...prev, [stat.key]: true }))
                      }
                    />
                  )}
                </div>

                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground md:text-base">
                  {stat.label}
                </p>

                {/* Yakunlanganda mayin nur */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  animate={
                    finished[stat.key]
                      ? {
                          boxShadow: [
                            "0 0 0px var(--primary)",
                            "0 0 24px var(--primary)",
                            "0 0 0px var(--primary)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
