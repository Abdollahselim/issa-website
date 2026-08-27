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
      className="relative bg-black px-5 pb-8 pt-10 sm:px-10 sm:py-20"
    >
      <div
        className={[
          "mx-auto w-full max-w-[560px]",
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
            sm:text-3xl
            sm:leading-relaxed
          "
        >
          {t.about.intro}
        </p>

        {/* Social */}
        <div className="mt-[-1.8rem] flex animate-fade-up items-center justify-end">
          <SocialLinks iconClassName="h-[22px] w-[22px]" />
        </div>

        {/* CTAs */}
        <div className="mt-10 flex items-center justify-center gap-5">
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