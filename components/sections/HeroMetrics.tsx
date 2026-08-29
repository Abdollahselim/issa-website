"use client";

import {
  CalendarDays,
  ChartNoAxesCombined,
  FileCheck2,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";

interface HeroMetric {
  label: string;
  value: string;
  icon: typeof CalendarDays;
}

export default function HeroMetrics() {
  const { language } = useLanguage();

  const isArabic = language === "ar";

  const heroMetrics: HeroMetric[] = [
    {
      label: isArabic ? "خبرة" : "Experience",
      value: isArabic ? "6 سنوات" : "6 Years",
      icon: CalendarDays,
    },
    {
      label: isArabic ? "نتائج" : "Results",
      value: isArabic ? "أول 30 يوم" : "First 30 Days",
      icon: ChartNoAxesCombined,
    },
    {
      label: isArabic ? "بدون عقود" : "No Contracts",
      value: isArabic ? "طويلة الأمد" : "Long-Term",
      icon: FileCheck2,
    },
  ];

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="grid grid-cols-3 items-start gap-1 sm:gap-4 md:gap-6 text-center w-full max-w-xl mx-auto px-6 sm:px-0"
    >
      {heroMetrics.map(({ label, value, icon: Icon }) => (
        <div
          key={`${label}-${value}`}
          className="flex min-w-0 flex-col items-center text-white"
        >
          {/* دائرة الأيقونة متجاوبة */}
          <div
            className="
              mb-1.5 sm:mb-2.5
              flex 
              h-[clamp(2.5rem,6vw,3.25rem)] 
              w-[clamp(2.5rem,6vw,3.25rem)] 
              items-center justify-center
              rounded-full
              border border-white
              bg-white/[0.12]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.18)]
              backdrop-blur-md
              backdrop-saturate-140
              shrink-0
            "
          >
            {/* حجم الأيقونة متجاوب */}
            <Icon
              className="
                h-[clamp(1.25rem,3.2vw,1.75rem)] 
                w-[clamp(1.25rem,3.2vw,1.75rem)] 
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]
              "
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>

          {/* العنوان الرئيسي: حجم متجاوب ومتناسب مع العربي والإنجليزي */}
          <span 
            className="
              text-[clamp(0.8125rem,2vw,1.0625rem)] 
              font-bold 
              leading-snug 
              tracking-tight 
              w-full 
              truncate sm:whitespace-normal
            "
          >
            {label}
          </span>

          {/* النص الفرعي: حجم متجاوب يدعم الأسطر المزدوجة بمرونة */}
          <span 
            className="
              mt-0.5 
              text-[clamp(0.7rem,1.75vw,0.875rem)] 
              font-medium 
              leading-tight 
              text-white/90 
              w-full 
              break-words
            "
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}