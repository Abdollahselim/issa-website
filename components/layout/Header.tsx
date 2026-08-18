"use client";

import { useLanguage } from "@/lib/language-context";
import SocialLinks from "@/components/ui/SocialLinks";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  const isArabic = language === "ar";

  return (
    <header
      dir={language === "ar" ? "rtl" : "ltr"}
      className="fixed inset-x-0 top-0 z-50 border-b border-white"
    >
      <div className="mx-auto flex h-[60px] sm:h-[68px] w-full max-w-[1280px] items-center justify-between px-3 sm:px-5 lg:px-6 gap-2 sm:gap-3">
        {/* WhatsApp CTA */}
        <WhatsAppButton
          label={t.header.ctaWhatsApp}
          variant="compact"
          className={[
            // المقاسات الأساسية
            "h-[36px] sm:h-[40px]",
            "min-w-[100px] sm:min-w-[120px]",
            "px-2.5 sm:px-4 py-1 sm:py-1.5",
            
            // حجم الخط متجاوب - أكبر للعربي
            isArabic 
              ? "text-[18px] sm:text-[20px] lg:text-[23px]"
              : "text-[16px] sm:text-[18px] lg:text-[21px]",
            
            // التصميم
            "border border-white",
            "bg-gradient-to-r from-[#fea876a6] via-[#e78d59] to-[#be3838]",
            "font-bold text-white",
            "shadow-[0_4px_18px_rgba(255,255,255,0.18)]",
            "backdrop-blur-md",
            "hover:scale-100",
            
            // منع اختصار النص
            "whitespace-nowrap",
            "justify-center",
          ].join(" ")}
        />

        {/* Social links - ظاهرة دائماً وجانب بعض */}
        <SocialLinks
          className={[
            "flex items-center justify-center gap-3 sm:gap-4 lg:gap-5",
            "flex-shrink-0",
          ].join(" ")}
          iconClassName="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px] lg:h-[28px] lg:w-[28px]"
        />

        {/* Language switcher */}
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={
            isArabic
              ? "Switch to English"
              : "التبديل إلى العربية"
          }
          className={[
            "flex items-center overflow-hidden rounded-full",

            "font-english",
            
            // مقاسات أكبر
            "h-[32px] w-[70px] sm:h-[38px] sm:w-[80px] lg:h-[42px] lg:w-[88px]",
            "text-[16px] sm:text-[19px] lg:text-[21px]",
            
            // التصميم
            "border border-black",
            "bg-black/85",
            "'p-[1px]",
            "font-bold leading-none",
            "flex-shrink-0",
            
            // تأثير hover
            "hover:bg-black/95 transition-colors duration-200",
          ].join(" ")}
        >
          <span
            className={[
              "flex h-full flex-1 items-center justify-center rounded-full",
              "transition-all duration-200 ease-out",
              "font-english",
              language === "ar"
                ? "bg-white/85 text-black"
                : "text-white",
            ].join(" ")}
          >
            Ar
          </span>

          <span
            className={[
              "flex h-full flex-1 items-center justify-center rounded-full",
              "transition-all duration-200 ease-out",
              "font-english",
              language === "en"
                ? "bg-white/85 text-black"
                : "text-white",
            ].join(" ")}
          >
            En
          </span>
        </button>
      </div>
    </header>
  );
}