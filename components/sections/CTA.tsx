"use client";

import { useLanguage } from "@/lib/language-context";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CTA() {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative px-5 py-24 text-center sm:px-10 sm:py-32"
    >
      {/* Bottom black gradient overlay */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10
          h-[70%]
          bg-gradient-to-b
          from-black/0
          via-black/40
          to-black
        "
      />

      <div className="relative z-20">
        <h2
          className={[
            "animate-fade-up font-black text-text-primary",
            isArabic
              ? "text-[clamp(2.75rem,7vw,5rem)]"
              : "text-[clamp(2.25rem,5.5vw,3.75rem)]",
          ].join(" ")}
        >
          {t.cta.heading}
        </h2>

        <p
          className={[
            "mx-auto mt-4 max-w-lg animate-fade-up text-text-muted [animation-delay:100ms]",
            isArabic
              ? "text-[clamp(1.125rem,2.5vw,1.5rem)]"
              : "text-[clamp(1rem,2vw,1.25rem)]",
          ].join(" ")}
        >
          {t.cta.subheading}
        </p>

        <div className="mt-9 flex animate-fade-up justify-center [animation-delay:180ms]">
          <WhatsAppButton label={t.cta.button} variant="full" />
        </div>
      </div>
    </section>
  );
}