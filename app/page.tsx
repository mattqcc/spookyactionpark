export default function Home() {
  return (
    <div className="field relative flex min-h-screen flex-col overflow-hidden">
      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-2.5">
          <Glyph className="h-5 w-5 text-q-cyan" />
          <span className="text-[13px] font-medium tracking-[0.2em] text-ink/90">
            SPOOKY ACTION PARK
          </span>
        </div>
        <span className="hidden text-[13px] tracking-[0.18em] text-muted sm:block">
          AUSTIN · TEXAS
        </span>
      </header>

      {/* Hero */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <Entanglement className="rise mb-12 h-28 w-[260px] text-ink [animation-delay:0ms] sm:h-32 sm:w-[320px]" />

        <p className="rise text-[12px] font-medium tracking-[0.32em] text-muted [animation-delay:120ms] sm:text-[13px]">
          QUANTUM RESEARCH &amp; COMMERCE CAMPUS
        </p>

        <h1 className="rise mt-5 bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-transparent [animation-delay:200ms] sm:text-7xl md:text-8xl">
          Spooky Action
          <br className="hidden sm:block" /> Park
        </h1>

        <p className="rise mt-7 max-w-xl text-balance text-lg leading-relaxed text-muted [animation-delay:320ms] sm:text-xl">
          A campus where quantum science becomes industry — built across the
          road from the future, in Austin, Texas.
        </p>

        <div className="rise mt-10 flex flex-col items-center gap-6 [animation-delay:440ms]">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-5 py-2 text-sm tracking-wide text-ink/80 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-q-cyan opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-q-cyan" />
            </span>
            Coming soon
          </span>

          <a
            href="mailto:hello@spookyactionpark.com"
            className="text-sm tracking-wide text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Request information →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex items-center justify-center px-6 py-6">
        <p className="text-[12px] tracking-wide text-muted/70">
          © {new Date().getFullYear()} Spooky Action Park
        </p>
      </footer>
    </div>
  );
}

/* Small entanglement mark used in the header. */
function Glyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="6" cy="12" r="2.4" fill="currentColor" />
      <circle cx="18" cy="12" r="2.4" fill="currentColor" />
      <path
        d="M8.4 12h7.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="1.5 3"
      />
    </svg>
  );
}

/*
 * The hero motif: two entangled particles connected across distance.
 * A literal nod to "spooky action at a distance."
 */
function Entanglement({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 130"
      fill="none"
      className={className}
      role="img"
      aria-label="Two entangled quantum particles"
    >
      {/* connecting field line */}
      <path
        className="entangle-link"
        d="M70 65 H250"
        stroke="url(#beam)"
        strokeWidth="1.5"
      />

      {/* left particle */}
      <g className="particle-a">
        <circle cx="70" cy="65" r="26" stroke="rgba(90,209,255,0.25)" />
        <circle cx="70" cy="65" r="40" stroke="rgba(90,209,255,0.10)" />
        <circle className="core text-q-cyan" cx="70" cy="65" r="7" fill="currentColor" />
      </g>

      {/* right particle */}
      <g className="particle-b">
        <circle cx="250" cy="65" r="26" stroke="rgba(155,123,255,0.25)" />
        <circle cx="250" cy="65" r="40" stroke="rgba(155,123,255,0.10)" />
        <circle
          className="core text-q-violet"
          cx="250"
          cy="65"
          r="7"
          fill="currentColor"
          style={{ animationDelay: "2s" }}
        />
      </g>

      <defs>
        <linearGradient id="beam" x1="70" y1="65" x2="250" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5ad1ff" />
          <stop offset="1" stopColor="#9b7bff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
