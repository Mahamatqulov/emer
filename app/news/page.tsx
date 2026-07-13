// 'use client'

// import React, { useState } from 'react'
// import { Header } from '@/components/Header'
// import { Footer } from '@/components/Footer'
// import { motion } from 'framer-motion'
// import news from '@/data/news.json'
// import { FiCalendar, FiTag } from 'react-icons/fi'

// function NewsContent() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

//   const categories = Array.from(new Set(news.map((item) => item.category)))
//   const filteredNews = selectedCategory
//     ? news.filter((item) => item.category === selectedCategory)
//     : news

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
//             Latest News
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Stay updated with the latest developments and announcements from our medical center
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="flex flex-wrap gap-3 justify-center mb-12"
//         >
//           <button
//             onClick={() => setSelectedCategory(null)}
//             className={`px-6 py-2 rounded-full font-semibold transition-all ${
//               selectedCategory === null
//                 ? 'bg-primary text-white shadow-lg'
//                 : 'bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
//             }`}
//           >
//             All
//           </button>
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setSelectedCategory(cat)}
//               className={`px-6 py-2 rounded-full font-semibold transition-all ${
//                 selectedCategory === cat
//                   ? 'bg-primary text-white shadow-lg'
//                   : 'bg-slate-100 dark:bg-slate-800 text-foreground hover:bg-slate-200 dark:hover:bg-slate-700'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </motion.div>

//         {/* News Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {filteredNews.map((article) => (
//             <motion.div
//               key={article.id}
//               variants={cardVariants}
//               className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
//             >
//               {/* Image Placeholder */}
//               <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden flex items-center justify-center">
//                 <div className="text-center opacity-50">
//                   <div className="text-6xl font-bold text-primary/30">{article.id}</div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 {/* Category Badge */}
//                 <div className="flex items-center gap-2 mb-3">
//                   <FiTag className="w-4 h-4 text-primary" />
//                   <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
//                     {article.category}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
//                   {article.title}
//                 </h3>

//                 {/* Excerpt */}
//                 <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//                   {article.excerpt}
//                 </p>

//                 {/* Date */}
//                 <div className="flex items-center gap-2 text-xs text-muted-foreground">
//                   <FiCalendar className="w-4 h-4" />
//                   <span>{new Date(article.date).toLocaleDateString()}</span>
//                 </div>
//               </div>

//               {/* Hover Action */}
//               <div className="px-6 pb-6">
//                 <button className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-colors">
//                   Read More
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default function NewsPage() {
//   return (
//     <>
//       <Header />
//       <main>
//         <NewsContent />
//       </main>
//       <Footer />
//     </>
//   )
// }

'use client'

import React, { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { Fraunces, IBM_Plex_Sans, Space_Mono } from 'next/font/google'
import news from '@/data/news.json'
import { FiCalendar, FiArrowUpRight, FiImage } from 'react-icons/fi'

// Each news item may optionally carry an `image` field (a path under /public,
// e.g. "/news/annual-report.jpg"). Where it's missing, we fall back to the
// numbered teal panel so the layout never breaks on incomplete data.

// ---- Type system -----------------------------------------------------
// Display face: Fraunces — a warm, editorial serif used for headlines only.
// Body face: IBM Plex Sans — clinical clarity for reading text.
// Utility face: Space Mono — dates, tags, dispatch numbers ("chart" feel).
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
})

// ---- Signature element -------------------------------------------------
// A single animated vital-sign line that draws itself once on load.
// Stands in for the "pulse" of the news feed itself, not a literal medical icon.
function PulseLine() {
  return (
    <svg
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      className="w-full h-16 md:h-20"
      aria-hidden="true"
    >
      <motion.path
        d="M0,45 L220,45 L255,45 L280,10 L310,80 L340,20 L365,45 L520,45 L555,45 L580,25 L605,65 L630,45 L940,45 L975,45 L1000,15 L1030,75 L1060,45 L1200,45"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: 'easeInOut', delay: 0.4 }}
      />
    </svg>
  )
}

function NewsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(news.map((item) => item.category)))
  const filteredNews = selectedCategory
    ? news.filter((item) => item.category === selectedCategory)
    : news

  const featured = filteredNews[0]
  const rest = filteredNews.slice(1)

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  }
  const rowVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div
      className={`${fraunces.variable} ${plexSans.variable} ${spaceMono.variable} min-h-screen`}
      style={{ background: 'var(--paper)', fontFamily: 'var(--font-body)' }}
    >
      {/* ---------------- Hero with video background ---------------- */}
      <section className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/h5.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay: keeps headline legible without flattening the footage */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,32,39,0.75) 0%, rgba(11,32,39,0.55) 45%, rgba(11,32,39,0.92) 100%)',
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 sm:px-10 lg:px-16 pb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-block w-fit text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)' }}
          >
            Center Dispatch — {new Date().getFullYear()}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl text-5xl md:text-7xl leading-[1.02]"
            style={{ fontFamily: 'var(--font-display)', color: '#F6F4EF' }}
          >
            What&rsquo;s moving at{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>our center</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base md:text-lg"
            style={{ color: 'rgba(246,244,239,0.8)' }}
          >
            Clinical milestones, new services and announcements from our medical
            center, recorded as they happen.
          </motion.p>

          <div className="mt-8 max-w-2xl">
            <PulseLine />
          </div>
        </div>
      </section>

      {/* ---------------- Category filter ---------------- */}
      <div
        className="sticky top-0 z-20 backdrop-blur-md"
        style={{ background: 'rgba(246,244,239,0.9)', borderBottom: '1px solid var(--line)' }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 py-5 text-sm">
            <button
              onClick={() => setSelectedCategory(null)}
              className="relative pb-1 transition-colors"
              style={{
                fontFamily: 'var(--font-mono)',
                color: selectedCategory === null ? 'var(--ink)' : 'var(--muted)',
                borderBottom:
                  selectedCategory === null ? '2px solid var(--teal-mid)' : '2px solid transparent',
              }}
            >
              ALL
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="relative pb-1 uppercase tracking-wide transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: selectedCategory === cat ? 'var(--ink)' : 'var(--muted)',
                  borderBottom:
                    selectedCategory === cat ? '2px solid var(--teal-mid)' : '2px solid transparent',
                }}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ---------------- News feed ---------------- */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-20">
        {filteredNews.length === 0 && (
          <p style={{ color: 'var(--muted)' }}>No dispatches in this category yet.</p>
        )}

        {featured && (
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="group grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-14 items-center pb-14 mb-14"
            style={{ borderBottom: '1px solid var(--line)' }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded-sm"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: '#F6F4EF',
                    background: 'var(--teal-deep)',
                  }}
                >
                  {featured.category}
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}
                >
                  <FiCalendar className="w-3.5 h-3.5" />
                  {new Date(featured.date).toLocaleDateString()}
                </span>
              </div>
              <h2
                className="text-3xl md:text-[2.6rem] leading-[1.08] mb-4 group-hover:opacity-80 transition-opacity"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
              >
                {featured.title}
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                {featured.excerpt}
              </p>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: 'var(--teal-deep)' }}
              >
                Read dispatch
                <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <div className="h-64 md:h-80 rounded-sm overflow-hidden relative">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              ) : (
                <div
                  className="h-full w-full flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, var(--teal-deep) 0%, var(--teal-mid) 100%)',
                  }}
                >
                  <span
                    className="text-8xl"
                    style={{ fontFamily: 'var(--font-display)', color: 'rgba(246,244,239,0.18)' }}
                  >
                    {String(featured.id).padStart(2, '0')}
                  </span>
                </div>
              )}
            </div>
          </motion.a>
        )}

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {rest.map((article, i) => (
            <motion.a
              href="#"
              key={article.id}
              variants={rowVariants}
              className="group grid md:grid-cols-[104px_80px_1fr_auto] gap-4 md:gap-6 items-center py-7"
              style={{ borderBottom: '1px solid var(--line)' }}
            >
              <div className="h-16 w-24 md:h-[72px] md:w-26 rounded-sm overflow-hidden shrink-0">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="h-full w-full flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(135deg, var(--teal-deep) 0%, var(--teal-mid) 100%)',
                    }}
                  >
                    <FiImage className="w-4 h-4" style={{ color: 'rgba(246,244,239,0.4)' }} />
                  </div>
                )}
              </div>

              <span
                className="text-xs"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}
              >
                {String(i + 2).padStart(2, '0')}
              </span>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-[11px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--gold)' }}
                  >
                    {article.category}
                  </span>
                </div>
                <h3
                  className="text-xl md:text-2xl leading-snug group-hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                >
                  {article.title}
                </h3>
                <p className="mt-2 text-sm max-w-xl" style={{ color: 'var(--muted)' }}>
                  {article.excerpt}
                </p>
              </div>

              <div className="flex md:flex-col items-center md:items-end gap-2 md:gap-3 justify-between md:justify-start">
                <span
                  className="flex items-center gap-1.5 text-xs whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}
                >
                  <FiCalendar className="w-3.5 h-3.5" />
                  {new Date(article.date).toLocaleDateString()}
                </span>
                <FiArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: 'var(--teal-deep)' }}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Design tokens — scoped to this page */}
      <style jsx global>{`
        :root {
          --ink: #0b2027;
          --paper: #f2f4f1;
          --teal-deep: #123b3d;
          --teal-mid: #2f6f6e;
          --gold: #c99a44;
          --line: #dbe0da;
          --muted: #5f6b67;
        }
      `}</style>
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