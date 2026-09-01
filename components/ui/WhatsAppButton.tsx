"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/language-context";

interface WhatsAppButtonProps {
  label: string;
  message?: string;
  variant?: "compact" | "full";
  className?: string;
}

export default function WhatsAppButton({
  label,
  message,
  variant = "compact",
  className = "",
}: WhatsAppButtonProps) {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const isFull = variant === "full";

  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        "inline-flex items-center justify-center rounded-full",
        "font-semibold transition-transform duration-300",
        "hover:scale-[1.03] active:scale-95",
        "bg-accent-coral text-white",
        "shadow-[0_10px_30px_-10px_rgba(244,100,58,0.7)]",
        isFull
          ? isArabic
            ? "px-8 py-4 text-[clamp(1.125rem,2.5vw,1.5rem)]"
            : "px-7 py-3.5 text-[clamp(1rem,2vw,1.25rem)]"
          : isArabic
            ? "px-5 py-2.5 text-[clamp(0.9375rem,1.8vw,1.125rem)]"
            : "px-4 py-2 text-sm",
        className,
      ].join(" ")}
    >
      <span>{label}</span>
    </a>
  );
}