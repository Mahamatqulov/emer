"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import doctors from "@/data/doctors.json";
import { FiPhone, FiAward, FiClock } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import {
  FaTruckMedical,
  FaHeartPulse,
  FaBriefcaseMedical,
  FaChild,
  FaBone,
  FaBrain,
  FaUserDoctor,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

const specialtyIcons: Record<string, IconType> = {
  "Emergency Medicine": FaTruckMedical,
  Cardiology: FaHeartPulse,
  Surgery: FaBriefcaseMedical,
  Pediatrics: FaChild,
  Orthopedics: FaBone,
  Neurology: FaBrain,
};

const pulseLineVariants: Variants = {
  rest: { pathLength: 0.15, opacity: 0.3 },
  hover: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

// Signature element: an EKG-style pulse line that "beats" on hover,
// echoing the heartbeat motif used in the Statistics section.
function PulseLine() {
  return (
    <svg
      viewBox="0 0 200 24"
      className="w-full h-6 overflow-visible"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 12 H60 L72 12 L80 2 L90 22 L100 12 L110 12 L118 12 L126 4 L134 12 H200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
        initial={{ pathLength: 0, opacity: 0.3 }}
        variants={pulseLineVariants}
      />
    </svg>
  );
}

export function Doctors() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactVariants: Variants = {
    rest: { y: "100%" },
    hover: { y: "0%", transition: { duration: 0.4, ease: "easeOut" } },
  };

  const socialListVariants: Variants = {
    rest: {},
    hover: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  };

  const socialItemVariants: Variants = {
    rest: { opacity: 0, y: 8 },
    hover: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="doctors"
      className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Ambient background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent mb-3">
            <span className="h-px w-6 bg-accent" />
            Our Specialists
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("doctors.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("doctors.subtitle")}
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {doctors.map((doctor) => {
            const SpecialtyIcon =
              specialtyIcons[doctor.specialty] || FaUserDoctor;

            return (
              <motion.div
                key={doctor.id}
                variants={cardVariants}
                initial="rest"
                whileHover={prefersReducedMotion ? undefined : "hover"}
                animate="rest"
                className="group relative"
              >
                {/* Ambient color glow — signature: light diffusing through frosted glass,
                    resting quietly under each card and blooming softly on hover */}
                <div className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-primary/40 via-accent/30 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                {/* Grounding contact shadow — keeps the card anchored even at rest */}
                <div className="absolute inset-x-6 -bottom-2 h-6 rounded-full bg-slate-900/15 dark:bg-black/40 blur-lg -z-10" />

                <div className="relative rounded-2xl overflow-hidden border border-border bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl transition-all duration-500 ease-out shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_24px_-10px_rgba(15,23,42,0.15)] group-hover:shadow-[0_1px_2px_rgba(15,23,42,0.06),0_32px_48px_-16px_rgba(15,23,42,0.3)] group-hover:-translate-y-1.5">
                  {/* Gradient border glow on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-inset ring-primary/0 group-hover:ring-primary/30" />

                  {/* Image */}
                  <div className="relative h-72 overflow-hidden bg-linear-to-br from-primary/20 to-accent/20">
                    {doctor.image ? (
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">
                          <div className="w-24 h-24 bg-primary/50 rounded-full" />
                        </div>
                      </div>
                    )}

                    {/* Base gradient for legibility */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Index tag, consistent with site-wide monospace numbering */}
                    <span className="absolute top-4 right-4 font-mono text-xs tracking-wider text-white/80 bg-black/20 backdrop-blur-md rounded-full px-2.5 py-1 border border-white/10">
                      — {String(doctor.id).padStart(2, "0")}
                    </span>

                    {/* Specialty chip */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 text-white text-xs font-semibold">
                      <SpecialtyIcon className="w-3.5 h-3.5" />
                      {doctor.specialty}
                    </div>

                    {/* Name over image */}
                    <div className="absolute bottom-0 inset-x-0 p-5">
                      <h3 className="text-xl font-bold text-white drop-shadow-sm">
                        {doctor.name}
                      </h3>
                    </div>

                    {/* Contact panel, slides up on hover */}
                    <motion.div
                      variants={contactVariants}
                      className="absolute bottom-0 inset-x-0 bg-slate-900/80 backdrop-blur-xl border-t border-white/10 px-5 py-4 flex items-center justify-between"
                    >
                      <a
                        href={`tel:${doctor.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 text-sm text-white/90 hover:text-accent transition-colors"
                      >
                        <FiPhone className="w-4 h-4" />
                        {doctor.phone}
                      </a>
                      <motion.div
                        variants={socialListVariants}
                        className="flex gap-2"
                      >
                        {[FaFacebookF, FaTwitter, FaLinkedinIn].map(
                          (Icon, i) => (
                            <motion.button
                              key={i}
                              variants={socialItemVariants}
                              className="w-8 h-8 bg-white/10 hover:bg-accent hover:text-white rounded-lg flex items-center justify-center text-white/80 transition-colors"
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </motion.button>
                          ),
                        )}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <PulseLine />

                    <div className="space-y-2 mt-2">
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FiClock className="w-4 h-4 text-accent" />
                        <span className="font-semibold text-foreground">
                          {doctor.experience}
                        </span>
                        <span>experience</span>
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <FiAward className="w-4 h-4 text-accent" />
                        {doctor.qualification}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
