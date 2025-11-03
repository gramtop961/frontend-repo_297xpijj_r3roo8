import React, { useMemo, useState } from 'react';
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
  // Interactive Performance Tuner state
  const [quality, setQuality] = useState(70); // 0..100
  const fps = useMemo(() => Math.round(30 + (quality / 100) * 30), [quality]);
  const gpuLoad = useMemo(() => Math.round(20 + (quality / 100) * 70), [quality]);

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

      {/* Interactive Performance Tuner */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h4 className="text-lg font-semibold text-white">Live Performance Tuner</h4>
            <p className="mt-1 text-sm text-white/70">Balance visual quality and framerate in real time. Preview how presets impact your stream.</p>
          </div>
          <div className="w-full max-w-md">
            <input
              type="range"
              min={0}
              max={100}
              value={quality}
              onChange={(e) => setQuality(parseInt(e.target.value))}
              className="w-full appearance-none rounded-lg bg-black/40 accent-white"
            />
            <div className="mt-2 flex justify-between text-xs text-white/60">
              <span>Performance</span>
              <span>Quality</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* GPU load bar */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>GPU Load</span>
              <span className={gpuLoad > 85 ? 'text-red-400' : gpuLoad > 70 ? 'text-amber-300' : 'text-emerald-300'}>{gpuLoad}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${gpuLoad > 85 ? 'bg-rose-500' : gpuLoad > 70 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                style={{ width: `${gpuLoad}%` }}
              />
            </div>
          </div>

          {/* FPS indicator */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Estimated FPS</span>
              <span className="text-sky-300">{fps} fps</span>
            </div>
            <div className="mt-3 grid grid-cols-12 gap-1">
              {Array.from({ length: 12 }).map((_, i) => {
                const active = i < Math.round((fps / 60) * 12);
                return (
                  <div
                    key={i}
                    className={`h-8 rounded-sm transition-all duration-500 ${active ? 'bg-sky-400' : 'bg-white/10'}`}
                    style={{ height: `${active ? 32 + (i % 3) * 3 : 16}px` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
