"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { caseStudies, caseStudyCategories } from "@/data/case-studies";
import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function CaseStudies() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(caseStudyCategories[0]);

  const filtered = caseStudies.filter((c) => c.category === activeCategory);

  const problemLabel = language === "ar" ? "المشكلة" : "The Problem";
  const achievementLabel = language === "ar" ? "ما تم تحقيقه" : "What Was Achieved";

  return (
    <section id="case-studies" className="relative px-5 py-20 sm:px-10 sm:py-28">
      <h2 className="mb-8 text-center text-4xl font-black text-text-primary sm:text-5xl">
        {t.caseStudies.heading}
      </h2>

      <div className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2">
        {caseStudyCategories.map((cat) => (
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
            problemLabel={problemLabel}
            achievementLabel={achievementLabel}
          />
        ))}
      </div>
    </section>
  );
}
