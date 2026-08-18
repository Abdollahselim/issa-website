// Single source of truth for the WhatsApp number.
// Replace NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local with the real number
// (international format, no "+", e.g. 966501234567).
const FALLBACK_NUMBER = "966544070259"; // placeholder — replace with real number

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || FALLBACK_NUMBER;
}

export function getWhatsAppUrl(message?: string): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
}
