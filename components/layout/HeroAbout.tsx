"use client";

import { useLanguage } from "@/lib/language-context";

export default function HeroAbout() {
  const { t, language } = useLanguage();

  const isArabic = language === "ar";

  return (
    <div
      className={[
        "hidden",
        "md:absolute",
        "md:top-[37%]",
        "md:z-30",
        "md:block",
        "md:w-[39%]",
        isArabic
          ? "md:right-[7%] md:left-auto"
          : "md:left-[7%] md:right-auto",
      ].join(" ")}
    >
      <div
        className={[
          "flex flex-col",
          "gap-[clamp(0.5rem,0.8vw,1rem)]",
          "text-white",
          isArabic ? "items-end text-right" : "items-start text-left",
        ].join(" ")}
      >
        {/* Intro */}
        <p
          className={[
            "w-full animate-fade-up",
            "text-[clamp(1.5rem,1.5vw,1.75rem)]",
            "font-medium",
            "leading-[1.65]",
            "text-white",
            "[animation-delay:200ms]",
          ].join(" ")}
        >
          {t.hero.intro}
        </p>
      </div>
    </div>
  );
}