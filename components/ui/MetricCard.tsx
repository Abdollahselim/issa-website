interface MetricCardProps {
  label: string;
  value: string;
}

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-border-light bg-white/5 px-4 py-3 text-center">
      <span className="text-xl font-black text-accent-orange sm:text-2xl">{value}</span>
      <span className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-text-muted sm:text-xs">
        {label}
      </span>
    </div>
  );
}
