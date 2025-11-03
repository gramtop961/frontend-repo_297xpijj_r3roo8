import React from 'react';

const brands = [
  { name: 'OBS Studio', color: 'text-white' },
  { name: 'Twitch', color: 'text-[#9146FF]' },
  { name: 'YouTube', color: 'text-[#FF0000]' },
  { name: 'Kick', color: 'text-[#53FC18]' },
  { name: 'Spotify', color: 'text-[#1DB954]' },
];

export default function Integrations() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="font-display text-2xl font-semibold text-white">Works with what you already use</h3>
            <p className="mt-2 text-sm text-white/70">
              Seamless setup for your favorite platforms, chat bots, alerts, and audio devices.
            </p>
          </div>
          <div className="grid grid-cols-3 items-center gap-5 sm:grid-cols-5">
            {brands.map((b) => (
              <div
                key={b.name}
                className="flex h-14 items-center justify-center rounded-lg border border-white/10 bg-black/30 px-4"
                title={b.name}
              >
                <span className={`text-sm font-semibold tracking-wide ${b.color}`}>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
