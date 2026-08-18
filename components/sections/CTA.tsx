"use client";

import { useLanguage } from "@/lib/language-context";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="relative px-5 py-24 text-center sm:px-10 sm:py-32">
      <h2 className="animate-fade-up text-4xl font-black text-text-primary sm:text-6xl">
        {t.cta.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-md animate-fade-up text-base text-text-muted sm:text-lg [animation-delay:100ms]">
        {t.cta.subheading}
      </p>
      <div className="mt-9 flex animate-fade-up justify-center [animation-delay:180ms]">
        <WhatsAppButton label={t.cta.button} variant="full" />
      </div>
    </section>
  );
}
