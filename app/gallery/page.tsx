"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  easeOut,
  Variants,
} from "framer-motion";
import gallery from "@/data/gallery.json";
import { FiX, FiPlay, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

// Deterministic per-card variation so the "pinned photo" wall feels hand-placed
// rather than perfectly uniform, while staying stable across re-renders.
const ROTATIONS = [-3, 2, -2.5, 3, -1.5, 2.5, -3, 1.5, -2, 2];
const HEIGHTS = [260, 320, 300, 360, 280, 340, 310, 270];

function cardRotation(i: number) {
  return ROTATIONS[i % ROTATIONS.length];
}
function cardHeight(i: number) {
  return HEIGHTS[i % HEIGHTS.length];
}

function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<
    (typeof gallery)[0] | null
  >(null);
  const [direction, setDirection] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const categories = Array.from(new Set(gallery.map((item) => item.category)));
  const filteredGallery = selectedCategory
    ? gallery.filter((item) => item.category === selectedCategory)
    : gallery;

  const currentIndex = selectedImage
    ? filteredGallery.findIndex((i) => i.id === selectedImage.id)
    : -1;

  const showAt = useCallback(
    (newIndex: number, dir: number) => {
      if (filteredGallery.length === 0) return;
      const wrapped =
        (newIndex + filteredGallery.length) % filteredGallery.length;
      setDirection(dir);
      setSelectedImage(filteredGallery[wrapped]);
    },
    [filteredGallery],
  );

  useEffect(() => {
    if (!selectedImage) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") showAt(currentIndex + 1, 1);
      if (e.key === "ArrowLeft") showAt(currentIndex - 1, -1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage, currentIndex, showAt]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 24,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: easeOut,
      },
    },
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.97,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-hidden">
      {/* Hero with background video */}
      <div className="relative min-h-[70vh] md:min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
        {/* Background video — replace src/poster with your own file in /public */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/image/h5.mp4"
          poster="/image/h5.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />

        {/* Overlay for text legibility, fading into the page background at the bottom */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-t from-white dark:from-slate-900 via-transparent to-black/10" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-white/90 uppercase mb-3">
            A look inside
          </span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4 drop-shadow-sm">
            Gallery
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 56 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="h-1 bg-primary rounded-full mx-auto mb-6"
          />
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and our dedicated team
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex flex-wrap gap-2 justify-center mb-3"
        >
          {[null, ...categories].map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat ?? "all"}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  active ? "text-white" : "text-foreground hover:text-primary"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat ?? "All"}</span>
              </button>
            );
          })}
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mb-8">
          Showing {filteredGallery.length} of {gallery.length}{" "}
          {filteredGallery.length === 1 ? "item" : "items"}
        </p>
      </div>

      {/* Gallery Wall (masonry, pinned-photo style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          key={selectedCategory ?? "all"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"
        >
          {filteredGallery.map((item: any, i: number) => {
            const rotation = prefersReducedMotion ? 0 : cardRotation(i);
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                style={{ rotate: rotation }}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { rotate: 0, y: -8, scale: 1.03, zIndex: 10 }
                }
                whileFocus={
                  prefersReducedMotion ? {} : { rotate: 0, y: -8, scale: 1.03 }
                }
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                onClick={() => {
                  setDirection(0);
                  setSelectedImage(item);
                }}
                className="break-inside-avoid mb-7 cursor-pointer group relative"
              >
                <div className="relative bg-white dark:bg-slate-800 p-3 pb-5 rounded-sm shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border border-border/50">
                  {/* "tape" accent */}
                  <span
                    aria-hidden
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-5 bg-accent/50 rounded-sm shadow-sm rotate-[-4deg]"
                  />

                  <div
                    className="relative overflow-hidden rounded-sm bg-linear-to-br from-primary/20 to-accent/20"
                    style={{ height: cardHeight(i) }}
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center group-hover:bg-primary/50 transition-colors"
                        >
                          <FiPlay className="w-8 h-8 text-white ml-1" />
                        </motion.div>
                      </div>
                    )}

                    {/* Hover description overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-sm text-white/90 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-2 right-2 flex gap-1.5">
                      <div className="bg-primary text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide">
                        {item.category}
                      </div>
                      {item.type === "video" && (
                        <div className="bg-accent text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide">
                          VIDEO
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Permanent polaroid caption */}
                  <h3 className="mt-3 text-sm font-semibold text-foreground truncate">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close"
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* Prev / Next */}
              {filteredGallery.length > 1 && (
                <>
                  <button
                    onClick={() => showAt(currentIndex - 1, -1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Previous"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => showAt(currentIndex + 1, 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Next"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <AnimatePresence custom={direction} mode="wait" initial={false}>
                <motion.div
                  key={selectedImage.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {selectedImage.type === "image" ? (
                    <div className="relative h-96 w-full overflow-hidden bg-linear-to-br from-primary/20 to-accent/20">
                      <Image
                        src={selectedImage.image!}
                        alt={selectedImage.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src={selectedImage.videoUrl}
                        title={selectedImage.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <h2 className="text-3xl font-bold text-foreground">
                        {selectedImage.title}
                      </h2>
                      {selectedImage.type === "video" && (
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                          VIDEO
                        </span>
                      )}
                    </div>
                    <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      {selectedImage.category}
                    </span>
                    <p className="text-lg text-muted-foreground">
                      {selectedImage.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <GalleryContent />
      </main>
      <Footer />
    </>
  );
}
