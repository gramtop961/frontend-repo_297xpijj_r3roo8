import React, { useEffect, useMemo, useState } from 'react';

const brands = [
  { name: 'OBS Studio', color: 'text-white' },
  { name: 'Twitch', color: 'text-[#9146FF]' },
  { name: 'YouTube', color: 'text-[#FF0000]' },
  { name: 'Kick', color: 'text-[#53FC18]' },
  { name: 'Spotify', color: 'text-[#1DB954]' },
  { name: 'StreamElements', color: 'text-white' },
  { name: 'Streamlabs', color: 'text-white' },
  { name: 'Discord', color: 'text-[#5865F2]' },
];

const plugins = [
  'Auto Captions',
  'Chat Commands',
  'Reaction Alerts',
  'Multi‑Track VOD',
  'Scene Macros',
  'Clip Marker',
  'Audio Ducking',
  'Text‑to‑Speech',
];

export default function Integrations() {
  // Simple animated usage bars (no external libs)
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 120), 1400);
    return () => clearInterval(id);
  }, []);

  const usage = useMemo(
    () => plugins.map((_, i) => 30 + ((i * 17 + tick * 7) % 60)),
    [tick]
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-semibold text-white">Works with what you already use</h3>
            <p className="mt-2 text-sm text-white/70">
              Seamless setup for your favorite platforms, chat bots, alerts, audio devices, and music providers.
            </p>
          </div>
          <div className="hidden text-sm text-white/60 sm:block">No extra drivers required</div>
        </div>

        {/* Brand marquee */}
        <div className="mt-6 overflow-hidden">
          <div className="flex animate-[marquee_20s_linear_infinite] gap-5 will-change-transform">
            {[...brands, ...brands].map((b, idx) => (
              <div
                key={`${b.name}-${idx}`}
                className="flex h-14 min-w-[140px] items-center justify-center rounded-lg border border-white/10 bg-black/30 px-4"
                title={b.name}
              >
                <span className={`text-sm font-semibold tracking-wide ${b.color}`}>{b.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plugin chips */}
        <div className="mt-6">
          <div className="text-xs font-medium uppercase tracking-wide text-white/60">Popular Plugins</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {plugins.map((p) => (
              <span key={p} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Animated usage chart */}
        <div className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-black/40 p-4 sm:grid-cols-2">
          <div>
            <div className="text-sm font-medium text-white">Realtime Plugin Usage</div>
            <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
              {usage.map((v, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-4 rounded-md bg-gradient-to-t from-fuchsia-500 to-rose-400 transition-all duration-700"
                    style={{ height: `${v}%` }}
                    aria-label={`usage-bar-${i}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-white">Top Sources</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {brands.slice(0, 4).map((b) => (
                <li key={b.name} className="flex items-center justify-between">
                  <span className="truncate pr-2">{b.name}</span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-white/70">Connected</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}
