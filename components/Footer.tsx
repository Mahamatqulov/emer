"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold">MedCenter</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Providing premium emergency medical care and comprehensive
              healthcare services 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Doctors
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
                <span>+998 (71) 200-00-77</span>
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
          <p>&copy; 2024 Emergency Medical Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
