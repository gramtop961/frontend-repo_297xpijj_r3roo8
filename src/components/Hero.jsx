import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[86vh] min-h-[620px] w-full overflow-hidden rounded-2xl bg-black/90">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (non-interactive so Spline remains interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(16,185,129,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          className="mb-5 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Public Beta
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
            <ShieldCheck size={14} className="text-emerald-400" />
            VOD‑safe by design
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          DKStudio Pro
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl text-balance text-sm text-white/80 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          Pro‑grade creator tools to set up OBS in minutes, design stunning overlays, automate your
          workflow with built‑in AI, and stream confidently with VOD‑safe audio.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
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
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="mt-6 flex flex-col items-center gap-2 text-white/70 sm:flex-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-xs">Loved by 5,000+ creators • Setup takes under 5 minutes</span>
        </motion.div>

        {/* Floating mini cards */}
        <div className="pointer-events-none absolute inset-x-0 top-24 hidden justify-between px-10 md:flex">
          <motion.div
            className="rounded-xl border border-white/10 bg-white/10 p-3 text-left backdrop-blur"
            initial={{ opacity: 0, y: -10, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-xs text-white/70">Auto Scene Builder</div>
            <div className="text-sm font-semibold text-white">+12 sources linked</div>
          </motion.div>
          <motion.div
            className="rounded-xl border border-white/10 bg-white/10 p-3 text-left backdrop-blur"
            initial={{ opacity: 0, y: -10, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
          >
            <div className="text-xs text-white/70">AI Highlight Finder</div>
            <div className="text-sm font-semibold text-white">21 clips ready</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
