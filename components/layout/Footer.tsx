"use client";

import { useLanguage } from "@/lib/language-context";
import SocialLinks from "@/components/ui/SocialLinks";
import { SITE_NAME } from "@/lib/config";

export default function Footer() {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  const year = new Date().getFullYear();

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        pt-[clamp(5rem,12vw,9rem)]
        pb-[clamp(3rem,8vw,6rem)]
      "
    >
      {/* ISSA SELIM — Decorative background text */}
      <div
        aria-hidden="true"
        className="
          font-decorative
          pointer-events-none
          absolute
          inset-x-0
          top-[1px]
          z-0
          select-none
          text-center
          text-[20vw]
          font-normal
          uppercase
          leading-none
          tracking-tight
          whitespace-nowrap
          text-[#f9603d]
        "
      >
        ISSA SELIM
      </div>

      {/* Content */}
      <div className="mt-10 relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-[clamp(1.7rem,4vw,3rem)] lg:flex-row lg:items-end lg:justify-between lg:gap-6 lg:pt-[clamp(3.25rem,6vw,5rem)]">
        {/* Social Links */}
        <SocialLinks />

        {/* Copyright */}
        <p
          className={[
            "text-center lg:text-start",
            isArabic
              ? "text-[clamp(0.875rem,2vw,1.125rem)]"
              : "text-[clamp(0.75rem,1.5vw,1rem)]",
            "text-text-muted",
          ].join(" ")}
        >
          © {year} {SITE_NAME} — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}