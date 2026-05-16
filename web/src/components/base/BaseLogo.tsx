export default function BaseLogo(){
  return (
    <div
      className="inline-flex items-center gap-3"
    >
      {/* Logo */}
      <div
        className="
          relative
          grid
          h-14
          w-14
          place-items-center
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-gradient-to-br
          from-[var(--primary)]
          to-[var(--upload)]
          shadow-lg
          shadow-blue-500/20
        "
      >
        {/* Grid Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
            bg-[size:10px_10px]
            opacity-40
          "
        />

        {/* Letter */}
        <span className="relative text-2xl font-black text-white">
          A
        </span>
      </div>

      {/* Text */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Asset Manager
        </h1>

        <p className="text-sm text-[var(--muted-foreground)]">
          Modern media workspace
        </p>
      </div>
    </div>
  );
}