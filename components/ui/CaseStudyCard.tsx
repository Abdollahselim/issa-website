import { TrendingUp } from "lucide-react";
import { CaseStudy } from "@/data/types";
import MetricCard from "@/components/ui/MetricCard";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  problemLabel: string;
  achievementLabel: string;
}

export default function CaseStudyCard({
  caseStudy,
  problemLabel,
  achievementLabel,
}: CaseStudyCardProps) {
  return (
    <div className="glass-card animate-fade-up rounded-[2rem] p-6 sm:p-9">
      <span className="rounded-full bg-accent-coral/20 px-3 py-1 text-xs font-bold text-accent-orange">
        {caseStudy.category}
      </span>
      <h3 className="mt-4 text-2xl font-extrabold text-text-primary sm:text-3xl">
        {caseStudy.title}
      </h3>

      <div className="mt-5 space-y-4 text-sm leading-relaxed text-text-primary/85 sm:text-base">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-text-muted">
            {problemLabel}
          </p>
          <p>{caseStudy.problem}</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-text-muted">
            {achievementLabel}
          </p>
          <p>{caseStudy.solution}</p>
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
        <TrendingUp className="ms-2 h-6 w-6 shrink-0 text-accent-orange" />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2.5">
        {caseStudy.results.map((r) => (
          <MetricCard key={r.label} label={r.label} value={r.value} />
        ))}
      </div>
    </div>
  );
}
