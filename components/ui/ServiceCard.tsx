"use client";

import Image from "next/image";
import { Service } from "@/data/types";
import { useLanguage } from "@/lib/language-context";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { language, t } = useLanguage();

  const isArabic = language === "ar";
  const bullets = isArabic ? service.bulletsAr : service.bulletsEn;
  const closing = isArabic ? service.closingAr : service.closingEn;

  return (
    <article
      dir={isArabic ? "rtl" : "ltr"}
      className="
        flex
        h-full
        min-h-[380px]
        w-full
        flex-col
        overflow-hidden
        rounded-[18px]
        border
        border-white/25
        bg-black/30
        p-4
        text-white
        shadow-[0_18px_45px_rgba(0,0,0,0.22)]
        backdrop-blur-[10px]

        sm:min-h-[440px]
        sm:rounded-[18px]
        sm:p-5

        lg:min-h-[480px]
        lg:p-6
      "
    >
      {/* Titles */}
      <div className="shrink-0 text-center">
        <p
          dir="ltr"
          className="
            text-[clamp(1.25rem,2.25vw,1.575rem)]
            font-extrabold
            leading-tight
            text-[#000000]
          "
        >
          {service.titleEn}
        </p>

        <h3
          dir="rtl"
          className={[
            "mt-1.5 font-extrabold leading-[1.3] text-white",
            isArabic
              ? "text-[clamp(1.25rem,2.7vw,2.25rem)]"
              : "text-[clamp(1rem,2.25vw,2rem)]",
          ].join(" ")}
        >
          {service.titleAr}
        </h3>
      </div>

      {/* Service image */}
      <div className="relative mx-auto mt-4 h-[clamp(100px,14vw,150px)] w-full shrink-0">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="
            (max-width: 639px) 240px,
            (max-width: 1023px) 280px,
            300px
          "
          className="object-contain"
          priority={service.id === "performance-marketing"}
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex min-h-0 flex-1 flex-col rounded-xl border border-white/20 bg-black/20 px-3.5 py-3 sm:px-4 sm:py-3.5">
        <ul className="flex min-h-0 flex-1 flex-col justify-center gap-2 text-center">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className={[
                "font-medium leading-[2] text-white",
                isArabic
                  ? "text-[clamp(1rem,1.25vw,1rem)]"
                  : "text-[clamp(0.850rem,1vw,0.850rem)]",
              ].join(" ")}
            >
              • {bullet}
            </li>
          ))}
        </ul>

        
      </div>

      {/* CTA */}
      <div className="flex shrink-0 justify-center pt-6">
        <WhatsAppButton
          label={t.services.ctaLabel}
          variant="full"
          className={[
            "rounded-full border border-white bg-gradient-to-r from-white/30 via-white/20 to-[#ef5a35]/90 font-extrabold text-black shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.03] active:scale-95",
            isArabic
              ? "px-6 py-2 text-[clamp(1rem,1.75vw,1rem)]"
              : "px-6 py-2 text-[clamp(1rem,1.74vw,1rem)]",
          ].join(" ")}
        />
      </div>
    </article>
  );
}