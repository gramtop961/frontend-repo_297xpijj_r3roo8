import React from 'react';
import { Sliders, Layers, Cpu, Music, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Sliders,
    title: '1‑Click OBS Setup',
    desc: 'Auto‑configure scenes, sources, and optimal encoder settings tailored to your PC and platform.',
    accent: 'from-emerald-400 to-cyan-400',
  },
  {
    icon: Layers,
    title: 'Stream Overlay Designer',
    desc: 'Drag‑and‑drop overlays, alerts, and widgets. Publish to OBS instantly with live sync.',
    accent: 'from-fuchsia-400 to-rose-400',
  },
  {
    icon: Cpu,
    title: 'Built‑in AI Copilot',
    desc: 'Generate scenes, titles, chat commands, and highlight reels with smart prompts and presets.',
    accent: 'from-indigo-400 to-blue-400',
  },
  {
    icon: Music,
    title: 'Royalty‑Free Music',
    desc: 'Curated playlists and sound effects cleared for Twitch, YouTube, and VODs — no strikes.',
    accent: 'from-amber-400 to-orange-400',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Stream Compliance',
    desc: 'Automatic audio ducking, VOD‑safe filters, and scene sanity checks for hassle‑free streams.',
    accent: 'from-teal-400 to-emerald-400',
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
            <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${f.accent} p-3 text-black` }>
              <f.icon className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
