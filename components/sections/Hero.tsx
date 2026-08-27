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
            ? "md:left-0 md:right-auto"
            : "md:left-auto md:right-0",

          "md:h-[calc(100svh-58px)]",
          "md:w-[55%]",
        ].join(" ")}
      >
        <div
          className="
            relative
            h-[88svh]
            w-[145vw]
            max-w-none
            animate-fade-scale

            md:h-full
            md:w-[115%]
          "
        >
          <Image
            src="/profile.webp"
            alt="عيسى سليم"
            fill
            priority
            sizes="(max-width: 767px) 145vw, 60vw"
            className="
              object-cover
              object-center

              md:object-contain
              md:object-bottom
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

          "md:inset-x-auto",
          "md:w-[38%]",
          "md:px-0",

          isArabic
            ? "md:right-[7%] md:left-auto md:top-[18%]"
            : "md:left-[7%] md:right-auto md:top-[17%]",
        ].join(" ")}
      >
        <h2
          className={[
            "animate-fade-up font-black leading-[0.85] text-white",
            "[animation-delay:120ms]",

            // Mobile — unchanged
            isArabic
              ? "text-right text-[18vw] tracking-[-0.04em]"
              : "text-left text-[15.6vw] tracking-[-0.035em]",

            // Desktop
            "md:text-[clamp(3.2rem,5vw,4.8rem)]",
            "md:leading-[0.95]",
            isArabic ? "md:text-right" : "md:text-left",
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

          "md:inset-x-auto",
          "md:w-[38%]",
          "md:px-0",

          isArabic
            ? "md:right-[7%] md:left-auto md:top-[27%]"
            : "md:left-[7%] md:right-auto md:top-[27%]",
        ].join(" ")}
      >
        <h2
          className={[
            "animate-fade-up whitespace-nowrap font-black leading-[0.95] text-white",
            "[animation-delay:160ms]",

            // Mobile — unchanged
            isArabic
              ? "text-right text-[16.5vw] tracking-[-0.08em]"
              : "text-right text-[9.5vw] tracking-[-0.08em]",

            // Desktop
            "md:text-[clamp(3rem,4.6vw,4.5rem)]",
            "md:leading-[0.95]",
            "md:tracking-[-0.035em]",
            isArabic ? "md:text-right" : "md:text-left",
          ].join(" ")}
        >
          {t.hero.experienceValue}
        </h2>
      </div>

      {/* {/* =========================================================
    HERO ABOUT
=========================================================   */}
      <HeroAbout />

      {/* =========================================================
          HERO METRICS

          Desktop only.
      ========================================================= */}
      <div
        className={[
          "hidden",
          "md:absolute",
          "md:z-30",
          "md:block",
          "md:w-[28%]",

          isArabic
            ? "md:right-[8%] md:left-auto md:top-[63%]"
            : "md:left-[8%] md:right-auto md:top-[65%]",
        ].join(" ")}
      >
        <HeroMetrics />
      </div>

      {/* =========================================================
          BOTTOM BLACK GRADIENT

          Mobile → unchanged
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
          h-[40%]
          bg-gradient-to-b
          from-black/0
          via-black/80
          to-black

          md:h-[35%]
        "
      />

      {/* =========================================================
          GREETING

          Mobile → unchanged
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

          md:min-h-0
          md:pb-[2.5vh]
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

            md:text-[clamp(4rem,7vw,7rem)]
          "
        >
          {t.hero.greeting}
        </h1>
      </div>
    </section>
  );
}