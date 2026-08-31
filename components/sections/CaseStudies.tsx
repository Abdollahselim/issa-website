"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { caseStudies, getCaseStudyCategories } from "@/data/case-studies";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function CaseStudies() {
  const { t, language } = useLanguage();

  const categories = 
  getCaseStudyCategories(language);
  const [activeCategory, 
    setActiveCategory] = 
    useState(categories[0]);
  const [prevLanguage, setprevLanguage] = useState(language);
    if (language !== prevLanguage){
      setprevLanguage(language);
      setActiveCategory(getCaseStudyCategories(language)[0]);
    }

  const filtered = caseStudies.filter((c) =>
    (language === "en" ? c.categoryEn : c.category) === activeCategory
);

  const problemLabel = language === "ar" ? "المشكلة" : "The Problem";
  const achievementLabel = language === "ar" ? "ما تم تحقيقه" : "What Was Achieved";

  return (
    <section id="case-studies" className="relative px-5 py-20 sm:px-10 sm:py-28">
      <h2 className="mb-8 text-center text-4xl font-black text-text-primary sm:text-5xl">
        {t.caseStudies.heading}
      </h2>

      <div className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              cat === activeCategory
                ? "border-accent-coral bg-accent-coral text-white"
                : "border-border-light bg-surface-glass text-text-muted hover:bg-surface-glass-strong"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-xl">
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
