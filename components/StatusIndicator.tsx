function getColor(label: string, value?: string): string {
  if (label === "BUILDING") return "bg-green-500";
  if (!value) return "bg-green-500";

  const num = parseFloat(value);
  if (isNaN(num)) return "bg-green-500";

  if (num >= 90) return "bg-green-500";
  if (num >= 60) return "bg-yellow-500";
  return "bg-safety-orange";
}

export default function StatusIndicator({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  const color = getColor(label, value);

  return (
    <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest text-mid-grey">
      <span className="relative flex h-2 w-2">
        <span className={`animate-pulse-dot absolute inline-flex h-full w-full rounded-full ${color} opacity-75`} />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${color}`} />
      </span>
      <span>
        {label}
        {value && `: ${value}`}
      </span>
    </div>
  );
}
