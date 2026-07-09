"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [isDeptOpen, setIsDeptOpen] = useState(false);

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
    <header className="sticky top-0 z-50 mx-2 rounded-4xl border border-white/20 bg-white shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold">
            M
          </div>

          <span className="hidden text-lg font-bold sm:block">MedCenter</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}

          {/* <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
              {t("nav.departments")}
              <FiChevronDown className="transition-transform group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-0 mt-3 w-56 rounded-2xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:bg-slate-900">
              {departments.map((dept) => (
                <Link
                  key={dept.href}
                  href={dept.href}
                  className="block rounded-xl px-4 py-2 text-sm hover:bg-primary/10 hover:text-primary"
                >
                  {dept.label}
                </Link>
              ))}
            </div>
          </div> */}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="group relative">
            <button className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-primary/10">
              <HiOutlineGlobeAlt className="h-5 w-5" />
              <span className="uppercase">{language}</span>
            </button>

            <div className="invisible absolute right-0 mt-2 w-36 rounded-xl border border-border bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 dark:bg-slate-900">
              {(["uz", "ru", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`block w-full rounded-lg px-3 py-2 text-left ${
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
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 hover:bg-muted md:hidden"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="border-t border-border bg-background md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 hover:bg-primary/10"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => setIsDeptOpen(!isDeptOpen)}
              className="flex w-full items-center justify-between px-5 py-3"
            >
              {t("nav.departments")}
              <FiChevronDown className={isDeptOpen ? "rotate-180" : ""} />
            </button>

            <AnimatePresence>
              {isDeptOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden bg-muted/40"
                >
                  {departments.map((dept) => (
                    <Link
                      key={dept.href}
                      href={dept.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-3 hover:text-primary"
                    >
                      {dept.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
