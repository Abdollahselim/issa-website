"use client";

import { useLanguage } from "@/lib/language-context";
import SocialLinks from "@/components/ui/SocialLinks";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function About() {
  const { t, language } = useLanguage();

  const isArabic = language === "ar";

  return (
    <section
      id="about"
      className="relative px-5 pb-8 pt-10 sm:px-10 sm:py-20"
    >
      <div
        className={[
          "mx-auto w-full max-w-[390px]",
          "text-white",
          isArabic ? "text-right" : "text-left",
        ].join(" ")}
      >
        {/* Intro */}
        <p
          className="
            animate-fade-up
            text-[clamp(1rem,4.5vw,1.1rem)]
            font-medium
            leading-[2.2]
            text-white
            sm:text-2xl
            sm:leading-relaxed
          "
        >
          {t.about.intro}
        </p>

        {/* About points — desktop/tablet only for now */}
        <ul
          className={[
            "mt-7 hidden flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6 md:flex",
            isArabic ? "items-end" : "items-start",
          ].join(" ")}
        >
          {t.about.points.map((point, index) => (
            <li
              key={point}
              className="
                flex
                animate-fade-up
                items-center
                gap-2
                text-sm
                font-semibold
                text-white/75
                sm:text-base
              "
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ef5a35]"
              />

              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Social */}
        <div
          className={[
            "mt-[-1.8rem] flex animate-fade-up items-center gap-2",
            isArabic ? "justify-end" : "justify-end",
          ].join(" ")}
        >
          <SocialLinks iconClassName="h-[20px] w-[20px]" />
        </div>

        {/* CTAs */}
        <div
          className={[
            "mt-10 flex items-center gap-5",
            isArabic ? "justify-center" : "justify-center",
          ].join(" ")}
        >
          {/* Case Studies */}
          <a
            href="#case-studies"
            className="
              inline-flex
              h-[38px]
              min-w-[140px]
              items-center
              justify-center
              rounded-full
              border
              border-white/100
              bg-white/20
              px-5
              text-[14px]
              font-bold
              text-white
              shadow-[0_6px_20px_rgba(0,0,0,0.18)]
              backdrop-blur-md
              transition-transform
              duration-300
              hover:scale-[1.03]
              active:scale-95
            "
          >
            {isArabic ? "دراسات الحالة" : "Case Studies"}
          </a>

          {/* WhatsApp */}
          <WhatsAppButton
            label={t.about.ctaPrimary}
            variant="compact"
            className="
              h-[38px]
              min-w-[140px]
              justify-center
              border
              border-white/100
              bg-gradient-to-r
              from-white/30
              via-white/20
              to-[#ef5a35]/90
              px-5
              py-1.5
              text-[14px]
              font-bold
              text-white
              shadow-[0_6px_20px_rgba(0,0,0,0.18)]
              backdrop-blur-md
              hover:scale-[1.03]
            "
          />
        </div>
      </div>
    </section>
  );
}