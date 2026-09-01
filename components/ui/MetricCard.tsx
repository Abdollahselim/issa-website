"use client";

import { useLanguage } from "@/lib/language-context";

interface MetricCardProps {
  label: string;
  value: string;
}

export default function MetricCard({ label, value }: MetricCardProps) {
  const { language } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="flex flex-col items-center rounded-2xl border border-border-light bg-white/5 px-4 py-3 text-center">
      <span
        className={[
          "font-black text-accent-orange",
          isArabic
            ? "text-[clamp(1.5rem,2.5vw,1.875rem)]"
            : "text-[clamp(1.25rem,2vw,1.5rem)]",
        ].join(" ")}
      >
        {value}
      </span>
      <span
        className={[
          "mt-1 font-semibold uppercase tracking-wide text-text-muted",
          isArabic
            ? "text-[clamp(0.8125rem,1.2vw,0.9375rem)]"
            : "text-[clamp(0.6875rem,1vw,0.75rem)]",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}