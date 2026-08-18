"use client";

import { useLanguage } from "@/lib/language-context";
import HeroMetrics from "@/components/sections/HeroMetrics";

const pillStyles = [
  "border-accent-orange/30 bg-accent-orange/15 text-accent-orange",
  "border-sky-400/30 bg-sky-400/15 text-sky-300",
  "border-red-400/30 bg-red-400/15 text-red-300",
  "border-yellow-400/30 bg-yellow-400/15 text-yellow-300",
  "border-purple-400/30 bg-purple-400/15 text-purple-300",
  "border-green-400/30 bg-green-400/15 text-green-300",
  "border-white/20 bg-white/10 text-gray-300",
];

export default function Industries() {
  const { t, industries, language } = useLanguage();

  return (
    <section className="w-full">
      {/* =========================================================
          MOBILE
      ========================================================= */}
      <div className="mx-5 rounded-[24px] bg-[#171717d4] px-3.5 py-8 sm:hidden">
        <h3 className="mb-4 text-center text-[40px] font-extrabold leading-[1.2] text-white">
          {t.about.industriesHeading}
        </h3>

        <div className="flex flex-col items-center gap-2">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {industries.slice(0, 2).map((industry, i) => (
              <span
                key={industry.en}
                className={[
                  "whitespace-nowrap rounded-lg border px-2.5 py-2",
                  "text-[14px] font-medium leading-none",
                  pillStyles[i],
                ].join(" ")}
              >
                {language === "ar" ? industry.ar : industry.en}
              </span>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {industries.slice(2, 5).map((industry, i) => (
              <span
                key={industry.en}
                className={[
                  "whitespace-nowrap rounded-lg border px-2.5 py-2",
                  "text-[14px] font-medium leading-none",
                  pillStyles[i + 2],
                ].join(" ")}
              >
                {language === "ar" ? industry.ar : industry.en}
              </span>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {industries.slice(5, 7).map((industry, i) => (
              <span
                key={industry.en}
                className={[
                  "whitespace-nowrap rounded-lg border px-2.5 py-2",
                  "text-[14px] font-medium leading-none",
                  pillStyles[i + 5],
                ].join(" ")}
              >
                {language === "ar" ? industry.ar : industry.en}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE HERO METRICS
          Appears only below Industries on mobile.
      ========================================================= */}
      <div className="mt-8 px-5 sm:hidden">
        <HeroMetrics />
      </div>

      {/* =========================================================
          TABLET / DESKTOP
      ========================================================= */}
      <div
        className="
          relative
          hidden
          overflow-hidden
          sm:block

          bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.94)_28%,rgba(0,0,0,0.72)_58%,rgba(0,0,0,0)_100%)]

          px-6
          pb-20
          pt-14

          md:px-10
          md:pb-24
          md:pt-16

          lg:px-16
          lg:pb-28
          lg:pt-20
        "
      >
        <div className="mx-auto w-full max-w-[1100px]">
          {/* Heading */}
          <h3
            className="
              mb-8
              text-center
              text-[clamp(3rem,5vw,4.5rem)]
              font-extrabold
              leading-[1.1]
              tracking-[-0.035em]
              text-white

              md:mb-12
              lg:mb-14
            "
          >
            {t.about.industriesHeading}
          </h3>

          {/* Pills */}
          <div className="flex flex-col items-center gap-5">
            {/* Row 1 */}
            <div className="flex min-h-12 flex-wrap items-center justify-center gap-3.5">
              {industries.slice(0, 2).map((industry, i) => (
                <span
                  key={industry.en}
                  className={[
                    "animate-fade-up",
                    "whitespace-nowrap",
                    "rounded-xl",
                    "border",
                    "px-6 py-3",
                    "text-sm font-semibold",
                    "leading-none",
                    "shadow-[0_6px_18px_rgba(0,0,0,0.18)]",
                    "backdrop-blur-sm",
                    "md:px-7 md:py-3.5",
                    "md:text-lg",
                    pillStyles[i],
                  ].join(" ")}
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {language === "ar" ? industry.ar : industry.en}
                </span>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex min-h-12 flex-wrap items-center justify-center gap-3.5">
              {industries.slice(2, 5).map((industry, i) => (
                <span
                  key={industry.en}
                  className={[
                    "animate-fade-up",
                    "whitespace-nowrap",
                    "rounded-xl",
                    "border",
                    "px-6 py-3",
                    "text-sm font-semibold",
                    "leading-none",
                    "shadow-[0_6px_18px_rgba(0,0,0,0.18)]",
                    "backdrop-blur-sm",
                    "md:px-7 md:py-3.5",
                    "md:text-lg",
                    pillStyles[i + 2],
                  ].join(" ")}
                  style={{ animationDelay: `${(i + 2) * 70}ms` }}
                >
                  {language === "ar" ? industry.ar : industry.en}
                </span>
              ))}
            </div>

            {/* Row 3 */}
            <div className="flex min-h-12 flex-wrap items-center justify-center gap-3.5">
              {industries.slice(5, 7).map((industry, i) => (
                <span
                  key={industry.en}
                  className={[
                    "animate-fade-up",
                    "whitespace-nowrap",
                    "rounded-xl",
                    "border",
                    "px-6 py-3",
                    "text-sm font-semibold",
                    "leading-none",
                    "shadow-[0_6px_18px_rgba(0,0,0,0.18)]",
                    "backdrop-blur-sm",
                    "md:px-7 md:py-3.5",
                    "md:text-lg",
                    pillStyles[i + 5],
                  ].join(" ")}
                  style={{ animationDelay: `${(i + 5) * 70}ms` }}
                >
                  {language === "ar" ? industry.ar : industry.en}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}