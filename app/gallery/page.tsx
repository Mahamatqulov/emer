'use client'

'use client'

import React, { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import gallery from '@/data/gallery.json'
import { FiX, FiPlay } from 'react-icons/fi'
import Image from 'next/image'

function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<(typeof gallery)[0] | null>(null)

  const categories = Array.from(new Set(gallery.map((item) => item.category)))
  const filteredGallery = selectedCategory
    ? gallery.filter((item) => item.category === selectedCategory)
    : gallery

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our state-of-the-art facilities and our dedicated team
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === null
                ? 'bg-primary text-white shadow-lg'
                : 'bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredGallery.map((item: any) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              onClick={() => setSelectedImage(item)}
              className="group relative h-72 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              {/* Image or Video Thumbnail */}
              {item.type === 'image' ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center group-hover:bg-primary/50 transition-colors">
                    <FiPlay className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
                <p className="text-sm text-center opacity-90">{item.description}</p>
              </div>

              {/* Category & Type Badge */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {item.category}
                </div>
                {item.type === 'video' && (
                  <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    VIDEO
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Image or Video Display */}
            {selectedImage.type === 'image' ? (
              <div className="relative h-96 w-full overflow-hidden bg-linear-to-br from-primary/20 to-accent/20">
                <Image
                  src={selectedImage.image}
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

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-3xl font-bold text-foreground">
                  {selectedImage.title}
                </h2>
                {selectedImage.type === 'video' && (
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
        </motion.div>
      )}
    </div>
  )
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
  )
}
