// Single source of truth for the WhatsApp number.
// Real number is via NEXT_PUBLIC_WHATSAPP_NUMBER in Vercel env vars.
// This fallback matches the confirmed real number, kept only as a safety net.

const FALLBACK_NUMBER = "966544070259";

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || FALLBACK_NUMBER;
}

export function getWhatsAppUrl(message?: string): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
}
