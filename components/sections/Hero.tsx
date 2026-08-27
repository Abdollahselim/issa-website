"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import HeroMetrics from "@/components/sections/HeroMetrics";
import HeroAbout from "@/components/layout/HeroAbout";

export default function Hero() {
  const { language, t } = useLanguage();

  const isArabic = language === "ar";

  return (
    <section id="hero"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative min-h-[100svh] w-full overflow-hidden pt-[58px]"
    >
      {/* =========================================================
          PROFILE
      ========================================================= */}
      <div
        className={[
          "pointer-events-none absolute z-10 flex justify-center",
          "inset-x-0",

          // Desktop position
          isArabic
            ? "lg:left-0 lg:right-auto"
            : "lg:left-auto lg:right-0",

          "lg:h-[calc(100svh-58px)]",
          "lg:w-[55%]",
        ].join(" ")}
      >
        <div
          className="
            relative
            h-[88svh]
            w-[145vw]
            max-w-none
            animate-fade-scale

            lg:h-full
            lg:w-[115%]
          "
        >
          <Image
            src="/profile.webp"
            alt="عيسى سليم"
            fill
            priority
            sizes="(max-width: 1023px) 145vw, 60vw"
            className="
              object-cover
              object-center

              lg:object-contain
              lg:object-bottom
            "
          />
        </div>
      </div>

      {/* =========================================================
          EXPERIENCE TITLE
      ========================================================= */}
      <div
        className={[
          "absolute inset-x-0 z-[9] px-4",
          isArabic ? "top-[20%]" : "top-[33%]",

          "lg:inset-x-auto",
          "lg:w-[38%]",
          "lg:px-0",

          isArabic
            ? "lg:right-[7%] lg:left-auto lg:top-[18%]"
            : "lg:left-[7%] lg:right-auto lg:top-[17%]",
        ].join(" ")}
      >
        <h2
          className={[
            "animate-fade-up font-black leading-[0.85] text-white",
            "[animation-delay:120ms]",

            // Mobile + Tablet — unchanged
            isArabic
              ? "text-right text-[18vw] tracking-[-0.04em]"
              : "text-left text-[15.6vw] tracking-[-0.035em]",

            // Desktop
            "lg:text-[clamp(3.2rem,5vw,4.8rem)]",
            "lg:leading-[0.95]",
            isArabic ? "lg:text-right" : "lg:text-left",
          ].join(" ")}
        >
          {t.hero.experienceLabel}
        </h2>
      </div>

      {/* =========================================================
          EXPERIENCE VALUE
      ========================================================= */}
      <div
        className={[
          "absolute inset-x-0 z-[9] px-4",
          isArabic ? "top-[33%]" : "top-[41%]",

          "lg:inset-x-auto",
          "lg:w-[38%]",
          "lg:px-0",

          isArabic
            ? "lg:right-[7%] lg:left-auto lg:top-[27%]"
            : "lg:left-[7%] lg:right-auto lg:top-[27%]",
        ].join(" ")}
      >
        <h2
          className={[
            "animate-fade-up whitespace-nowrap font-black leading-[0.95] text-white",
            "[animation-delay:160ms]",

            // Mobile + Tablet — unchanged
            isArabic
              ? "text-right text-[16.5vw] tracking-[-0.08em]"
              : "text-right text-[9.5vw] tracking-[-0.08em]",

            // Desktop
            "lg:text-[clamp(3rem,4.6vw,4.5rem)]",
            "lg:leading-[0.95]",
            "lg:tracking-[-0.035em]",
            isArabic ? "lg:text-right" : "lg:text-left",
          ].join(" ")}
        >
          {t.hero.experienceValue}
        </h2>
      </div>

      {/* =========================================================
          HERO ABOUT
      ========================================================= */}
      <HeroAbout />

      {/* =========================================================
          HERO METRICS

          Desktop only.
      ========================================================= */}
      <div
        className={[
          "hidden",
          "lg:absolute",
          "lg:z-30",
          "lg:block",
          "lg:w-[28%]",

          isArabic
            ? "lg:right-[8%] lg:left-auto lg:top-[63%]"
            : "lg:left-[8%] lg:right-auto lg:top-[65%]",
        ].join(" ")}
      >
        <HeroMetrics />
      </div>

      {/* =========================================================
          BOTTOM BLACK GRADIENT

          Mobile + Tablet → unchanged
          Desktop → same
      ========================================================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[45%]
          bg-gradient-to-b
          from-black/0
          via-black/90
          to-black

          lg:h-[35%]
        "
      />

      {/* =========================================================
          GREETING

          Mobile + Tablet → unchanged
          Desktop → centered
      ========================================================= */}
      <div
        className="
          absolute
          inset-x-0
          bottom-10
          z-30
          flex
          min-h-[25%]
          items-end
          justify-center
          px-4
          pb-[3vh]

          lg:min-h-0
          lg:pb-[2.5vh]
        "
      >
        <h1
          className="
            animate-fade-up
            text-center
            text-[22vw]
            font-black
            leading-[0.78]
            tracking-[-0.055em]
            text-white
            [animation-delay:220ms]

            lg:text-[clamp(4rem,7vw,7rem)]
          "
        >
          {t.hero.greeting}
        </h1>
      </div>
    </section>
  );
}