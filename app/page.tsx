import Image from "next/image";

const HERO_IMAGE = "https://r2.spookyactionpark.com/site_drone_2025.jpg";

export default function Home() {
  return (
    <>
      {/* Full-bleed drone hero */}
      <section className="relative flex h-[100svh] min-h-[600px] flex-col">
        <Image
          src={HERO_IMAGE}
          alt="Aerial view of the Spooky Action Park campus site in Austin, Texas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="scrim-top absolute inset-0" />

        {/* Top bar */}
        <header className="relative z-10 flex items-center justify-between px-6 py-5 text-white sm:px-10">
          <div className="flex items-center gap-2.5">
            <Glyph className="h-5 w-5" />
            <span className="text-[13px] font-medium tracking-[0.2em]">
              SPOOKY ACTION PARK
            </span>
          </div>
          <span className="hidden text-[13px] tracking-[0.18em] text-white/80 sm:block">
            AUSTIN · TEXAS
          </span>
        </header>

        {/* Overlaid hero copy */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center text-white">
          <p className="rise text-[12px] font-medium tracking-[0.32em] text-white/85 [animation-delay:80ms] sm:text-[13px]">
            QUANTUM RESEARCH &amp; COMMERCE CAMPUS
          </p>

          <h1 className="rise mt-5 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] drop-shadow-sm [animation-delay:180ms] sm:text-7xl md:text-8xl">
            Spooky Action
            <br className="hidden sm:block" /> Park
          </h1>

          <p className="rise mt-7 max-w-xl text-balance text-lg leading-relaxed text-white/90 [animation-delay:300ms] sm:text-xl">
            A campus where quantum science becomes industry — the future home of
            quantum, across the road from the Gigafactory.
          </p>

          <div className="rise mt-10 flex flex-col items-center gap-6 [animation-delay:420ms]">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm tracking-wide text-white backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Coming soon
            </span>
          </div>
        </div>
      </section>

      {/* Light statement band */}
      <section className="bg-paper px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
            Entanglement, at the scale of a city block.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            A research and commerce campus bringing quantum computing, sensing,
            networking, and fabrication together — where discovery and the
            companies built on it share the same ground.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-mist px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-[13px] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} Spooky Action Park</span>
          <span className="tracking-[0.14em]">AUSTIN, TEXAS</span>
        </div>
      </footer>
    </>
  );
}

/* Small entanglement mark — two particles linked across distance. */
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
