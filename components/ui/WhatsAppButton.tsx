"use client";

import { getWhatsAppUrl } from "@/lib/whatsapp";

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
        isFull ? "px-7 py-3.5 text-base" : "px-4 py-2",
        className,
      ].join(" ")}
    >
      <span>{label}</span>
    </a>
  );
}