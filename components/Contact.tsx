"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    // Inputlarni darhol tozalash
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Xabarni 3 soniyadan keyin yashirish
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Info - Phone */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-border"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FiPhone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {t("contact.phone_label")}
            </h3>
            <p className="text-muted-foreground">+998 (71) 200-00-77</p>
            <p className="text-muted-foreground">+998 (90) 123-45-67</p>
          </motion.div>

          {/* Contact Info - Email */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-border"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FiMail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Email
            </h3>
            <p className="text-muted-foreground">info@medcenter.uz</p>
            <p className="text-muted-foreground">support@medcenter.uz</p>
          </motion.div>

          {/* Contact Info - Location */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-border"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FiMapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {t("contact.address")}
            </h3>
            <p className="text-muted-foreground">Tashkent, Uzbekistan</p>
            <p className="text-muted-foreground">Open 24/7 Emergency</p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-border"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="+998 (90) 123-45-67"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Your message here..."
              />
            </div>
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg bg-green-100 border border-green-500 text-green-700 px-4 py-3 text-center"
                >
                  Xabaringiz muvaffaqiyatli yuborildi!
                </motion.div>
              )}
            </AnimatePresence>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <FiSend className="w-5 h-5" />
              {t("contact.submit")}
            </button>
          </form>
        </motion.div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Find Us</h3>
          <div className="overflow-hidden rounded-xl border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4208.718877604444!2d71.79101660530974!3d40.38371592283783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8307363785f9%3A0xc0ca2d3dc7c07e9a!2z0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0KjQvtGI0LjQu9C40L3RhyDQotC40LHQsdC40Lkg0IHRgNC00LDQvCDQmNC70LzQuNC5INCc0LDRgNC60LDQt9C4INCk0LDRgNKT0L7QvdCwINCk0LjQu9C40LDQu9C4!5e1!3m2!1sru!2s!4v1783537345840!5m2!1sru!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            Emergency Medical Center, Tashkent, Uzbekistan | Open 24/7 for
            emergency services
          </p>
        </motion.div>
      </div>
    </section>
  );
}
