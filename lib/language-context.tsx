"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Language, SiteContent, Industry } from "@/data/types";
import { content as arContent, industries as arIndustries } from "@/data/ar";
import { content as enContent, industries as enIndustries } from "@/data/en";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: SiteContent;
  industries: Industry[];
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  const value = useMemo<LanguageContextValue>(() => {
    const isAr = language === "ar";
    return {
      language,
      toggleLanguage: () => setLanguage((prev) => (prev === "ar" ? "en" : "ar")),
      setLanguage,
      t: isAr ? arContent : enContent,
      industries: isAr ? arIndustries : enIndustries,
      dir: isAr ? "rtl" : "ltr",
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
