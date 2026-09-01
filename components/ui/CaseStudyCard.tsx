import { TrendingUp } from "lucide-react";
import { CaseStudy, Language } from "@/data/types";
import MetricCard from "@/components/ui/MetricCard";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  language: Language;
  problemLabel: string;
  achievementLabel: string;
}

export default function CaseStudyCard({
  caseStudy,
  language,
  problemLabel,
  achievementLabel,
}: CaseStudyCardProps) {
  const isArabic = language === "ar";
  const isEn = !isArabic;

  return (
    <div
      dir={isEn ? "ltr" : "rtl"}
      className="glass-card animate-fade-up rounded-[2rem] p-6 sm:p-9"
    >
      <span
        className={[
          "rounded-full bg-accent-coral/20 font-bold text-accent-orange",
          isArabic
            ? "px-4 py-1.5 text-[clamp(0.875rem,1.5vw,1.125rem)]"
            : "px-3 py-1 text-xs",
        ].join(" ")}
      >
        {isEn ? caseStudy.categoryEn : caseStudy.category}
      </span>

      <h3
        className={[
          "mt-4 font-extrabold text-text-primary",
          isArabic
            ? "text-[clamp(2.5rem,3.5vw,2.5rem)]"
            : "text-[clamp(2.25rem,3vw,2rem)]",
        ].join(" ")}
      >
        {isEn ? caseStudy.titleEn : caseStudy.titleAr}
      </h3>

      <div
        className={[
          "mt-5 space-y-4 leading-relaxed text-text-primary/85",
          isArabic
            ? "text-[clamp(1.1rem,1.8vw,1.25rem)]"
            : "text-sm sm:text-base",
        ].join(" ")}
      >
        <div>
          <p
            className={[
              "mb-1 font-bold uppercase tracking-wide text-text-muted",
              isArabic
                ? "text-[clamp(1.2rem,1.5vw,1.125rem)]"
                : "text-xs",
            ].join(" ")}
          >
            {problemLabel}
          </p>
          <p>{isEn ? caseStudy.problemEn : caseStudy.problemAr}</p>
        </div>

        <div>
          <p
            className={[
              "mb-1 font-bold uppercase tracking-wide text-text-muted",
              isArabic
                ? "text-[clamp(1.2rem,1.5vw,1.125rem)]"
                : "text-xs",
            ].join(" ")}
          >
            {achievementLabel}
          </p>
          <p>{isEn ? caseStudy.solutionEn : caseStudy.solutionAr}</p>
        </div>
      </div>

      {/* Chart placeholder */}
      <div className="mt-6 flex h-28 items-end gap-2 rounded-2xl border border-border-light bg-white/5 p-4">
        {[38, 55, 46, 68, 60, 82, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md bg-gradient-to-t from-accent-coral to-accent-orange"
            style={{ height: `${h}%` }}
          />
        ))}
        <TrendingUp className="h-6 w-6 shrink-0 text-accent-orange" />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2.5">
        {caseStudy.results.map((r) => (
          <MetricCard key={r.label} label={r.label} value={r.value} />
        ))}
      </div>
    </div>
  );
}