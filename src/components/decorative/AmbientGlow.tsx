export function AmbientGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute -top-1/4 -left-1/4 h-[70vh] w-[70vh] rounded-full opacity-40 blur-3xl animate-float"
        style={{
          background:
            "radial-gradient(circle, var(--color-champagne) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[65vh] w-[65vh] rounded-full opacity-30 blur-3xl animate-float"
        style={{
          background:
            "radial-gradient(circle, var(--color-emerald-light) 0%, transparent 70%)",
          animationDelay: "-3s",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 h-[40vh] w-[40vh] -translate-x-1/2 rounded-full opacity-20 blur-3xl animate-float"
        style={{
          background:
            "radial-gradient(circle, var(--color-rose-gold) 0%, transparent 70%)",
          animationDelay: "-1.5s",
        }}
      />
    </div>
  );
}
