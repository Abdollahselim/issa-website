"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { caseStudies, getCaseStudyCategories } from "@/data/case-studies";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function CaseStudies() {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";

  const categories = getCaseStudyCategories(language);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // نضمن إن الـ selectedIndex دايمًا valid
  const safeIndex = Math.min(selectedIndex, categories.length - 1);
  const activeCategory = categories[safeIndex] ?? "";

  const filtered = caseStudies.filter((c) =>
    (language === "en" ? c.categoryEn : c.category) === activeCategory
  );

  const problemLabel = isArabic ? "المشكلة" : "The Problem";
  const achievementLabel = isArabic ? "ما تم تحقيقه" : "What Was Achieved";

  return (
    <section id="case-studies" className="relative px-5 py-20 sm:px-10 sm:py-28">
      <h2
        className={[
          "mb-10 text-center font-black text-text-primary",
          isArabic
            ? "text-[clamp(2.2rem,6vw,4rem)]"
            : "text-[clamp(2.2rem,6vw,4rem)]",
        ].join(" ")}
      >
        {t.caseStudies.heading}
      </h2>

      <div className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2">
        {categories.map((cat, index) => (
          <button
            key={cat}
            onClick={() => setSelectedIndex(index)}
            className={[
              "rounded-full border font-semibold transition-colors",
              isArabic
                ? "px-5 py-2.5 text-[clamp(1rem,2.2vw,1.25rem)]"
                : "px-4 py-2 text-base",
              cat === activeCategory
                ? "border-accent-coral bg-accent-coral text-white"
                : "border-border-light bg-surface-glass text-text-muted hover:bg-surface-glass-strong",
            ].join(" ")}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-4xl">
        {filtered.map((cs) => (
          <CaseStudyCard
            key={cs.id}
            caseStudy={cs}
            language={language}
            problemLabel={problemLabel}
            achievementLabel={achievementLabel}
          />
        ))}
      </div>
    </section>
  );
}