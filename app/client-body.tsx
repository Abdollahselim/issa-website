"use client";

import { useLanguage } from "@/lib/language-context";
import { useEffect } from "react";

export function ClientBody({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();

  useEffect(() => {
    const html = document.documentElement;
    if (html.lang !== language) html.lang = language;
    const dir = language === "ar" ? "rtl" : "ltr";
    if (html.dir !== dir) html.dir = dir;
  }, [language]);

  return <>{children}</>;
}