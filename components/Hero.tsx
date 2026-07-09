"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiPhone } from "react-icons/fi";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();
  const backgrounds = ["/image/h1.jpg", "/image/h2.jpg", "/image/h3.jpg"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images - crossfade every 3s */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute  inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgrounds[currentImage]})`,
          }}
        />
      </AnimatePresence>

      {/* Dark overlay - matn o'qilishi uchun */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight text-white"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/90 max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl cursor-pointer">
                {t("hero.cta")}
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl cursor-pointer">
                <FiPhone className="w-5 h-5" />
                103
              </button>
            </motion.div>
          </div>

          {/* Video Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl overflow-hidden border border-border shadow-2xl"
          >
            <div className="relative w-full aspect-video bg-black/5">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Hospital Center Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
