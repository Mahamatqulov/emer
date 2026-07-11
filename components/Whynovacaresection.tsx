"use client";

import { WhyNovaCare } from "@/components/Whynovacare";

export function WhyNovaCareSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return <WhyNovaCare onBook={scrollToContact} />;
}
