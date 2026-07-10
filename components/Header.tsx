// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
// import { HiOutlineGlobeAlt } from "react-icons/hi";
// import { useLanguage } from "@/contexts/LanguageContext";

// export function Header() {
//   const { language, setLanguage, t } = useLanguage();

//   const [isOpen, setIsOpen] = useState(false);
//   const [isDeptOpen, setIsDeptOpen] = useState(false);

//   const navItems = [
//     { label: t("nav.home"), href: "/" },
//     { label: t("nav.services"), href: "/#services" },
//     { label: t("nav.doctors"), href: "/#doctors" },
//     { label: t("nav.gallery"), href: "/gallery" },
//     { label: t("nav.news"), href: "/news" },
//     { label: t("nav.contact"), href: "/#contact" },
//   ];

//   const departments = [
//     { label: t("nav.dept_surgery"), href: "/departments/surgery" },
//     { label: t("nav.dept_therapy"), href: "/departments/therapy" },
//     { label: t("nav.dept_reanimation"), href: "/departments/reanimation" },
//     { label: t("nav.dept_special"), href: "/departments/special" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 mx-2 rounded-4xl border border-white/20 bg-white shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900">
//       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//         <Link href="/" className="flex items-center gap-3">
//           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold">
//             M
//           </div>

//           <span className="hidden text-lg font-bold sm:block">MedCenter</span>
//         </Link>

//         {/* Desktop */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="text-sm font-medium transition-colors hover:text-primary"
//             >
//               {item.label}
//             </Link>
//           ))}

//           {/* <div className="group relative">
//             <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
//               {t("nav.departments")}
//               <FiChevronDown className="transition-transform group-hover:rotate-180" />
//             </button>

//             <div className="invisible absolute left-0 mt-3 w-56 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:bg-slate-900">
//               {departments.map((dept) => (
//                 <Link
//                   key={dept.href}
//                   href={dept.href}
//                   className="block rounded-xl px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary"
//                 >
//                   {dept.label}
//                 </Link>
//               ))}
//             </div>
//           </div> */}
//         </nav>

//         {/* Right */}
//         <div className="flex items-center gap-3">
//           <div className="group relative">
//             <button className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-primary/10">
//               <HiOutlineGlobeAlt className="h-5 w-5" />
//               <span className="uppercase">{language}</span>
//             </button>

//             <div className="invisible absolute right-0 mt-2 w-36 rounded-xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:bg-slate-900">
//               {(["uz", "ru", "en"] as const).map((lang) => (
//                 <button
//                   key={lang}
//                   onClick={() => setLanguage(lang)}
//                   className={`block w-full rounded-lg px-3 py-2 text-left ${
//                     language === lang
//                       ? "bg-primary/10 font-semibold text-primary"
//                       : "hover:bg-muted"
//                   }`}
//                 >
//                   {lang === "uz"
//                     ? "O'zbekcha"
//                     : lang === "ru"
//                       ? "Русский"
//                       : "English"}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="rounded-xl p-2 hover:bg-muted md:hidden"
//           >
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.nav
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -15 }}
//             className="border-t border-border bg-background md:hidden"
//           >
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-5 py-3 hover:bg-primary/10"
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <button
//               onClick={() => setIsDeptOpen(!isDeptOpen)}
//               className="flex w-full items-center justify-between px-5 py-3"
//             >
//               {t("nav.departments")}
//               <FiChevronDown className={isDeptOpen ? "rotate-180" : ""} />
//             </button>

//             <AnimatePresence>
//               {isDeptOpen && (
//                 <motion.div
//                   initial={{ height: 0 }}
//                   animate={{ height: "auto" }}
//                   exit={{ height: 0 }}
//                   className="overflow-hidden bg-muted/40"
//                 >
//                   {departments.map((dept) => (
//                     <Link
//                       key={dept.href}
//                       href={dept.href}
//                       onClick={() => setIsOpen(false)}
//                       className="block px-8 py-3 hover:text-primary"
//                     >
//                       {dept.label}
//                     </Link>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiPhone,
  FiCalendar,
} from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { HeartPulse } from "lucide-react"; // yoki react-icons/fi dagi FiHeart bilan almashtiring
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/#services" },
    { label: t("nav.doctors"), href: "/#doctors" },
    { label: t("nav.gallery"), href: "/gallery" },
    { label: t("nav.news"), href: "/news" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  const departments = [
    { label: t("nav.dept_surgery"), href: "/departments/surgery" },
    { label: t("nav.dept_therapy"), href: "/departments/therapy" },
    { label: t("nav.dept_reanimation"), href: "/departments/reanimation" },
    { label: t("nav.dept_special"), href: "/departments/special" },
  ];

  return (
    <header
      className={`fixed top-2 inset-x-0 z-50 transition-all duration-500  ${
        scrolled ? "pt-3 px-2 sm:px-4" : "pt-0 px-0"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl transition-all duration-50 border  ${
          scrolled
            ? "rounded-[28px] border-white/10 bg-white/50 dark:bg-slate-900/80 shadow-lg backdrop-blur-xl dark:border-white/10"
            : "rounded-[28px] border-transparent bg-white/50 dark:bg-slate-900 shadow-sm"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "px-5 h-14" : "px-4 sm:px-6 lg:px-8 h-16"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold"
              style={{
                background: "linear-gradient(135deg,#0A84FF 0%,#0050CC 100%)",
                boxShadow: "0 4px 14px rgba(10,132,255,.45)",
              }}
            >
              <HeartPulse size={17} strokeWidth={2.5} />
            </div>
            <span className="hidden sm:block font-bold text-base tracking-tight">
              Med<span className="text-primary">Center</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13.5px] font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Bo'limlar dropdown — kerak bo'lsa yoqing */}
            {/* <div className="group relative">
              <button className="flex items-center gap-1 text-[13.5px] font-medium hover:text-primary">
                {t("nav.departments")}
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 mt-3 w-56 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:bg-slate-900">
                {departments.map((dept) => (
                  <Link key={dept.href} href={dept.href} className="block rounded-xl px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary">
                    {dept.label}
                  </Link>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Til tanlash */}
            <div className="group relative hidden md:block">
              <button className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-medium hover:bg-primary/10">
                <HiOutlineGlobeAlt className="h-4 w-4" />
                <span className="uppercase">{language}</span>
              </button>
              <div className="invisible absolute right-0 mt-2 w-36 rounded-xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:bg-slate-900">
                {(["uz", "ru", "en"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                      language === lang
                        ? "bg-primary/10 font-semibold text-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    {lang === "uz"
                      ? "O'zbekcha"
                      : lang === "ru"
                        ? "Русский"
                        : "English"}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-white transition-all active:scale-95"
              style={{
                background: "linear-gradient(135deg,#0A84FF 0%,#0060CC 100%)",
                boxShadow: "0 4px 16px rgba(10,132,255,.38)",
              }}
            >
              <FiCalendar size={12} strokeWidth={2.5} /> {t("hero.cta")}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl p-2 hover:bg-muted lg:hidden"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-black/5 dark:border-white/10 px-5 pb-5 pt-3 overflow-hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 px-2 text-[15px] font-medium hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}

              <button
                onClick={() => setIsDeptOpen(!isDeptOpen)}
                className="flex w-full items-center justify-between py-2.5 px-2 text-[15px] font-medium"
              >
                {t("nav.departments")}
                <FiChevronDown
                  className={
                    isDeptOpen
                      ? "rotate-180 transition-transform"
                      : "transition-transform"
                  }
                />
              </button>
              <AnimatePresence>
                {isDeptOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden bg-muted/40 rounded-xl"
                  >
                    {departments.map((dept) => (
                      <Link
                        key={dept.href}
                        href={dept.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-2.5 text-sm hover:text-primary"
                      >
                        {dept.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-2 mt-4">
                <a href="tel:103">
                  <FiPhone size={13} /> 103
                </a>
                <button
                  className="flex-1 py-3 rounded-2xl font-semibold text-[13px] text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,#0A84FF 0%,#0060CC 100%)",
                  }}
                >
                  {t("hero.cta")}
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
