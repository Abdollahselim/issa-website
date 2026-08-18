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

  const bullets = language === "ar" ? service.bulletsAr : service.bulletsEn;
  const closing = language === "ar" ? service.closingAr : service.closingEn;

  return (
    <article
      className="
        flex
        h-[402px]
        w-full
        flex-col
        overflow-hidden
        rounded-[22px]
        border
        border-white/25
        bg-white/[0.20]
        p-4
        text-white
        shadow-[0_18px_45px_rgba(0,0,0,0.22)]
        backdrop-blur-[10px]

        sm:h-[500px]
        sm:rounded-[26px]
        sm:p-5

        lg:h-[520px]
        lg:p-6
      "
    >
      {/* Titles — always both languages */}
      <div className="shrink-0 text-center">
        <p
          dir="ltr"
          className="
            text-[19px]
            font-extrabold
            leading-tight
            text-accent-orange

            sm:text-[21px]
            lg:text-[22px]
          "
        >
          {service.titleEn}
        </p>

        <h3
          dir="rtl"
          className="
            mt-1
            line-clamp-2
            text-[18px]
            font-extrabold
            leading-[1.25]
            text-white

            sm:text-[20px]
            lg:text-[21px]
          "
        >
          {service.titleAr}
        </h3>
      </div>

      {/* Service image */}
      <div
        className="
          relative
          mx-auto
          mt-3
          h-[118px]
          w-full
          shrink-0

          sm:mt-4
          sm:h-[160px]

          lg:h-[175px]
        "
      >
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
      <div
        dir={language === "ar" ? "rtl" : "ltr"}
        className="
          mt-2
          flex
          min-h-0
          flex-1
          flex-col
          overflow-hidden
          rounded-[4px]
          border
          border-white/20
          bg-white/[0.18]
          px-3
          py-2.5

          sm:mt-3
          sm:px-4
          sm:py-3
        "
      >
        <ul
          className="
            flex
            min-h-0
            flex-1
            flex-col
            justify-center
            gap-1.5
            overflow-hidden
          "
        >
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="
                text-center
                text-[8.5px]
                font-medium
                leading-[1.45]
                text-black/75

                sm:text-[11px]
                lg:text-[12px]
              "
            >
              • {bullet}
            </li>
          ))}
        </ul>

        {closing && (
          <p
            className="
              mt-1.5
              shrink-0
              border-t
              border-black/10
              pt-1.5
              text-center
              text-[8px]
              font-semibold
              leading-[1.35]
              text-black/80

              sm:text-[10px]
              lg:text-[11px]
            "
          >
            {closing}
          </p>
        )}
      </div>

      {/* CTA */}
      <div className="flex shrink-0 justify-center pt-2.5 sm:pt-4">
        <WhatsAppButton
          label={t.services.ctaLabel}
          variant="full"
          className="
            rounded-[9px]
            border
            border-black/20
            bg-white
            px-5
            py-2
            text-[11px]
            font-extrabold
            text-black
            shadow-[0_4px_10px_rgba(0,0,0,0.25)]

            sm:px-6
            sm:py-2.5
            sm:text-sm
          "
        />
      </div>
    </article>
  );
}