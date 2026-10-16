export function SectionLabel({ no, label }: { no: string; label: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-sub">
      <span className="text-cyan">{no}</span>
      <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
      <span>{label}</span>
    </p>
  )
}

export function ArrowUpRight({ className = 'size-3' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M3.5 8.5l5-5M4.5 3.5h4v4" strokeLinecap="square" />
    </svg>
  )
}
