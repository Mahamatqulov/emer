// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'
// import { useLanguage } from '@/contexts/LanguageContext'
// import departments from '@/data/departments.json'
// import {
//   FiTruck,
//   FiHeart,
//   FiZap,
//   FiUser,
//   FiActivity,
//   FiLayers,
//   FiEye,
//   FiHome,
// } from 'react-icons/fi'

// const iconMap: Record<string, React.ReactNode> = {
//   FiTruck: <FiTruck className="w-8 h-8" />,
//   FiHeartHandshake: <FiHeart className="w-8 h-8" />,
//   FiZap: <FiZap className="w-8 h-8" />,
//   FiHeart: <FiHeart className="w-8 h-8" />,
//   FiBrain: <FiActivity className="w-8 h-8" />,
//   FiUser: <FiUser className="w-8 h-8" />,
//   FiLayers: <FiLayers className="w-8 h-8" />,
//   FiEye: <FiEye className="w-8 h-8" />,
// }

// export function Departments() {
//   const { language } = useLanguage()

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
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

//   const getDepartmentName = (dept: any) => {
//     if (language === 'uz') return dept.uz
//     if (language === 'ru') return dept.ru
//     return dept.en
//   }

//   return (
//     <section id="departments" className="py-16 md:py-24 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             {language === 'uz' ? 'Ixtisoslashgan Bo\'limlar' : language === 'ru' ? 'Специализированные отделения' : 'Specialized Departments'}
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             {language === 'uz' ? 'Bizning markazning yuqori maliyatli tibbiy bo\'limlari' : language === 'ru' ? 'Высокоспециализированные отделения нашего центра' : 'Highly specialized departments of our center'}
//           </p>
//         </motion.div>

//         {/* Departments Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {departments.map((dept) => (
//             <motion.div
//               key={dept.id}
//               variants={itemVariants}
//               className="group bg-white dark:bg-slate-800 rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
//             >
//               <div className="flex flex-col items-center text-center space-y-4">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                   <div className="text-primary group-hover:scale-110 transition-transform">
//                     {iconMap[dept.icon] || <FiHome className="w-8 h-8" />}
//                   </div>
//                 </div>
//                 <h3 className="font-semibold text-foreground text-lg">
//                   {getDepartmentName(dept)}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import departments from "@/data/departments.json";
import {
  FiTruck,
  FiHeart,
  FiZap,
  FiUser,
  FiActivity,
  FiLayers,
  FiEye,
  FiHome,
  FiArrowRight,
} from "react-icons/fi";

const iconMap: Record<string, React.ReactNode> = {
  FiTruck: <FiTruck className="h-7 w-7" />,
  FiHeartHandshake: <FiHeart className="h-7 w-7" />,
  FiZap: <FiZap className="h-7 w-7" />,
  FiHeart: <FiHeart className="h-7 w-7" />,
  FiBrain: <FiActivity className="h-7 w-7" />,
  FiUser: <FiUser className="h-7 w-7" />,
  FiLayers: <FiLayers className="h-7 w-7" />,
  FiEye: <FiEye className="h-7 w-7" />,
};

export function Departments() {
  const { language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getDepartmentName = (dept: any) => {
    if (language === "uz") return dept.uz;
    if (language === "ru") return dept.ru;
    return dept.en;
  };

  return (
    <section
      id="departments"
      className="relative overflow-hidden bg-muted/30 py-20 md:py-28"
    >
      {/* Faint watermark numbering, ties to the directory-board concept */}
      <div className="pointer-events-none absolute -right-10 -top-10 select-none text-[220px] font-bold leading-none text-foreground/[0.03] md:text-[320px]">
        +
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {language === "uz"
              ? "Yo'nalishlar"
              : language === "ru"
                ? "Направления"
                : "Directory"}
          </span>
          <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
            {language === "uz"
              ? "Ixtisoslashgan bo'limlar"
              : language === "ru"
                ? "Специализированные отделения"
                : "Specialized Departments"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {language === "uz"
              ? "Bizning markazning yuqori malakali tibbiy bo'limlari"
              : language === "ru"
                ? "Высокоспециализированные отделения нашего центра"
                : "Highly specialized departments of our center"}
          </p>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {departments.map((dept: any, index: number) => (
            <motion.div
              key={dept.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-colors duration-300 hover:border-primary/40 dark:bg-slate-800"
            >
              {/* Left accent bar that grows on hover — the "plaque" cue */}
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-linear-to-b from-primary to-accent transition-transform duration-300 group-hover:scale-y-100" />

              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <FiArrowRight className="h-4 w-4 -translate-x-1 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>

              <div className="mt-4 flex flex-col items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  {iconMap[dept.icon] || <FiHome className="h-7 w-7" />}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {getDepartmentName(dept)}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
