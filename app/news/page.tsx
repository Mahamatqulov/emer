'use client'

'use client'

import React, { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import news from '@/data/news.json'
import { FiCalendar, FiTag } from 'react-icons/fi'

function NewsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(news.map((item) => item.category)))
  const filteredNews = selectedCategory
    ? news.filter((item) => item.category === selectedCategory)
    : news

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
            Latest News
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments and announcements from our medical center
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

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredNews.map((article) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center">
                <div className="text-center opacity-50">
                  <div className="text-6xl font-bold text-primary/30">{article.id}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <FiTag className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <FiCalendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Hover Action */}
              <div className="px-6 pb-6">
                <button className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <NewsContent />
      </main>
      <Footer />
    </>
  )
}
