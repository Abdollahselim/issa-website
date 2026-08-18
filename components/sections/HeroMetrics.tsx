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
      className="grid grid-cols-3 items-start gap-3 text-center"
    >
      {heroMetrics.map(({ label, value, icon: Icon }) => (
        <div
          key={`${label}-${value}`}
          className="flex min-w-0 flex-col items-center text-white"
        >
          <div
            className="
              mb-2
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-white/40
              bg-white/[0.12]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_2px_rgba(0,0,0,0.2),0_8px_24px_rgba(0,0,0,0.18)]
              backdrop-blur-md
              backdrop-saturate-150
            "
          >
            <Icon
              className="h-[30px] w-[30px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>

          <span className="text-[16px] font-bold leading-tight">
            {label}
          </span>

          <span className="mt-0.5 text-[14px] font-medium leading-tight text-white/90">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}