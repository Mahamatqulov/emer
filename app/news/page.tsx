// "use client";

// import React, { useState } from "react";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { motion } from "framer-motion";
// import { Fraunces, IBM_Plex_Sans, Space_Mono } from "next/font/google";
// import news from "@/data/news.json";
// import { FiCalendar, FiArrowUpRight, FiImage } from "react-icons/fi";

// interface NewsItem {
//   id: number;
//   title: string;
//   excerpt: string;
//   content: string;
//   date: string;
//   category: string;
//   featured: boolean;
//   image?: string;
// }

// const newsList = news as NewsItem[];

// const fraunces = Fraunces({
//   subsets: ["latin"],
//   weight: ["500", "600"],
//   style: ["normal", "italic"],
//   variable: "--font-display",
// });
// const plexSans = IBM_Plex_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
//   variable: "--font-body",
// });
// const spaceMono = Space_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-mono",
// });

// function PulseLine() {
//   return (
//     <svg
//       viewBox="0 0 1200 90"
//       preserveAspectRatio="none"
//       className="w-full h-16 md:h-20"
//       aria-hidden="true"
//     >
//       <motion.path
//         d="M0,45 L220,45 L255,45 L280,10 L310,80 L340,20 L365,45 L520,45 L555,45 L580,25 L605,65 L630,45 L940,45 L975,45 L1000,15 L1030,75 L1060,45 L1200,45"
//         fill="none"
//         stroke="var(--highlight)"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         initial={{ pathLength: 0, opacity: 0 }}
//         animate={{ pathLength: 1, opacity: 1 }}
//         transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
//       />
//     </svg>
//   );
// }

// // Rasm bo'lmaganda ko'rsatiladigan fallback panel — raqamlangan gradient plitka
// function FallbackTile({
//   id,
//   className = "",
// }: {
//   id: number;
//   className?: string;
// }) {
//   return (
//     <div
//       className={`relative h-full w-full flex items-center justify-center overflow-hidden ${className}`}
//     >
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source src="/image/h5.mp4" type="video/mp4" />
//       </video>

//       {/* Qoraytiruvchi overlay (ixtiyoriy) */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <span
//         className="relative z-10 text-6xl"
//         style={{
//           fontFamily: "var(--font-display)",
//           color: "rgba(247,241,234,0.18)",
//         }}
//       >
//         {String(id).padStart(2, "0")}
//       </span>
//     </div>
//   );
// }

// function CategoryBadge({ children }: { children: React.ReactNode }) {
//   return (
//     <span
//       className="inline-flex items-center text-[11px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full backdrop-blur-md"
//       style={{
//         fontFamily: "var(--font-mono)",
//         color: "#F7F1EA",
//         background: "rgba(107,29,63,0.85)",
//         border: "1px solid rgba(247,241,234,0.2)",
//       }}
//     >
//       {children}
//     </span>
//   );
// }

// function NewsContent() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const categories = Array.from(new Set(newsList.map((item) => item.category)));
//   const filteredNews = selectedCategory
//     ? newsList.filter((item) => item.category === selectedCategory)
//     : newsList;

//   const featured = filteredNews[0];
//   const rest = filteredNews.slice(1);

//   const gridVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.09, delayChildren: 0.15 },
//     },
//   };
//   const cardVariants = {
//     hidden: { opacity: 0, y: 24 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.55, ease: "easeOut" as const },
//     },
//   };
//   function formatDate(dateStr: string) {
//     const d = new Date(dateStr);
//     const day = String(d.getDate()).padStart(2, "0");
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const year = d.getFullYear();
//     return `${day}.${month}.${year}`; // masalan: 15.06.2024
//   }

//   return (
//     <div
//       className={`${fraunces.variable} ${plexSans.variable} ${spaceMono.variable} min-h-screen `}
//       style={{ background: "var(--paper)", fontFamily: "var(--font-body)" }}
//     >
//       {/* ---------------- Hero video fon bilan ---------------- */}
//       <section className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
//         <video
//           className="absolute inset-0 h-full w-full object-cover "
//           src="/image/h5.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(26,18,26,0.78) 0%, rgba(26,18,26,0.5) 45%, rgba(26,18,26,0.94) 100%)",
//           }}
//         />
//         {/* Nozik teksturali nur dog'i — chapdan */}
//         <div
//           className="absolute inset-0 opacity-40"
//           style={{
//             background:
//               "radial-gradient(circle at 15% 20%, rgba(212,162,78,0.25), transparent 55%)",
//           }}
//         />

//         <div className="relative z-10 flex h-full flex-col justify-end px-6 sm:px-10 lg:px-16 pb-14 backdrop-blur-sm bg-background/0.5 ">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-5 inline-flex items-center gap-2 w-fit text-xs tracking-[0.25em] uppercase"
//             style={{
//               fontFamily: "var(--font-mono)",
//               color: "var(--highlight)",
//             }}
//           >
//             <span
//               className="inline-block w-1.5 h-1.5 rounded-full"
//               style={{ background: "var(--highlight)" }}
//             />
//             Markaz yangiliklari — {new Date().getFullYear()}
//           </motion.span>

//           <motion.h1
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="max-w-3xl text-5xl md:text-7xl leading-[1.02]"
//             style={{ fontFamily: "var(--font-display)", color: "#F7F1EA" }}
//           >
//             Markazimizdagi{" "}
//             <span style={{ fontStyle: "italic", color: "var(--highlight)" }}>
//               so&rsquo;nggi voqealar
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.25 }}
//             className="mt-6 max-w-xl text-base md:text-lg"
//             style={{ color: "rgba(247,241,234,0.82)" }}
//           >
//             Tibbiyot markazimizdagi muhim yangiliklar, yangi xizmatlar va
//             e&rsquo;lonlar — sodir bo&rsquo;lgan tartibda.
//           </motion.p>

//           <div className="mt-8 max-w-2xl">
//             <PulseLine />
//           </div>
//         </div>
//       </section>

//       {/* ---------------- Kategoriya filtri ---------------- */}
//       <div
//         className="sticky top-0 z-20 backdrop-blur-md transition-shadow"
//         style={{
//           background: "rgba(247,243,236,0.92)",
//           borderBottom: "1px solid var(--line)",
//         }}
//       >
//         <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
//           <nav className="flex flex-wrap gap-x-8 gap-y-3 py-5 text-sm">
//             <button
//               onClick={() => setSelectedCategory(null)}
//               className="relative pb-1 transition-colors"
//               style={{
//                 fontFamily: "var(--font-mono)",
//                 color:
//                   selectedCategory === null ? "var(--ink)" : "var(--muted)",
//                 borderBottom:
//                   selectedCategory === null
//                     ? "2px solid var(--accent-mid)"
//                     : "2px solid transparent",
//               }}
//             >
//               BARCHASI
//             </button>
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className="relative pb-1 uppercase tracking-wide transition-colors"
//                 style={{
//                   fontFamily: "var(--font-mono)",
//                   color:
//                     selectedCategory === cat ? "var(--ink)" : "var(--muted)",
//                   borderBottom:
//                     selectedCategory === cat
//                       ? "2px solid var(--accent-mid)"
//                       : "2px solid transparent",
//                 }}
//               >
//                 {cat}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* ---------------- Yangiliklar lentasi ---------------- */}
//       <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-20">
//         {filteredNews.length === 0 && (
//           <p style={{ color: "var(--muted)" }}>
//             Ushbu bo&rsquo;limda hozircha yangiliklar yo&rsquo;q.
//           </p>
//         )}

//         {/* Asosiy (featured) yangilik — to'liq eninli katta rasm */}
//         {featured && (
//           <motion.a
//             href="#"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.6 }}
//             className="group relative block rounded-2xl overflow-hidden mb-16 shadow-[0_20px_50px_-20px_rgba(36,26,32,0.35)]"
//           >
//             <div className="relative h-[420px] md:h-[520px] w-full">
//               {featured.image ? (
//                 <img
//                   src={featured.image}
//                   alt={featured.title}
//                   className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                 />
//               ) : (
//                 <FallbackTile id={featured.id} />
//               )}
//               {/* Matn o'qilishi uchun pastdan qorong'ulashtirish */}
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(0deg, rgba(20,12,15,0.92) 0%, rgba(20,12,15,0.45) 45%, rgba(20,12,15,0.05) 75%)",
//                 }}
//               />
//             </div>

//             <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
//               <div className="flex items-center gap-3 mb-4">
//                 <span
//                   className="text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
//                   style={{
//                     fontFamily: "var(--font-mono)",
//                     color: "var(--ink)",
//                     background: "var(--highlight)",
//                   }}
//                 >
//                   Asosiy yangilik
//                 </span>
//                 <CategoryBadge>{featured.category}</CategoryBadge>
//                 <span
//                   className="flex items-center gap-1.5 text-xs"
//                   style={{
//                     fontFamily: "var(--font-mono)",
//                     color: "rgba(247,241,234,0.75)",
//                   }}
//                 >
//                   <FiCalendar className="w-3.5 h-3.5" />
//                   {formatDate(featured.date)}
//                 </span>
//               </div>
//               <h2
//                 className="max-w-2xl text-3xl md:text-5xl leading-[1.08] mb-3"
//                 style={{ fontFamily: "var(--font-display)", color: "#F7F1EA" }}
//               >
//                 {featured.title}
//               </h2>
//               <p
//                 className="max-w-xl text-sm md:text-base leading-relaxed mb-5"
//                 style={{ color: "rgba(247,241,234,0.82)" }}
//               >
//                 {featured.excerpt}
//               </p>
//               {/* <span
//                 className="inline-flex items-center gap-2 text-sm font-semibold"
//                 style={{ color: "var(--highlight)" }}
//               >
//                 To&rsquo;liq o&rsquo;qish
//                 <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </span> */}
//             </div>
//           </motion.a>
//         )}

//         {/* Qolgan yangiliklar — rasm-markazli katakcha (grid) tartib */}
//         <motion.div
//           variants={gridVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-60px" }}
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//         >
//           {rest.map((article) => (
//             <motion.a
//               href="#"
//               key={article.id}
//               variants={cardVariants}
//               className="group relative rounded-xl overflow-hidden bg-white shadow-[0_2px_8px_rgba(36,26,32,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_36px_-16px_rgba(36,26,32,0.25)]"
//               style={{ border: "1px solid var(--line)" }}
//             >
//               <div className="relative h-48 overflow-hidden">
//                 {article.image ? (
//                   <img
//                     src={article.image}
//                     alt={article.title}
//                     className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                   />
//                 ) : (
//                   <FallbackTile id={article.id} />
//                 )}
//                 <div
//                   className="absolute inset-0"
//                   style={{
//                     background:
//                       "linear-gradient(0deg, rgba(20,12,15,0.55) 0%, transparent 55%)",
//                   }}
//                 />
//                 <div className="absolute top-3 left-3">
//                   <CategoryBadge>{article.category}</CategoryBadge>
//                 </div>
//               </div>

//               <div className="p-5">
//                 <span
//                   className="flex items-center gap-1.5 text-xs mb-2.5"
//                   style={{
//                     fontFamily: "var(--font-mono)",
//                     color: "var(--muted)",
//                   }}
//                 >
//                   <FiCalendar className="w-3.5 h-3.5" />
//                   {new Date(article.date).toLocaleDateString("uz-UZ")}
//                 </span>
//                 <h3
//                   className="text-lg leading-snug mb-2 group-hover:opacity-70 transition-opacity"
//                   style={{
//                     fontFamily: "var(--font-display)",
//                     color: "var(--ink)",
//                   }}
//                 >
//                   {article.title}
//                 </h3>
//                 <p
//                   className="text-sm leading-relaxed mb-4 line-clamp-2"
//                   style={{ color: "var(--muted)" }}
//                 >
//                   {article.excerpt}
//                 </p>
//                 {/* <span
//                   className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide"
//                   style={{ color: "var(--accent-deep)" }}
//                 >
//                   Batafsil
//                   <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                 </span> */}
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>

//       {/* Dizayn tokenlari — shu sahifaga xos */}
//       <style jsx global>{`
//         :root {
//           --ink: #241a20;
//           --paper: #f7f3ec;
//           --accent-deep: #6b1d3f;
//           --accent-mid: #a13a5c;
//           --highlight: #d4a24e;
//           --line: #e4ddd0;
//           --muted: #6b6459;
//         }
//       `}</style>
//     </div>
//   );
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
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Fraunces, IBM_Plex_Sans, Space_Mono } from "next/font/google";
import { FiCalendar, FiArrowUpRight, FiImage } from "react-icons/fi";

interface NewsItem {
  id: string | number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  featured: boolean;
  image?: string | null;
}

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

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
        stroke="var(--highlight)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: "easeInOut", delay: 0.4 }}
      />
    </svg>
  );
}

// Rasm bo'lmaganda ko'rsatiladigan fallback panel — raqamlangan gradient plitka
function FallbackTile({
  id,
  className = "",
}: {
  id: string | number;
  className?: string;
}) {
  return (
    <div
      className={`relative h-full w-full flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/image/h5.mp4" type="video/mp4" />
      </video>

      {/* Qoraytiruvchi overlay (ixtiyoriy) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <span
        className="relative z-10 text-6xl"
        style={{
          fontFamily: "var(--font-display)",
          color: "rgba(247,241,234,0.18)",
        }}
      >
        {String(id).padStart(2, "0")}
      </span>
    </div>
  );
}

function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center text-[11px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full backdrop-blur-md"
      style={{
        fontFamily: "var(--font-mono)",
        color: "#F7F1EA",
        background: "rgba(107,29,63,0.85)",
        border: "1px solid rgba(247,241,234,0.2)",
      }}
    >
      {children}
    </span>
  );
}

// Sana formatlash — Intl/toLocaleDateString ishlatilmaydi, chunki u
// server (Node) va klient (brauzer) o'rtasida turli natija berib,
// hydration xatosiga sabab bo'lardi. Qo'lda formatlash har doim bir xil.
function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}.${month}.${year}`; // masalan: 15.06.2024
}

function NewsContent() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch("/api/news")
      .then((res) => res.json())
      .then((data: NewsItem[]) => {
        if (isMounted) setNewsList(data);
      })
      .catch((err) => {
        console.error("Yangiliklarni yuklashda xatolik:", err);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const categories = Array.from(new Set(newsList.map((item) => item.category)));
  const filteredNews = selectedCategory
    ? newsList.filter((item) => item.category === selectedCategory)
    : newsList;

  const featured = filteredNews[0];
  const rest = filteredNews.slice(1);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.09, delayChildren: 0.15 },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" as const },
    },
  };

  return (
    <div
      className={`${fraunces.variable} ${plexSans.variable} ${spaceMono.variable} min-h-screen `}
      style={{ background: "var(--paper)", fontFamily: "var(--font-body)" }}
    >
      {/* ---------------- Hero video fon bilan ---------------- */}
      <section className="relative h-[86vh] min-h-[560px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover "
          src="/image/h5.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,18,26,0.78) 0%, rgba(26,18,26,0.5) 45%, rgba(26,18,26,0.94) 100%)",
          }}
        />
        {/* Nozik teksturali nur dog'i — chapdan */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(212,162,78,0.25), transparent 55%)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 sm:px-10 lg:px-16 pb-14 backdrop-blur-sm bg-background/0.5 ">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 w-fit text-xs tracking-[0.25em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--highlight)",
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--highlight)" }}
            />
            Markaz yangiliklari
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-3xl text-5xl md:text-7xl leading-[1.02]"
            style={{ fontFamily: "var(--font-display)", color: "#F7F1EA" }}
          >
            Markazimizdagi{" "}
            <span style={{ fontStyle: "italic", color: "var(--highlight)" }}>
              so&rsquo;nggi voqealar
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base md:text-lg"
            style={{ color: "rgba(247,241,234,0.82)" }}
          >
            Tibbiyot markazimizdagi muhim yangiliklar, yangi xizmatlar va
            e&rsquo;lonlar — sodir bo&rsquo;lgan tartibda.
          </motion.p>

          <div className="mt-8 max-w-2xl">
            <PulseLine />
          </div>
        </div>
      </section>

      {/* ---------------- Kategoriya filtri ---------------- */}
      <div
        className="sticky top-0 z-20 backdrop-blur-md transition-shadow"
        style={{
          background: "rgba(247,243,236,0.92)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 py-5 text-sm">
            <button
              onClick={() => setSelectedCategory(null)}
              className="relative pb-1 transition-colors"
              style={{
                fontFamily: "var(--font-mono)",
                color:
                  selectedCategory === null ? "var(--ink)" : "var(--muted)",
                borderBottom:
                  selectedCategory === null
                    ? "2px solid var(--accent-mid)"
                    : "2px solid transparent",
              }}
            >
              BARCHASI
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="relative pb-1 uppercase tracking-wide transition-colors"
                style={{
                  fontFamily: "var(--font-mono)",
                  color:
                    selectedCategory === cat ? "var(--ink)" : "var(--muted)",
                  borderBottom:
                    selectedCategory === cat
                      ? "2px solid var(--accent-mid)"
                      : "2px solid transparent",
                }}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ---------------- Yangiliklar lentasi ---------------- */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 md:py-20">
        {isLoading && <p style={{ color: "var(--muted)" }}>Yuklanmoqda...</p>}

        {!isLoading && filteredNews.length === 0 && (
          <p style={{ color: "var(--muted)" }}>
            Ushbu bo&rsquo;limda hozircha yangiliklar yo&rsquo;q.
          </p>
        )}

        {/* Asosiy (featured) yangilik — to'liq eninli katta rasm */}
        {featured && (
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="group relative block rounded-2xl overflow-hidden mb-16 shadow-[0_20px_50px_-20px_rgba(36,26,32,0.35)]"
          >
            <div className="relative h-[420px] md:h-[520px] w-full">
              {featured.image ? (
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <FallbackTile id={featured.id} />
              )}
              {/* Matn o'qilishi uchun pastdan qorong'ulashtirish */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(20,12,15,0.92) 0%, rgba(20,12,15,0.45) 45%, rgba(20,12,15,0.05) 75%)",
                }}
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--ink)",
                    background: "var(--highlight)",
                  }}
                >
                  Asosiy yangilik
                </span>
                <CategoryBadge>{featured.category}</CategoryBadge>
                <span
                  className="flex items-center gap-1.5 text-xs"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "rgba(247,241,234,0.75)",
                  }}
                >
                  <FiCalendar className="w-3.5 h-3.5" />
                  {formatDate(featured.date)}
                </span>
              </div>
              <h2
                className="max-w-2xl text-3xl md:text-5xl leading-[1.08] mb-3"
                style={{ fontFamily: "var(--font-display)", color: "#F7F1EA" }}
              >
                {featured.title}
              </h2>
              <p
                className="max-w-xl text-sm md:text-base leading-relaxed mb-5"
                style={{ color: "rgba(247,241,234,0.82)" }}
              >
                {featured.excerpt}
              </p>
              {/* <span
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--highlight)" }}
              >
                To&rsquo;liq o&rsquo;qish
                <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span> */}
            </div>
          </motion.a>
        )}

        {/* Qolgan yangiliklar — rasm-markazli katakcha (grid) tartib */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {rest.map((article) => (
            <motion.a
              href="#"
              key={article.id}
              variants={cardVariants}
              className="group relative rounded-xl overflow-hidden bg-white shadow-[0_2px_8px_rgba(36,26,32,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_36px_-16px_rgba(36,26,32,0.25)]"
              style={{ border: "1px solid var(--line)" }}
            >
              <div className="relative h-48 overflow-hidden">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <FallbackTile id={article.id} />
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(20,12,15,0.55) 0%, transparent 55%)",
                  }}
                />
                <div className="absolute top-3 left-3">
                  <CategoryBadge>{article.category}</CategoryBadge>
                </div>
              </div>

              <div className="p-5">
                <span
                  className="flex items-center gap-1.5 text-xs mb-2.5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--muted)",
                  }}
                >
                  <FiCalendar className="w-3.5 h-3.5" />
                  {formatDate(article.date)}
                </span>
                <h3
                  className="text-lg leading-snug mb-2 group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--ink)",
                  }}
                >
                  {article.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4 line-clamp-2"
                  style={{ color: "var(--muted)" }}
                >
                  {article.excerpt}
                </p>
                {/* <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "var(--accent-deep)" }}
                >
                  Batafsil
                  <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span> */}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Dizayn tokenlari — shu sahifaga xos */}
      <style jsx global>{`
        :root {
          --ink: #241a20;
          --paper: #f7f3ec;
          --accent-deep: #6b1d3f;
          --accent-mid: #a13a5c;
          --highlight: #d4a24e;
          --line: #e4ddd0;
          --muted: #6b6459;
        }
      `}</style>
    </div>
  );
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
  );
}
