// 'use client'

// import { motion } from 'framer-motion'
// import { useLanguage } from '@/contexts/LanguageContext'
// import CountUp from 'react-countup'

// export function Statistics() {
//   const { t } = useLanguage()

//   const stats = [
//     {
//       key: 'patients',
//       value: 50000,
//       label: t('stats.patients_label'),
//       suffix: '+',
//     },
//     {
//       key: 'doctors',
//       value: 150,
//       label: t('stats.doctors_label'),
//       suffix: '+',
//     },
//     {
//       key: 'beds',
//       value: 500,
//       label: t('stats.beds_label'),
//       suffix: '+',
//     },
//     {
//       key: 'years',
//       value: 25,
//       label: t('stats.years_label'),
//       suffix: '+',
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   return (
//     <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
//       <div className="container mx-auto px-4">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 border border-border shadow-md hover:shadow-lg transition-shadow"
//             >
//               <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
//                 <CountUp
//                   start={0}
//                   end={stat.value}
//                   duration={2.5}
//                   suffix={stat.suffix}
//                 />
//               </div>
//               <p className="text-muted-foreground text-lg font-medium">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import CountUp from "react-countup";
import { FiUsers, FiCalendar } from "react-icons/fi";
import { FaUserDoctor, FaBed } from "react-icons/fa6";

export function Statistics() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  const stats = [
    {
      key: "patients",
      value: 50000,
      label: t("stats.patients_label"),
      suffix: "+",
      icon: FiUsers,
    },
    {
      key: "doctors",
      value: 150,
      label: t("stats.doctors_label"),
      suffix: "+",
      icon: FaUserDoctor,
    },
    {
      key: "beds",
      value: 500,
      label: t("stats.beds_label"),
      suffix: "+",
      icon: FaBed,
    },
    {
      key: "years",
      value: 25,
      label: t("stats.years_label"),
      suffix: "+",
      icon: FiCalendar,
    },
  ];

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.1, 0.25, 1], // <-- string emas
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      {/* Signature element: EKG / heartbeat line drawn across the section */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-[0.35] dark:opacity-[0.25]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="h-24 w-full md:h-32"
        >
          <motion.path
            d="M0,60 L220,60 L250,60 L270,20 L300,100 L330,10 L360,60 L390,60 L920,60 L950,60 L970,20 L1000,100 L1030,10 L1060,60 L1090,60 L1200,60"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t("stats.eyebrow") || "Ishonch raqamlarda"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
                className="relative flex flex-col items-center gap-3 px-4 text-center lg:border-l lg:border-border lg:first:border-l-0"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="bg-linear-to-r from-primary to-accent bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {isInView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>

                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
