"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Stethoscope,
  ScanLine,
  Clock,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

type Reason = {
  icon: typeof Zap;
  color: string;
  title: string;
  desc: string;
};

const reasons: Reason[] = [
  {
    icon: Zap,
    color: "#FF3B30",
    title: "Tezkor yordam",
    desc: "Shoshilinch chaqiruvlarga o'rtacha 10 daqiqada javob beramiz — har bir daqiqa hisobga olinadi",
  },
  {
    icon: Stethoscope,
    color: "#0A84FF",
    title: "Malakali shifokorlar",
    desc: "50 dan ortiq tajribali shifokor turli tibbiy yo'nalishlar bo'yicha xizmat ko'rsatadi",
  },
  {
    icon: ScanLine,
    color: "#FF9500",
    title: "Zamonaviy jihozlar",
    desc: "Diagnostika va davolashda eng so'nggi tibbiy texnologiyalardan foydalanamiz",
  },
  {
    icon: Clock,
    color: "#5AC8FA",
    title: "Sutkasiz faoliyat",
    desc: "Markaz kecha-kunduz, dam olish kunlarisiz ishlaydi — yordam har doim yaqin",
  },
  {
    icon: HeartHandshake,
    color: "#34C759",
    title: "Individual yondashuv",
    desc: "Har bir bemor uchun alohida tashxis va davolash rejasi ishlab chiqiladi",
  },
  {
    icon: ShieldCheck,
    color: "#BF5AF2",
    title: "Ishonchli natijalar",
    desc: "Yuqori davolash samaradorligi va bemorlarning barqaror mamnunligi bilan faxrlanamiz",
  },
];

// Hex → rgba yordamchi funksiya
function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function WhyNovaCare({ onBook }: { onBook: () => void }) {
  return (
    <section className="py-24 px-6 lg:px-8" style={{ background: "#F2F5FA" }}>
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
                Nega aynan biz
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
              Nega aynan
              <br />
              Respublika Shoshilinch Tibbiy Yordam Ilmiy Markazi'ni tanlashadi
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-[17px] leading-relaxed max-w-[540px] mx-auto text-[#6B7280]">
              Tezkorlik, tajriba va zamonaviy texnologiyalarni birlashtirib, har
              bir bemorga ishonchli tibbiy yordam ko'rsatamiz
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.06,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <div
                  className="group rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: `linear-gradient(145deg, rgba(255,255,255,0.88) 0%, ${hexToRgba(
                      reason.color,
                      0.06,
                    )} 100%)`,
                    backdropFilter: "blur(56px) saturate(200%)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow:
                      "rgba(10,132,255,0.08) 0px 8px 32px, rgba(255,255,255,0.9) 0px 1px 0px inset",
                    borderRadius: 28,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-[16px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: hexToRgba(reason.color, 0.086) }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.75}
                      style={{ color: reason.color }}
                    />
                  </div>

                  <div
                    className="h-0.5 w-8 rounded-full mb-5 transition-all duration-300 group-hover:w-12"
                    style={{ background: reason.color, opacity: 0.5 }}
                  />

                  <h3 className="text-[18px] font-bold text-[#111827] tracking-tight mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-[13.5px] text-[#6B7280] leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* <div
            className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-[28px] px-8 py-8 sm:px-10"
            style={{
              background: "linear-gradient(135deg,#0A84FF 0%,#0050CC 100%)",
              boxShadow: "0 20px 48px rgba(10,132,255,.35)",
            }}
          >
            <div className="text-center sm:text-left">
              <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight mb-1">
                Sog'ligingiz biz uchun ustuvor
              </h3>
              <p className="text-[14px] text-white/80">
                Hozir qabulga yoziling — mutaxassislarimiz sizga tez orada
                yordam beradi
              </p>
            </div>
            <button
              onClick={onBook}
              className="flex-shrink-0 px-7 py-3.5 rounded-2xl font-semibold text-[14px] text-[#0A84FF] bg-white transition-transform active:scale-95 hover:-translate-y-0.5"
            >
              Qabulga yozilish
            </button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
