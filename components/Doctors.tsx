"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import doctors from "@/data/doctors.json";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export function Doctors() {
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
    <section id="doctors" className="py-20 bg-slate-50 dark:bg-slate-950">
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
            {t("doctors.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("doctors.subtitle")}
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              variants={cardVariants}
              className="group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-linear-to-r from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/50 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-3">
                  {doctor.specialty}
                </p>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Experience:</span>{" "}
                    {doctor.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Qualification:</span>{" "}
                    {doctor.qualification}
                  </p>
                </div>

                {/* Contact */}
                <div className="flex items-center gap-2 text-sm text-accent mb-4 pb-4 border-b border-border">
                  <FiPhone className="w-4 h-4" />
                  <span>{doctor.phone}</span>
                </div>

                {/* Social Links */}
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors">
                    <FaFacebookF className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors">
                    <FaTwitter className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary transition-colors">
                    <FaLinkedinIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
