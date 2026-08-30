"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

interface Treatment {
  icon: string;
  tone: string;
  placement: string;
}

const treatments: Treatment[] = [
  { icon: "/icons/medical-centers.svg", tone: "orange", placement: "lg:col-start-1 lg:row-start-1" },
  { icon: "/icons/cupping.svg", tone: "cyan", placement: "lg:col-start-2 lg:row-start-1" },
  { icon: "/icons/optics-lenses.svg", tone: "coral", placement: "lg:col-start-1 lg:row-start-2" },
  { icon: "/icons/law-firms.svg", tone: "gold", placement: "lg:col-start-2 lg:row-start-2" },
  { icon: "/icons/professional-b2b-services.svg", tone: "violet", placement: "lg:col-start-2 lg:row-start-3" },
  { icon: "/icons/beauty-skincare.svg", tone: "green", placement: "lg:col-start-3 lg:row-start-1" },
  { icon: "/icons/e-commerce.svg", tone: "stone", placement: "lg:col-start-3 lg:row-start-2" },
];

const toneClasses: Record<string, { text: string; border: string }> = {
  orange: { text: "text-[#f0b794]", border: "border-[#f8731e]" },
  cyan: { text: "text-[#8ad4e8]", border: "border-[#5ce7ff]" },
  stone: { text: "text-[#e0d7cc]", border: "border-[#b8b1a8]" },
  coral: { text: "text-[#f09b80]", border: "border-[#f9728c]" },
  gold: { text: "text-[#f0d47a]", border: "border-[#ffde59]" },
  violet: { text: "text-[#d49cf0]", border: "border-[#a76dcc]" },
  green: { text: "text-[#8fd4a0]", border: "border-[#63ad75]" },
};

export default function Industries() {
  const { t, industries, language } = useLanguage();
  const labels = industries.map((industry) => (language === "en" ? industry.en : industry.ar));
  const isRTL = language === "ar";

  return (
    <section
      id="industries"
      className="relative isolate overflow-hidden px-4 py-2 sm:px-10 sm:py-5 lg:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_80%,rgba(139,104,47,0.2),transparent_35%),radial-gradient(ellipse_at_25%_50%,rgba(16,91,102,0.15),transparent_38%),linear-gradient(180deg,rgba(0,0,0,10),rgba(4,13,18,0),rgba(0,0,0,0))]" />

      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto mb-10 max-w-4xl text-center text-balance text-[clamp(2.50rem,5.25vw,45rem)] font-bold tracking-[-0.02em] text-[#e7e9e7] drop-shadow-[0_3px_14px_rgba(255,255,255,0.18)] sm:mb-14">
            {t.about.industriesHeading}
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
          {treatments.map(({ icon, tone, placement }, index) => {
            const toneClass = toneClasses[tone];
            const label = labels[index] ?? "";

            return (
              <article
                key={label || index}
                className={[
                  "group flex min-h-16 items-center justify-between gap-4 rounded-2xl",
                  "border border-r-2 border-t-2 border-b-2",
                  isRTL ? "border-r-[10px]" : "border-l-[10px]",
                  "px-5 py-4 text-lg font-medium leading-tight",
                  "shadow-[inset_0_1px_rgba(255,255,255,0.08),0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_rgba(255,255,255,0.12),0_12px_28px_rgba(0,0,0,0.4)]",
                  "sm:min-h-18 sm:px-7 sm:text-xl lg:px-7",
                  toneClass.text,
                  toneClass.border,
                  placement,
                  isRTL ? "flex-row-reverse" : "",
                ].join(" ")}
              >
                <span className="max-w-[12rem] text-pretty">
                  {label}
                </span>

                <Image
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={48}
                  className={[
                    "h-10 w-10 shrink-0 object-contain opacity-80 transition-all duration-300",
                    "group-hover:scale-110 group-hover:opacity-100",
                    "sm:h-12 sm:w-12",
                    isRTL ? "order-first" : "",
                  ].join(" ")}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}