// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLanguage } from "@/contexts/LanguageContext";
// import services from "@/data/services.json";
// import { FiArrowUpRight } from "react-icons/fi";

// export function ServicesCarousel() {
//   const { language } = useLanguage();
//   const [activeIndex, setActiveIndex] = useState(0);

//   const getServiceName = (service: any) => {
//     if (language === "uz") return service.name_uz;
//     if (language === "ru") return service.name_ru;
//     return service.name;
//   };

//   const getServiceDescription = (service: any) => {
//     if (language === "uz") return service.description_uz;
//     if (language === "ru") return service.description_ru;
//     return service.description;
//   };

//   const active = services[activeIndex] as any;

//   return (
//     <section className="bg-background py-20 md:py-28">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-14 max-w-2xl"
//         >
//           <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
//             {language === "uz"
//               ? "Xizmatlar"
//               : language === "ru"
//                 ? "Услуги"
//                 : "Services"}
//           </span>
//           <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
//             {language === "uz"
//               ? "Bizning xizmatlar"
//               : language === "ru"
//                 ? "Наши услуги"
//                 : "Our Services"}
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground">
//             {language === "uz"
//               ? "Keng va zamonaviy tibbiy xizmatlar"
//               : language === "ru"
//                 ? "Широкий спектр современных медицинских услуг"
//                 : "Comprehensive and modern medical services"}
//           </p>
//         </motion.div>

//         {/* Desktop: list + preview panel */}
//         <div className="hidden gap-2 lg:grid lg:grid-cols-[380px_1fr]">
//           {/* Left: service list */}
//           <div className="border-r border-border pr-2">
//             {services.map((service: any, index: number) => {
//               const isActive = index === activeIndex;
//               return (
//                 <button
//                   key={service.id}
//                   onMouseEnter={() => setActiveIndex(index)}
//                   onFocus={() => setActiveIndex(index)}
//                   className={`group flex w-full items-center gap-4 border-b border-border py-5 pr-6 text-left transition-colors last:border-b-0 ${
//                     isActive ? "" : "hover:bg-muted/30"
//                   }`}
//                 >
//                   <span
//                     className={`font-mono text-xs transition-colors ${
//                       isActive ? "text-primary" : "text-muted-foreground/50"
//                     }`}
//                   >
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                   <span
//                     className={`flex-1 text-lg font-semibold transition-colors ${
//                       isActive ? "text-primary" : "text-foreground"
//                     }`}
//                   >
//                     {getServiceName(service)}
//                   </span>
//                   <FiArrowUpRight
//                     className={`h-4 w-4 shrink-0 transition-all duration-300 ${
//                       isActive
//                         ? "translate-x-0 text-primary opacity-100"
//                         : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
//                     }`}
//                   />
//                 </button>
//               );
//             })}
//           </div>

//           {/* Right: preview panel */}
//           <div className="relative min-h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 p-10">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={active.id}
//                 initial={{ opacity: 0, y: 16 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -16 }}
//                 transition={{ duration: 0.35, ease: "easeOut" }}
//                 className="flex h-full flex-col"
//               >
//                 <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-4xl text-primary-foreground shadow-lg shadow-primary/20">
//                   {active.icon}
//                 </div>

//                 <h3 className="mt-8 text-3xl font-bold text-foreground">
//                   {getServiceName(active)}
//                 </h3>
//                 <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
//                   {getServiceDescription(active)}
//                 </p>

//                 <button className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
//                   {language === "uz"
//                     ? "Batafsil"
//                     : language === "ru"
//                       ? "Подробнее"
//                       : "Learn more"}
//                   <FiArrowUpRight className="h-4 w-4" />
//                 </button>
//               </motion.div>
//             </AnimatePresence>

//             {/* Decorative index watermark */}
//             <span className="pointer-events-none absolute -bottom-6 -right-4 select-none font-mono text-[160px] font-bold leading-none text-foreground/[0.04]">
//               {String(activeIndex + 1).padStart(2, "0")}
//             </span>
//           </div>
//         </div>

//         {/* Mobile: stacked accordion-style cards */}
//         <div className="flex flex-col gap-4 lg:hidden">
//           {services.map((service: any, index: number) => {
//             const isOpen = index === activeIndex;
//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="overflow-hidden rounded-2xl border border-border"
//               >
//                 <button
//                   onClick={() => setActiveIndex(isOpen ? -1 : index)}
//                   className="flex w-full items-center gap-4 bg-white p-5 text-left dark:bg-slate-900"
//                 >
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary">
//                     {service.icon}
//                   </div>
//                   <span className="flex-1 font-semibold text-foreground">
//                     {getServiceName(service)}
//                   </span>
//                   <FiArrowUpRight
//                     className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${
//                       isOpen ? "rotate-90" : ""
//                     }`}
//                   />
//                 </button>

//                 <AnimatePresence initial={false}>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="overflow-hidden bg-muted/30"
//                     >
//                       <p className="p-5 pt-0 leading-relaxed text-muted-foreground">
//                         {getServiceDescription(service)}
//                       </p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
