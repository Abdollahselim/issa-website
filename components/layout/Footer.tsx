"use client";

import { useLanguage } from "@/lib/language-context";
import SocialLinks from "@/components/ui/SocialLinks";
import { SITE_NAME } from "@/lib/config";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border-light px-5 py-12 sm:px-10">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-muted">
          © {year} {SITE_NAME} — {t.footer.rights}
        </p>
        <SocialLinks />
      </div>

      {/* خلفية ISSA SELIM بـ Nero Font — ثابتة في العربي والإنجليزي */}
      <div
        aria-hidden="true"
        className="font-decorative absolute inset-x-0 bottom-0 pointer-events-none select-none text-center text-[12vw] leading-none font-normal text-white/5 uppercase tracking-widest whitespace-nowrap z-0"
      >
        ISSA SELIM
      </div>
    </footer>
  );
}