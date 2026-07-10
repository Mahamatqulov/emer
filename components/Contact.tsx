// "use client";

// import React, { useState } from "react";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { motion } from "framer-motion";
// import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
// import { AnimatePresence } from "framer-motion";

// export function Contact() {
//   const { t } = useLanguage();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     console.log("Form submitted:", formData);

//     setSubmitted(true);

//     // Inputlarni darhol tozalash
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     });

//     // Xabarni 3 soniyadan keyin yashirish
//     setTimeout(() => {
//       setSubmitted(false);
//     }, 3000);
//   };
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-slate-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             {t("contact.title")}
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             {t("contact.subtitle")}
//           </p>
//         </motion.div>

//         {/* Contact Content */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-3 gap-8 mb-12"
//         >
//           {/* Contact Info - Phone */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-border"
//           >
//             <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
//               <FiPhone className="w-6 h-6 text-primary" />
//             </div>
//             <h3 className="text-lg font-semibold text-foreground mb-2">
//               {t("contact.phone_label")}
//             </h3>
//             <p className="text-muted-foreground">+998 (71) 200-00-77</p>
//             <p className="text-muted-foreground">+998 (90) 123-45-67</p>
//           </motion.div>

//           {/* Contact Info - Email */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-border"
//           >
//             <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
//               <FiMail className="w-6 h-6 text-primary" />
//             </div>
//             <h3 className="text-lg font-semibold text-foreground mb-2">
//               Email
//             </h3>
//             <p className="text-muted-foreground">info@medcenter.uz</p>
//             <p className="text-muted-foreground">support@medcenter.uz</p>
//           </motion.div>

//           {/* Contact Info - Location */}
//           <motion.div
//             variants={itemVariants}
//             className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-border"
//           >
//             <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
//               <FiMapPin className="w-6 h-6 text-primary" />
//             </div>
//             <h3 className="text-lg font-semibold text-foreground mb-2">
//               {t("contact.address")}
//             </h3>
//             <p className="text-muted-foreground">Tashkent, Uzbekistan</p>
//             <p className="text-muted-foreground">Open 24/7 Emergency</p>
//           </motion.div>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mx-auto bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-border"
//         >
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-foreground mb-2"
//                 >
//                   {t("contact.name")}
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
//                   placeholder="John Doe"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-foreground mb-2"
//                 >
//                   {t("contact.email")}
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
//                   placeholder="john@example.com"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-foreground mb-2"
//               >
//                 {t("contact.phone")}
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
//                 placeholder="+998 (90) 123-45-67"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-foreground mb-2"
//               >
//                 {t("contact.message")}
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
//                 placeholder="Your message here..."
//               />
//             </div>
//             <AnimatePresence>
//               {submitted && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="rounded-lg bg-green-100 border border-green-500 text-green-700 px-4 py-3 text-center"
//                 >
//                   Xabaringiz muvaffaqiyatli yuborildi!
//                 </motion.div>
//               )}
//             </AnimatePresence>
//             <button
//               type="submit"
//               className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
//             >
//               <FiSend className="w-5 h-5" />
//               {t("contact.submit")}
//             </button>
//           </form>
//         </motion.div>

//         {/* Google Map Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-16"
//         >
//           <h3 className="text-2xl font-bold text-foreground mb-6">Find Us</h3>
//           <div className="overflow-hidden rounded-xl border border-border shadow-lg">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4208.718877604444!2d71.79101660530974!3d40.38371592283783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8307363785f9%3A0xc0ca2d3dc7c07e9a!2z0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0KjQvtGI0LjQu9C40L3RhyDQotC40LHQsdC40Lkg0IHRgNC00LDQvCDQmNC70LzQuNC5INCc0LDRgNC60LDQt9C4INCk0LDRgNKT0L7QvdCwINCk0LjQu9C40LDQu9C4!5e1!3m2!1sru!2s!4v1783537345840!5m2!1sru!2s"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="w-full"
//             />
//           </div>
//           <p className="text-muted-foreground text-sm mt-4">
//             Emergency Medical Center, Tashkent, Uzbekistan | Open 24/7 for
//             emergency services
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

/////////////////

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// const contactInfo = [
//   {
//     icon: MapPin,
//     label: "Address",
//     value: "1 NovaCare Boulevard, Medical District\nSan Francisco, CA 94102",
//   },
//   {
//     icon: Phone,
//     label: "Emergency Hotline",
//     value: "1-800-NOVA-CARE\nAvailable 24/7",
//   },
//   {
//     icon: Mail,
//     label: "General Enquiries",
//     value: "hello@novacare.health",
//   },
//   {
//     icon: Clock,
//     label: "Visiting Hours",
//     value: "Mon–Fri 8 AM – 8 PM\nWeekends 10 AM – 6 PM",
//   },
// ];

// export function Contact() {
//   const { t } = useLanguage();

//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("loading");

//     try {
//       // TODO: bu yerga API chaqiruvingizni qo'ying
//       // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
//       await new Promise((r) => setTimeout(r, 800));
//       setStatus("sent");
//       setForm({ name: "", email: "", message: "" });
//       setTimeout(() => setStatus("idle"), 3000);
//     } catch (err) {
//       console.error(err);
//       setStatus("idle");
//     }
//   };

//   const inputClass =
//     "px-4 py-3 rounded-2xl text-[14px] text-[#111827] placeholder:text-[#C0C8D8] outline-none transition-all border border-white/70 bg-white/70 focus:border-[#0A84FF]/50 focus:ring-2 focus:ring-[#0A84FF]/15";

//   return (
//     <section
//       className="py-24 px-6 lg:px-8"
//       style={{
//         background: "linear-gradient(#EBF4FF 0%, #F2F5FA 100%)",
//       }}
//     >
//       <div className="max-w-[1320px] mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
//           >
//             <div
//               className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full"
//               style={{
//                 background:
//                   "linear-gradient(145deg, rgba(255,255,255,0.74) 0%, rgba(255,255,255,0.5) 100%)",
//                 backdropFilter: "blur(40px) saturate(180%)",
//                 border: "1px solid rgba(255,255,255,0.56)",
//                 boxShadow:
//                   "rgba(10,132,255,0.09) 0px 8px 32px, rgba(255,255,255,0.85) 0px 1px 0px inset",
//               }}
//             >
//               <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
//               <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0A84FF]">
//                 Contact Us
//               </span>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, delay: 0.07, ease: [0.4, 0, 0.2, 1] }}
//           >
//             <h2 className="text-[38px] lg:text-[52px] font-bold tracking-[-0.035em] leading-[1.08] mb-4 text-[#111827]">
//               Get in Touch
//               <br />
//               With Our Team
//             </h2>
//           </motion.div>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-7">
//           {/* Left — contact info cards */}
//           <div className="lg:col-span-2 flex flex-col gap-4">
//             {contactInfo.map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <motion.div
//                   key={item.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.75,
//                     delay: i * 0.05,
//                     ease: [0.4, 0, 0.2, 1],
//                   }}
//                 >
//                   <div
//                     className="rounded-[22px] p-5 flex gap-4"
//                     style={{
//                       background:
//                         "linear-gradient(145deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 100%)",
//                       backdropFilter: "blur(56px) saturate(200%)",
//                       border: "1px solid rgba(255,255,255,0.7)",
//                       boxShadow:
//                         "rgba(10,132,255,0.11) 0px 16px 56px, rgba(255,255,255,0.95) 0px 1px 0px inset",
//                       borderRadius: 22,
//                     }}
//                   >
//                     <div
//                       className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
//                       style={{ background: "rgba(10,132,255,0.1)" }}
//                     >
//                       <Icon
//                         size={17}
//                         strokeWidth={2}
//                         className="text-[#0A84FF]"
//                       />
//                     </div>
//                     <div>
//                       <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF] mb-0.5">
//                         {item.label}
//                       </div>
//                       <div className="text-[13.5px] font-medium text-[#374151] leading-snug whitespace-pre-line">
//                         {item.value}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Right — form */}
//           <motion.div
//             className="lg:col-span-3"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
//           >
//             <div
//               className="rounded-[32px] p-8 lg:p-10 h-full"
//               style={{
//                 background:
//                   "linear-gradient(145deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 100%)",
//                 backdropFilter: "blur(56px) saturate(200%)",
//                 border: "1px solid rgba(255,255,255,0.7)",
//                 boxShadow:
//                   "rgba(10,132,255,0.11) 0px 16px 56px, rgba(255,255,255,0.95) 0px 1px 0px inset",
//                 borderRadius: 32,
//               }}
//             >
//               <h3 className="text-[20px] font-bold text-[#111827] tracking-tight mb-1">
//                 Send a Message
//               </h3>
//               <p className="text-[13px] text-[#9CA3AF] mb-6">
//                 Typically replied within 2 hours on business days
//               </p>

//               <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//                 <textarea
//                   name="message"
//                   rows={4}
//                   placeholder="How can we help you?"
//                   required
//                   value={form.message}
//                   onChange={handleChange}
//                   className={`${inputClass} resize-none`}
//                 />

//                 <button
//                   type="submit"
//                   disabled={status === "loading"}
//                   className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-[15px] text-white transition-all hover:-translate-y-0.5 active:scale-[.98] disabled:opacity-70"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #0A84FF 0%, #0060CC 100%)",
//                     boxShadow: "rgba(10,132,255,0.36) 0px 8px 28px",
//                   }}
//                 >
//                   <Send size={15} strokeWidth={2.5} />
//                   {status === "loading"
//                     ? "Sending..."
//                     : status === "sent"
//                       ? "Sent ✓"
//                       : "Send Message"}
//                 </button>
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Navigation } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "1 NovaCare Boulevard, Medical District\nSan Francisco, CA 94102",
  },
  {
    icon: Phone,
    label: "Emergency Hotline",
    value: "1-800-NOVA-CARE\nAvailable 24/7",
  },
  {
    icon: Mail,
    label: "General Enquiries",
    value: "hello@novacare.health",
  },
  {
    icon: Clock,
    label: "Visiting Hours",
    value: "Mon–Fri 8 AM – 8 PM\nWeekends 10 AM – 6 PM",
  },
];

export function Contact() {
  const { t } = useLanguage();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const mapQuery = encodeURIComponent(
    "1 NovaCare Boulevard, Medical District, San Francisco, CA 94102",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: bu yerga API chaqiruvingizni qo'ying
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setStatus("idle");
    }
  };

  const inputClass =
    "px-4 py-3 rounded-2xl text-[14px] text-[#111827] placeholder:text-[#C0C8D8] outline-none transition-all border border-white/70 bg-white/70 focus:border-[#0A84FF]/50 focus:ring-2 focus:ring-[#0A84FF]/15";

  return (
    <section
      className="py-24 px-6 lg:px-8"
      style={{
        background: "linear-gradient(#EBF4FF 0%, #F2F5FA 100%)",
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.74) 0%, rgba(255,255,255,0.5) 100%)",
                backdropFilter: "blur(40px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.56)",
                boxShadow:
                  "rgba(10,132,255,0.09) 0px 8px 32px, rgba(255,255,255,0.85) 0px 1px 0px inset",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0A84FF]">
                Contact Us
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.07, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-[38px] lg:text-[52px] font-bold tracking-[-0.035em] leading-[1.08] mb-4 text-[#111827]">
              Get in Touch
              <br />
              With Our Team
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-7">
          {/* Left — contact info cards + map */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.05,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <div
                    className="rounded-[22px] p-5 flex gap-4"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 100%)",
                      backdropFilter: "blur(56px) saturate(200%)",
                      border: "1px solid rgba(255,255,255,0.7)",
                      boxShadow:
                        "rgba(10,132,255,0.11) 0px 16px 56px, rgba(255,255,255,0.95) 0px 1px 0px inset",
                      borderRadius: 22,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-[14px] flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(10,132,255,0.1)" }}
                    >
                      <Icon
                        size={17}
                        strokeWidth={2}
                        className="text-[#0A84FF]"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF] mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-[13.5px] font-medium text-[#374151] leading-snug whitespace-pre-line">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="flex-1 flex flex-col rounded-[22px] overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "rgba(10,132,255,0.11) 0px 16px 56px",
                minHeight: 220,
              }}
            >
              <iframe
                title="Location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, flex: 1, minHeight: 180 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 text-[13px] font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg,#0A84FF 0%,#0060CC 100%)",
                }}
              >
                <Navigation size={13} strokeWidth={2.5} />
                Get Directions
              </a>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="rounded-[32px] p-8 lg:p-10 h-full"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.72) 100%)",
                backdropFilter: "blur(56px) saturate(200%)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow:
                  "rgba(10,132,255,0.11) 0px 16px 56px, rgba(255,255,255,0.95) 0px 1px 0px inset",
                borderRadius: 32,
              }}
            >
              <h3 className="text-[20px] font-bold text-[#111827] tracking-tight mb-1">
                Send a Message
              </h3>
              <p className="text-[13px] text-[#9CA3AF] mb-6">
                Typically replied within 2 hours on business days
              </p>

              <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-[15px] text-white transition-all hover:-translate-y-0.5 active:scale-[.98] disabled:opacity-70"
                  style={{
                    background:
                      "linear-gradient(135deg, #0A84FF 0%, #0060CC 100%)",
                    boxShadow: "rgba(10,132,255,0.36) 0px 8px 28px",
                  }}
                >
                  <Send size={15} strokeWidth={2.5} />
                  {status === "loading"
                    ? "Sending..."
                    : status === "sent"
                      ? "Sent ✓"
                      : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
