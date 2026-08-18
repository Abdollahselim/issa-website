"use client";

import { useLanguage } from "@/lib/language-context";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function HeroAbout() {
  const { language } = useLanguage();

  const isArabic = language === "ar";

  return (
    <div
      className={[
        "hidden md:grid",
        "md:min-h-[100svh]",
        "md:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]",
        "md:items-stretch",
        isArabic
          ? "md:[&>section:first-child]:order-1 md:[&>section:last-child]:order-2"
          : "md:[&>section:first-child]:order-2 md:[&>section:last-child]:order-1",
      ].join(" ")}
    >
      <Hero />
      <About />
    </div>
  );
}