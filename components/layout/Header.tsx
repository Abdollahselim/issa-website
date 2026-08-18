"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import SocialLinks from "@/components/ui/SocialLinks";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  const isArabic = language === "ar";

  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const hero = document.getElementById("hero");

  if (!hero) return;

  const handleScroll = () => {
    setIsScrolled(window.scrollY >= hero.offsetHeight);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header
      dir={isArabic ? "rtl" : "ltr"}
      className={[
  "fixed inset-x-0 top-0 z-50 border-b border-white",
  "transition-[background-color,backdrop-filter] duration-300 ease-out",
  isScrolled
    ? "bg-white/[0.06] backdrop-blur-md"
    : "bg-transparent backdrop-blur-0",
].join(" ")}
    >
      <div
        className={[
          "mx-auto flex w-full max-w-[1280px] items-center justify-between",
          "h-[clamp(3.75rem,5.3vw,4.25rem)]",
          "gap-[clamp(0.5rem,1vw,0.75rem)]",
          "px-[clamp(0.75rem,2vw,1.5rem)]",
        ].join(" ")}
      >
        <WhatsAppButton
          label={t.header.ctaWhatsApp}
          variant="compact"
          className={[
            "h-[clamp(2.25rem,3.2vw,2.5rem)]",
            "min-w-[clamp(6.25rem,10vw,7.5rem)]",
            "px-[clamp(0.625rem,1.25vw,1rem)]",
            "py-[clamp(0.25rem,0.5vw,0.375rem)]",
            isArabic
              ? "text-[clamp(1.125rem,1.8vw,1.4375rem)]"
              : "text-[clamp(1rem,1.65vw,1.3125rem)]",
            "border border-white",
            "bg-gradient-to-r from-[#fea876a6] via-[#e78d59] to-[#be3838]",
            "font-bold text-white",
            "shadow-[0_4px_18px_rgba(255,255,255,0.18)]",
            "backdrop-blur-md",
            "whitespace-nowrap",
            "justify-center",
          ].join(" ")}
        />

        <SocialLinks
          className={[
            "flex shrink-0 items-center justify-center",
            "gap-[clamp(0.75rem,1.6vw,1.25rem)]",
          ].join(" ")}
          iconClassName="h-[clamp(1.25rem,2.2vw,1.75rem)] w-[clamp(1.25rem,2.2vw,1.75rem)]"
        />

        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
          className={[
            "flex shrink-0 items-center overflow-hidden rounded-full",
            "font-english",
            "h-[clamp(2rem,3.2vw,2.625rem)]",
            "w-[clamp(4.375rem,6.5vw,5.5rem)]",
            "text-[clamp(1rem,1.55vw,1.3125rem)]",
            "border border-black",
            "bg-black/85",
            "p-px",
            "font-bold leading-none",
            "transition-colors duration-200",
            "hover:bg-black/95",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2",
          ].join(" ")}
        >
          <span
            className={[
              "flex h-full flex-1 items-center justify-center rounded-full",
              "font-english",
              "transition-all duration-200 ease-out",
              isArabic ? "bg-white/85 text-black" : "text-white",
            ].join(" ")}
          >
            Ar
          </span>

          <span
            className={[
              "flex h-full flex-1 items-center justify-center rounded-full",
              "font-english",
              "transition-all duration-200 ease-out",
              !isArabic ? "bg-white/85 text-black" : "text-white",
            ].join(" ")}
          >
            En
          </span>
        </button>
      </div>
    </header>
  );
}