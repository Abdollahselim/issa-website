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

// Color scheme configuration for each treatment card
const toneClasses: Record<string, { text: string; border: string; bg: string }> = {
  orange: { 
    text: "text-[#f0b794]", 
    border: "border-[#f8731e]", 
    bg: "bg-[#f8731e]/15" // Semi-transparent orange background
  },
  cyan: { 
    text: "text-[#8ad4e8]", 
    border: "border-[#5ce7ff]", 
    bg: "bg-[#5ce7ff]/15" // Semi-transparent cyan background
  },
  stone: { 
    text: "text-[#e0d7cc]", 
    border: "border-[#b8b1a8]", 
    bg: "bg-[#b8b1a8]/15" // Semi-transparent stone background
  },
  coral: { 
    text: "text-[#f09b80]", 
    border: "border-[#f9728c]", 
    bg: "bg-[#f9728c]/15" // Semi-transparent coral background
  },
  gold: { 
    text: "text-[#f0d47a]", 
    border: "border-[#ffde59]", 
    bg: "bg-[#ffde59]/15" // Semi-transparent gold background
  },
  violet: { 
    text: "text-[#d49cf0]", 
    border: "border-[#a76dcc]", 
    bg: "bg-[#a76dcc]/15" // Semi-transparent violet background
  },
  green: { 
    text: "text-[#8fd4a0]", 
    border: "border-[#63ad75]", 
    bg: "bg-[#63ad75]/15" // Semi-transparent green background
  },
};

export default function Industries() {
  const { t, industries, language } = useLanguage();
  
  // Map industry labels based on current language (English or Arabic)
  const labels = industries.map((industry) => (language === "en" ? industry.en : industry.ar));
  
  // Check if current language is Arabic for RTL layout
  const isRTL = language === "ar";

  return (
    <section
      id="industries"
      className="relative isolate overflow-hidden px-4 py-2 sm:px-10 sm:py-5 lg:px-8 lg:py-20"
    >
      {/* Background gradient overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_80%,rgba(139,104,47,0.2),transparent_35%),radial-gradient(ellipse_at_25%_50%,rgba(16,91,102,0.15),transparent_38%),linear-gradient(180deg,rgba(0,0,0,10),rgba(4,13,18,0),rgba(0,0,0,0))]" />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <h2 className="mx-auto mb-10 max-w-4xl text-center text-balance text-[clamp(2.5rem,5.25vw,45rem)] font-bold tracking-[-0.02em] text-[#e7e9e7] drop-shadow-[0_3px_14px_rgba(255,255,255,0.18)] sm:mb-14">
          {t.about.industriesHeading}
        </h2>

        {/* Responsive grid for treatment cards */}
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-6">
          {treatments.map(({ icon, tone, placement }, index) => {
            const toneClass = toneClasses[tone];
            const label = labels[index] ?? "";

            return (
              <article
                key={label || index}
                className={[
                  // Base card styles
                  "group flex min-h-16 items-center justify-between gap-4 rounded-2xl",
                  "border border-r-2 border-t-2 border-b-2",
                  // Dynamic border width based on RTL/LTR
                  isRTL ? "border-r-[10px]" : "border-l-[10px]",
                  // Padding and typography
                  "px-5 py-4 text-lg font-medium leading-tight",
                  // Shadow effects with backdrop blur
                  "shadow-[inset_0_1px_rgba(255,255,255,0.08),0_8px_20px_rgba(0,0,0,0.3)] backdrop-blur-md",
                  // Hover animations
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_rgba(255,255,255,0.12),0_12px_28px_rgba(0,0,0,0.4)]",
                  // Responsive sizing
                  "sm:min-h-18 sm:px-7 sm:text-xl lg:px-7",
                  // Color scheme classes
                  toneClass.text,
                  toneClass.border,
                  toneClass.bg,
                  // Grid placement for larger screens
                  placement,
                  // RTL layout support
                  isRTL ? "flex-row-reverse" : "",
                ].join(" ")}
              >
                {/* Label text with responsive alignment */}
                <span className={[
                  "flex-1 min-w-0 text-pretty",
                  "break-words",
                  // Text alignment based on language direction
                  isRTL ? "text-right" : "text-left",
                  // Consistent line height
                  "leading-snug",
                  // Limit text to 2 lines maximum
                  "line-clamp-2",
                  // Minimum height for consistent card heights
                  "min-h-[2.5rem]",
                  // Center text vertically
                  "flex items-center",
                ].join(" ")}>
                  {label}
                </span>

                {/* Treatment icon */}
                <Image
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={48}
                  className={[
                    // Icon base styles
                    "h-10 w-10 shrink-0 object-contain opacity-80 transition-all duration-300",
                    // Hover effects
                    "group-hover:scale-110 group-hover:opacity-100",
                    // Responsive sizing
                    "sm:h-12 sm:w-12",
                    // RTL icon placement
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