// "use client";

// import { motion } from "framer-motion";
// import {
//   HeartPulse,
//   Brain,
//   Bone,
//   Eye,
//   Baby,
//   Microscope,
//   ChevronRight,
// } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// const departments = [
//   {
//     icon: HeartPulse,
//     color: "#FF3B30",
//     title: "Cardiology",
//     desc: "Advanced catheterisation, EP studies and heart failure management",
//   },
//   {
//     icon: Brain,
//     color: "#0A84FF",
//     title: "Neurology",
//     desc: "Comprehensive neurological diagnosis, epilepsy and stroke care",
//   },
//   {
//     icon: Bone,
//     color: "#FF9500",
//     title: "Orthopedics",
//     desc: "Joint replacement, spine surgery and sports rehabilitation",
//   },
//   {
//     icon: Eye,
//     color: "#5AC8FA",
//     title: "Ophthalmology",
//     desc: "Laser correction, cataract surgery and retinal disease management",
//   },
//   {
//     icon: Baby,
//     color: "#34C759",
//     title: "Pediatrics",
//     desc: "Dedicated child health from neonatal through adolescent medicine",
//   },
//   {
//     icon: Microscope,
//     color: "#BF5AF2",
//     title: "Oncology",
//     desc: "Precision immunotherapy, proton therapy and tumour boards",
//   },
// ];

// export function Departments() {
//   const { t } = useLanguage();

//   return (
//     <section className="py-24 px-6 lg:px-8" style={{ background: "#F2F5FA" }}>
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
//                 Medical Departments
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
//               Specialised Care for
//               <br />
//               Every Condition
//             </h2>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
//           >
//             <p className="text-[17px] leading-relaxed max-w-[540px] mx-auto text-[#6B7280]">
//               Our departments unite the finest clinicians, cutting-edge
//               equipment and evidence-based protocols.
//             </p>
//           </motion.div>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {departments.map((dept, i) => {
//             const Icon = dept.icon;
//             return (
//               <motion.div
//                 key={dept.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.75,
//                   delay: i * 0.06,
//                   ease: [0.4, 0, 0.2, 1],
//                 }}
//               >
//                 <div
//                   className="group rounded-[28px] p-7 cursor-pointer transition-all duration-300 hover:-translate-y-2"
//                   style={{
//                     background: `linear-gradient(145deg, rgba(255,255,255,0.88) 0%, ${hexToRgba(
//                       dept.color,
//                       0.06,
//                     )} 100%)`,
//                     backdropFilter: "blur(56px) saturate(200%)",
//                     border: "1px solid rgba(255,255,255,0.7)",
//                     boxShadow:
//                       "rgba(10,132,255,0.08) 0px 8px 32px, rgba(255,255,255,0.9) 0px 1px 0px inset",
//                     borderRadius: 28,
//                   }}
//                 >
//                   {/* Icon */}
//                   <div
//                     className="w-12 h-12 rounded-[16px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
//                     style={{ background: hexToRgba(dept.color, 0.086) }}
//                   >
//                     <Icon
//                       size={22}
//                       strokeWidth={1.75}
//                       style={{ color: dept.color }}
//                     />
//                   </div>

//                   {/* Accent line */}
//                   <div
//                     className="h-0.5 w-8 rounded-full mb-5 transition-all duration-300 group-hover:w-12"
//                     style={{ background: dept.color, opacity: 0.5 }}
//                   />

//                   <h3 className="text-[18px] font-bold text-[#111827] tracking-tight mb-2">
//                     {dept.title}
//                   </h3>
//                   <p className="text-[13.5px] text-[#6B7280] leading-relaxed mb-5">
//                     {dept.desc}
//                   </p>

//                   <div
//                     className="flex items-center gap-1.5 text-[13px] font-semibold transition-colors"
//                     style={{ color: dept.color }}
//                   >
//                     Learn more
//                     <ChevronRight
//                       size={13}
//                       strokeWidth={2.5}
//                       className="transition-transform duration-200 group-hover:translate-x-1"
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// // Hex → rgba yordamchi funksiya
// function hexToRgba(hex: string, alpha: number) {
//   const r = parseInt(hex.slice(1, 3), 16);
//   const g = parseInt(hex.slice(3, 5), 16);
//   const b = parseInt(hex.slice(5, 7), 16);
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// }

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Bone,
  Eye,
  Baby,
  Microscope,
  ChevronRight,
  X,
  Check,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Department = {
  icon: typeof HeartPulse;
  color: string;
  title: string;
  desc: string;
  fullDesc: string;
  services: string[];
  stats: { label: string; value: string }[];
};

const departments: Department[] = [
  {
    icon: HeartPulse,
    color: "#FF3B30",
    title: "Cardiology",
    desc: "Advanced catheterisation, EP studies and heart failure management",
    fullDesc:
      "Our cardiology team diagnoses and treats the full spectrum of heart conditions, from arrhythmias to complex coronary disease. The department combines a 24/7 catheterisation lab with dedicated heart-failure and electrophysiology programmes, so patients move from diagnosis to treatment without delay.",
    services: [
      "Cardiac catheterisation & angioplasty",
      "Electrophysiology (EP) studies",
      "Heart failure management",
      "Echocardiography & stress testing",
    ],
    stats: [
      { label: "Specialists", value: "14" },
      { label: "Avg. wait time", value: "< 20 min" },
    ],
  },
  {
    icon: Brain,
    color: "#0A84FF",
    title: "Neurology",
    desc: "Comprehensive neurological diagnosis, epilepsy and stroke care",
    fullDesc:
      "The neurology department covers everything from routine diagnostics to time-critical stroke response. Our stroke unit follows a strict door-to-needle protocol, while dedicated epilepsy monitoring and neuroimaging support long-term care for chronic conditions.",
    services: [
      "24/7 stroke unit (door-to-needle protocol)",
      "Epilepsy monitoring (EEG)",
      "Neuroimaging (MRI/CT)",
      "Movement disorder clinics",
    ],
    stats: [
      { label: "Specialists", value: "10" },
      { label: "Stroke response", value: "< 60 min" },
    ],
  },
  {
    icon: Bone,
    color: "#FF9500",
    title: "Orthopedics",
    desc: "Joint replacement, spine surgery and sports rehabilitation",
    fullDesc:
      "From sports injuries to complex joint replacement, our orthopedic surgeons use minimally invasive techniques wherever possible to shorten recovery time. An in-house rehabilitation team supports patients through every stage of healing.",
    services: [
      "Joint replacement (hip, knee, shoulder)",
      "Spine surgery",
      "Sports medicine & arthroscopy",
      "Post-operative rehabilitation",
    ],
    stats: [
      { label: "Specialists", value: "9" },
      { label: "Procedures / year", value: "1,200+" },
    ],
  },
  {
    icon: Eye,
    color: "#5AC8FA",
    title: "Ophthalmology",
    desc: "Laser correction, cataract surgery and retinal disease management",
    fullDesc:
      "Our ophthalmology unit treats conditions ranging from routine vision correction to complex retinal disease. Same-day cataract surgery and precision laser correction are performed using the latest diagnostic and surgical equipment.",
    services: [
      "Laser vision correction",
      "Cataract surgery",
      "Retinal disease management",
      "Glaucoma screening & treatment",
    ],
    stats: [
      { label: "Specialists", value: "6" },
      { label: "Cataract recovery", value: "Same-day" },
    ],
  },
  {
    icon: Baby,
    color: "#34C759",
    title: "Pediatrics",
    desc: "Dedicated child health from neonatal through adolescent medicine",
    fullDesc:
      "A dedicated pediatric wing covers care from the neonatal period through adolescence, staffed by physicians trained specifically in child health. Family-friendly rooms and a separate pediatric emergency entrance keep the experience calm for younger patients.",
    services: [
      "Neonatal & newborn care",
      "Pediatric emergency unit",
      "Childhood vaccination programmes",
      "Growth & development monitoring",
    ],
    stats: [
      { label: "Specialists", value: "11" },
      { label: "Separate ER entrance", value: "Yes" },
    ],
  },
  {
    icon: Microscope,
    color: "#BF5AF2",
    title: "Oncology",
    desc: "Precision immunotherapy, proton therapy and tumour boards",
    fullDesc:
      "Cancer care is coordinated through weekly multidisciplinary tumour boards, bringing together oncologists, radiologists and surgeons around each patient's case. Treatment plans combine precision immunotherapy with advanced radiation options.",
    services: [
      "Multidisciplinary tumour boards",
      "Precision immunotherapy",
      "Radiation & proton therapy referral",
      "Palliative & supportive care",
    ],
    stats: [
      { label: "Specialists", value: "8" },
      { label: "Tumour board", value: "Weekly" },
    ],
  },
];

function DepartmentModal({
  dept,
  onClose,
}: {
  dept: Department | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!dept) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [dept, onClose]);

  return (
    <AnimatePresence>
      {dept && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          onClick={onClose}
        >
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(17, 24, 39, 0.5)",
              backdropFilter: "blur(6px)",
            }}
          />

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10 w-full max-w-lg max-h-[86vh] overflow-y-auto"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.88) 100%)",
              backdropFilter: "blur(56px) saturate(200%)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow:
                "rgba(10,132,255,0.14) 0px 24px 64px, rgba(255,255,255,0.9) 0px 1px 0px inset",
              borderRadius: 28,
            }}
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full transition-colors"
              style={{ background: "rgba(17,24,39,0.06)" }}
              aria-label="Close"
            >
              <X size={16} strokeWidth={2.5} className="text-[#111827]" />
            </button>

            <div className="p-8">
              <div
                className="w-14 h-14 rounded-[18px] flex items-center justify-center mb-6"
                style={{ background: hexToRgba(dept.color, 0.1) }}
              >
                <dept.icon
                  size={26}
                  strokeWidth={1.75}
                  style={{ color: dept.color }}
                />
              </div>

              <h3 className="text-[26px] font-bold text-[#111827] tracking-tight mb-3">
                {dept.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-[#6B7280] mb-6">
                {dept.fullDesc}
              </p>

              <div className="flex gap-3 mb-6">
                {dept.stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex-1 rounded-2xl px-4 py-3"
                    style={{ background: hexToRgba(dept.color, 0.07) }}
                  >
                    <div
                      className="text-[18px] font-bold tracking-tight"
                      style={{ color: dept.color }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[11.5px] text-[#6B7280] mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 mb-8">
                {dept.services.map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: hexToRgba(dept.color, 0.12) }}
                    >
                      <Check
                        size={11}
                        strokeWidth={3}
                        style={{ color: dept.color }}
                      />
                    </span>
                    <span className="text-[13.5px] text-[#111827] leading-snug">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3.5 rounded-2xl font-semibold text-[14px] text-white transition-transform active:scale-[0.98]"
                style={{ background: dept.color }}
              >
                Book an appointment
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Departments() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Department | null>(null);

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
                Medical Departments
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
              Specialised Care for
              <br />
              Every Condition
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="text-[17px] leading-relaxed max-w-[540px] mx-auto text-[#6B7280]">
              Our departments unite the finest clinicians, cutting-edge
              equipment and evidence-based protocols.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((dept, i) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.title}
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
                  onClick={() => setSelected(dept)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelected(dept)}
                  className="group rounded-[28px] p-7 cursor-pointer transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: `linear-gradient(145deg, rgba(255,255,255,0.88) 0%, ${hexToRgba(
                      dept.color,
                      0.06,
                    )} 100%)`,
                    backdropFilter: "blur(56px) saturate(200%)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow:
                      "rgba(10,132,255,0.08) 0px 8px 32px, rgba(255,255,255,0.9) 0px 1px 0px inset",
                    borderRadius: 28,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-[16px] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: hexToRgba(dept.color, 0.086) }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.75}
                      style={{ color: dept.color }}
                    />
                  </div>

                  {/* Accent line */}
                  <div
                    className="h-0.5 w-8 rounded-full mb-3 transition-all duration-300 group-hover:w-12"
                    style={{ background: dept.color, opacity: 0.5 }}
                  />

                  <h3 className="text-[18px] font-bold text-[#111827] tracking-tight mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-[13.5px] text-[#6B7280] leading-relaxed mb-5">
                    {dept.desc}
                  </p>

                  <div
                    className="flex items-center gap-1.5 text-[13px] font-semibold transition-colors"
                    style={{ color: dept.color }}
                  >
                    Learn more
                    <ChevronRight
                      size={13}
                      strokeWidth={2.5}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <DepartmentModal dept={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

// Hex → rgba yordamchi funksiya
function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
