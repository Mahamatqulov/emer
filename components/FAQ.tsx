// 'use client'

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { useLanguage } from '@/contexts/LanguageContext'
// import { FiChevronDown } from 'react-icons/fi'

// export function FAQ() {
//   const { t, language } = useLanguage()
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

//   const faqs = {
//     en: [
//       {
//         question: 'What are your emergency room hours?',
//         answer: 'Our emergency room is open 24/7, 365 days a year. Our medical team is always ready to assist with any emergency medical situation.',
//       },
//       {
//         question: 'How do I make an appointment?',
//         answer: 'You can make an appointment by calling our main number, using our online booking system on this website, or visiting our reception desk in person.',
//       },
//       {
//         question: 'What insurance do you accept?',
//         answer: 'We accept most major insurance plans. Please contact us directly to verify if your insurance is accepted at our facility.',
//       },
//       {
//         question: 'Do you provide ambulance service?',
//         answer: 'Yes, we provide 24/7 ambulance service with trained paramedics and modern equipment for emergency transportation.',
//       },
//       {
//         question: 'What types of surgeries do you perform?',
//         answer: 'We perform a wide range of surgical procedures including emergency surgery, general surgery, orthopedic surgery, and specialized procedures with experienced surgeons.',
//       },
//       {
//         question: 'Can I request a specific doctor?',
//         answer: 'Yes, you can request a specific doctor when making your appointment, subject to their availability. Our staff will assist you in scheduling.',
//       },
//     ],
//     ru: [
//       {
//         question: 'Какой режим работы вашего отделения неотложной помощи?',
//         answer: 'Наше отделение неотложной помощи работает 24/7, 365 дней в году. Наша медицинская команда всегда готова помочь при любой чрезвычайной ситуации.',
//       },
//       {
//         question: 'Как записаться на приём?',
//         answer: 'Вы можете записаться по главному номеру телефона, через онлайн-систему бронирования на нашем веб-сайте или посетив нашу регистратуру лично.',
//       },
//       {
//         question: 'Какую страховку вы принимаете?',
//         answer: 'Мы принимаем большинство основных страховых планов. Пожалуйста, свяжитесь с нами напрямую, чтобы узнать, принимаем ли мы вашу страховку.',
//       },
//       {
//         question: 'Предоставляете ли вы скорую помощь?',
//         answer: 'Да, мы предоставляем круглосуточную скорую помощь с обученными парамедиками и современным оборудованием для экстренной транспортировки.',
//       },
//       {
//         question: 'Какие виды операций вы проводите?',
//         answer: 'Мы проводим широкий спектр хирургических процедур, включая экстренную хирургию, общую хирургию, ортопедическую хирургию и специализированные процедуры.',
//       },
//       {
//         question: 'Могу ли я запросить конкретного врача?',
//         answer: 'Да, вы можете запросить конкретного врача при бронировании приёма в зависимости от его доступности. Наш персонал поможет вам с расписанием.',
//       },
//     ],
//     uz: [
//       {
//         question: 'Sizning favqulodda yordam bo\'limining ish vaqti qanday?',
//         answer: 'Bizning favqulodda yordam bo\'limi haftada 7 kun, kuniga 24 soat, yil davomida ochiq. Bizning jamoamiz har qanday favqulodda vaziyatda yordam berishga tayyoraligi.',
//       },
//       {
//         question: 'Qabulga qanday ro\'yxatdan o\'tisham?',
//         answer: 'Siz asosiy telefon raqamiga qo\'ng\'iroq qilish, web-saytimizda onlayn bron tizimasidan foydalanish yoki qabul xizmitiga shaxsan tashrif buyurish orqali ro\'yxatdan o\'tishlashingiz mumkin.',
//       },
//       {
//         question: 'Qanday sug\'urtaga ruxsat berasiz?',
//         answer: 'Biz ko\'pchilk asosiy sug\'urta rejalarini qabul qilamiz. Iltimos, sizning sug\'urtang bizda qabul qilinishini tekshirish uchun biz bilan bog\'lanin.',
//       },
//       {
//         question: 'Ambulans xizmati taqdim etasizmi?',
//         answer: 'Ha, biz 24/7 ambulans xizmati taqdim etamiz, o\'qitilgan paramediklar va zamonaviy jihozlar bilan favqulodda transportirovalish uchun.',
//       },
//       {
//         question: 'Qanday turdagi operatsiyalar o\'tkazasiz?',
//         answer: 'Biz keng ko\'lamda jarrohlik protseduralarini o\'tkazamiz, shu jumladan favqulodda jarrohlik, umumiy jarrohlik, ortopedik jarrohlik va ixtisoslashtirilgan protseduralar.',
//       },
//       {
//         question: 'Belgilanishi kerak bo\'lgan shifokorni so\'rash mumkinmi?',
//         answer: 'Ha, qabul uchun ro\'yxatdan o\'tishda uning mavjudligi asosida ma\'lum bir shifokorni so\'rash mumkin. Bizning xodimlar sizga jadval bilan yordam berishadi.',
//       },
//     ],
//   }

//   const currentFaqs = faqs[language as keyof typeof faqs] || faqs.en

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

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5 },
//     },
//   }

//   return (
//     <section id="faq" className="py-16 bg-background">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-foreground mb-4">
//             {t('faq.title')}
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             {t('faq.subtitle')}
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="max-w-3xl mx-auto"
//         >
//           {currentFaqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="mb-4 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
//             >
//               <button
//                 onClick={() =>
//                   setExpandedIndex(expandedIndex === index ? null : index)
//                 }
//                 className="w-full px-6 py-5 bg-white dark:bg-slate-800 flex items-center justify-between hover:bg-primary/5 dark:hover:bg-slate-700/50 transition-colors text-left"
//               >
//                 <h3 className="text-lg font-semibold text-foreground pr-4">
//                   {faq.question}
//                 </h3>
//                 <motion.div
//                   animate={{ rotate: expandedIndex === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="flex-shrink-0"
//                 >
//                   <FiChevronDown className="w-5 h-5 text-primary" />
//                 </motion.div>
//               </button>

//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{
//                   height: expandedIndex === index ? 'auto' : 0,
//                   opacity: expandedIndex === index ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 <div className="px-6 py-4 bg-primary/5 dark:bg-slate-700/30 border-t border-border">
//                   <p className="text-muted-foreground leading-relaxed">
//                     {faq.answer}
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { FiPlus, FiPhone } from "react-icons/fi";

export function FAQ() {
  const { t, language } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = {
    en: [
      {
        question: "What are your emergency room hours?",
        answer:
          "Our emergency room is open 24/7, 365 days a year. Our medical team is always ready to assist with any emergency medical situation.",
      },
      {
        question: "How do I make an appointment?",
        answer:
          "You can make an appointment by calling our main number, using our online booking system on this website, or visiting our reception desk in person.",
      },
      {
        question: "What insurance do you accept?",
        answer:
          "We accept most major insurance plans. Please contact us directly to verify if your insurance is accepted at our facility.",
      },
      {
        question: "Do you provide ambulance service?",
        answer:
          "Yes, we provide 24/7 ambulance service with trained paramedics and modern equipment for emergency transportation.",
      },
      {
        question: "What types of surgeries do you perform?",
        answer:
          "We perform a wide range of surgical procedures including emergency surgery, general surgery, orthopedic surgery, and specialized procedures with experienced surgeons.",
      },
      {
        question: "Can I request a specific doctor?",
        answer:
          "Yes, you can request a specific doctor when making your appointment, subject to their availability. Our staff will assist you in scheduling.",
      },
    ],
    ru: [
      {
        question: "Какой режим работы вашего отделения неотложной помощи?",
        answer:
          "Наше отделение неотложной помощи работает 24/7, 365 дней в году. Наша медицинская команда всегда готова помочь при любой чрезвычайной ситуации.",
      },
      {
        question: "Как записаться на приём?",
        answer:
          "Вы можете записаться по главному номеру телефона, через онлайн-систему бронирования на нашем веб-сайте или посетив нашу регистратуру лично.",
      },
      {
        question: "Какую страховку вы принимаете?",
        answer:
          "Мы принимаем большинство основных страховых планов. Пожалуйста, свяжитесь с нами напрямую, чтобы узнать, принимаем ли мы вашу страховку.",
      },
      {
        question: "Предоставляете ли вы скорую помощь?",
        answer:
          "Да, мы предоставляем круглосуточную скорую помощь с обученными парамедиками и современным оборудованием для экстренной транспортировки.",
      },
      {
        question: "Какие виды операций вы проводите?",
        answer:
          "Мы проводим широкий спектр хирургических процедур, включая экстренную хирургию, общую хирургию, ортопедическую хирургию и специализированные процедуры.",
      },
      {
        question: "Могу ли я запросить конкретного врача?",
        answer:
          "Да, вы можете запросить конкретного врача при бронировании приёма в зависимости от его доступности. Наш персонал поможет вам с расписанием.",
      },
    ],
    uz: [
      {
        question: "Sizning favqulodda yordam bo'limining ish vaqti qanday?",
        answer:
          "Bizning favqulodda yordam bo'limi haftada 7 kun, kuniga 24 soat, yil davomida ochiq. Bizning jamoamiz har qanday favqulodda vaziyatda yordam berishga tayyor.",
      },
      {
        question: "Qabulga qanday ro'yxatdan o'tsam bo'ladi?",
        answer:
          "Siz asosiy telefon raqamiga qo'ng'iroq qilish, web-saytimizdagi onlayn bron tizimidan foydalanish yoki qabul xizmatiga shaxsan tashrif buyurish orqali ro'yxatdan o'tishingiz mumkin.",
      },
      {
        question: "Qanday sug'urtalarni qabul qilasiz?",
        answer:
          "Biz ko'pchilik asosiy sug'urta rejalarini qabul qilamiz. Iltimos, sizning sug'urtangiz bizda qabul qilinishini tekshirish uchun biz bilan bog'laning.",
      },
      {
        question: "Ambulans xizmati taqdim etasizmi?",
        answer:
          "Ha, biz 24/7 ambulans xizmati taqdim etamiz, o'qitilgan paramediklar va zamonaviy jihozlar bilan favqulodda tashish uchun.",
      },
      {
        question: "Qanday turdagi operatsiyalar o'tkazasiz?",
        answer:
          "Biz keng ko'lamda jarrohlik protseduralarini o'tkazamiz, shu jumladan favqulodda jarrohlik, umumiy jarrohlik, ortopedik jarrohlik va ixtisoslashtirilgan protseduralar.",
      },
      {
        question: "Belgilangan shifokorni so'rash mumkinmi?",
        answer:
          "Ha, qabul uchun ro'yxatdan o'tishda uning mavjudligiga qarab ma'lum bir shifokorni so'rash mumkin. Bizning xodimlar sizga jadval bilan yordam berishadi.",
      },
    ],
  };

  const currentFaqs = faqs[language as keyof typeof faqs] || faqs.en;

  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              FAQ
            </span>

            <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
              {t("faq.title")}
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {t("faq.subtitle")}
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-6">
              <p className="text-sm font-medium text-muted-foreground">
                {language === "uz"
                  ? "Javob topa olmadingizmi?"
                  : language === "ru"
                    ? "Не нашли ответ?"
                    : "Didn't find your answer?"}
              </p>

              <a
                href="tel:103"
                className="mt-3 inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <FiPhone className="h-5 w-5" />
                103
              </a>

              <p className="mt-1 text-xs text-muted-foreground">
                {language === "uz"
                  ? "24/7 shoshilinch aloqa"
                  : language === "ru"
                    ? "Круглосуточная связь"
                    : "Available 24/7"}
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <div>
            {currentFaqs.map((faq, index) => {
              const isOpen = expandedIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative border-b border-border last:border-b-0"
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <button
                    onClick={() => setExpandedIndex(isOpen ? null : index)}
                    className="flex w-full items-center gap-5 py-6 pl-6 text-left transition-colors hover:bg-muted/30"
                  >
                    <span className="font-mono text-sm text-muted-foreground/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className={`flex-1 text-lg font-semibold transition-colors ${
                        isOpen ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      <FiPlus className="h-4 w-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pl-16 pr-6 leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
