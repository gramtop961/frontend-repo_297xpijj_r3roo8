import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[84vh] min-h-[560px] w-full overflow-hidden rounded-2xl bg-black/90">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (non-interactive so Spline remains interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(59,130,246,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Now in Public Beta
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          DKStudio Pro
        </h1>
        <p className="mt-4 max-w-3xl text-balance text-sm text-white/80 sm:text-base md:text-lg">
          The all‑in‑one creator toolkit to set up OBS in minutes, design gorgeous stream overlays,
          power workflows with built‑in AI, and soundtrack your channel with royalty‑free music.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            <Rocket size={18} /> Download for Free
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Play size={18} /> Watch Demo
          </a>
        </div>

        <div className="mt-6 text-xs text-white/60">
          Available for Windows and macOS
        </div>
      </div>
    </section>
  );
}
