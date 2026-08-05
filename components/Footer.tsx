"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/"
                className="flex items-center gap-2.5 flex-shrink-0"
              >
                <div className="w-36 h-16 rounded-xl flex items-center justify-center text-white font-bold">
                  <img
                    src="/image/shoshilinch.png"
                    alt="Logotip"
                    className="w-36 h-14"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Yuqori sifatli shoshilinch tibbiy yordam va keng qamrovli tibbiy
              xizmatlarni tunu-kun (24/7) ko‘rsatish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Xizmatlar
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shifokorlarimiz
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("contact.title")}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <FiPhone className="w-5 h-5 flex-shrink-0" />
                <span>+998 73 244 19 63</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMail className="w-5 h-5 flex-shrink-0" />
                <span>info@medcenter.uz</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="w-5 h-5 flex-shrink-0" />
                <span>Farg'ona Viloyati, Узбекистан</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiClock className="w-5 h-5 flex-shrink-0" />
                <span>24/7 Open</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2026 yilgi Shoshilinch tibbiy yordam markazi. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
