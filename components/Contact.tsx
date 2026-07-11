"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Navigation } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value:
      "Shoshilinch Tibbiy Yordam Respublikasi Ilmiy Markazi Farg'ona Filiallari 9QMV+GQV, Farg‘ona, Farg‘ona viloyati, O‘zbekiston",
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
    "Shoshilinch Tibbiy Yordam Respublikasi Ilmiy Markazi Farg'ona Filiallari 9QMV+GQV, Farg‘ona, Farg‘ona viloyati, O‘zbekiston",
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
        <div className="mt-5">
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
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.6220854678877!2d71.79183907529081!3d40.38385905764039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8307363785f9%3A0xc0ca2d3dc7c07e9a!2z0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0KjQvtGI0LjQu9C40L3RhyDQotC40LHQsdC40Lkg0IHRgNC00LDQvCDQmNC70LzQuNC5INCc0LDRgNC60LDQt9C4INCk0LDRgNKT0L7QvdCwINCk0LjQu9C40LDQu9C4!5e1!3m2!1sru!2s!4v1783787112197!5m2!1sru!2s`}
              width="100%"
              height="100%"
              style={{ border: 0, flex: 1, minHeight: 180 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.6220854678877!2d71.79183907529081!3d40.38385905764039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8307363785f9%3A0xc0ca2d3dc7c07e9a!2z0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0KjQvtGI0LjQu9C40L3RhyDQotC40LHQsdC40Lkg0IHRgNC00LDQvCDQmNC70LzQuNC5INCc0LDRgNC60LDQt9C4INCk0LDRgNKT0L7QvdCwINCk0LjQu9C40LDQu9C4!5e1!3m2!1sru!2s!4v1783787112197!5m2!1sru!2s=${mapQuery}`}
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
      </div>
    </section>
  );
}
