export default function Brandmark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <circle
        cx="16"
        cy="16"
        r="14.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity={0.45}
      />
      <path
        d="M2 19c3.5-3.2 7-3.2 10.5 0s7 3.2 10.5 0 5-3 6-2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="16" cy="12.5" r="3.4" className="fill-accent" />
    </svg>
  );
}
