import React from 'react';
import { Sliders, Layers, Cpu, Music, ShieldCheck, Puzzle, Headphones, Zap } from 'lucide-react';

const features = [
  {
    icon: Sliders,
    title: '1‑Click OBS Setup',
    desc: 'Auto‑configure scenes, sources, and encoder settings tailored to your PC and platform.',
    accent: 'from-emerald-400 to-cyan-400',
  },
  {
    icon: Layers,
    title: 'Overlay Designer',
    desc: 'Drag‑and‑drop overlays, alerts, and widgets. Publish to OBS with one tap and live sync.',
    accent: 'from-fuchsia-400 to-rose-400',
  },
  {
    icon: Cpu,
    title: 'AI Copilot',
    desc: 'Generate scenes, titles, chat commands, and highlight reels with prompt‑based presets.',
    accent: 'from-indigo-400 to-blue-400',
  },
  {
    icon: Music,
    title: 'Royalty‑Free Music',
    desc: 'Curated playlists and SFX cleared for Twitch and YouTube — safe for VODs.',
    accent: 'from-amber-400 to-orange-400',
  },
  {
    icon: ShieldCheck,
    title: 'Stream Safety',
    desc: 'Audio ducking, VOD‑safe filters, and scene sanity checks before you go live.',
    accent: 'from-teal-400 to-emerald-400',
  },
  {
    icon: Puzzle,
    title: 'Plugin Ecosystem',
    desc: 'Extend with community plugins for alerts, chat, automation, captions, and more.',
    accent: 'from-purple-400 to-pink-400',
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Everything you need to go live</h2>
        <p className="mt-3 text-white/70">Purpose‑built tools that work together so you can focus on creating, not configuring.</p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10">
            <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${f.accent} p-3` }>
              <f.icon className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            <div className="pointer-events-none absolute -right-6 -top-6 hidden h-20 w-20 rounded-full bg-white/5 blur-xl transition group-hover:block" />
          </div>
        ))}
      </div>

      {/* Mini highlight bar */}
      <div className="mt-10 grid gap-4 rounded-xl border border-white/10 bg-black/30 p-4 sm:grid-cols-3">
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-emerald-500/20 text-emerald-300">
            <Zap size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Setup under 5 min</div>
            <div className="text-xs text-white/60">Guided onboarding and presets</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-sky-500/20 text-sky-300">
            <Headphones size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">VOD‑safe audio</div>
            <div className="text-xs text-white/60">No strikes, ever</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-fuchsia-500/20 text-fuchsia-300">
            <Cpu size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">AI automation</div>
            <div className="text-xs text-white/60">Highlights, titles, commands</div>
          </div>
        </div>
      </div>
    </section>
  );
}
