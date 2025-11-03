import React from 'react';
import { Check } from 'lucide-react';

export default function PricingCTA() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
          <h3 className="font-display text-2xl font-semibold text-white">Get DKStudio Pro</h3>
          <p className="mt-2 text-white/70">Start for free. Upgrade anytime — keep your scenes and settings.</p>

          <div className="mt-6 rounded-xl bg-black/40 p-5">
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-white">$0</div>
              <div className="pb-1 text-sm text-white/60">Free</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> 1‑click OBS auto‑setup</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Overlay designer & widgets</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> AI scene assistant (basic)</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> VOD‑safe music sampler</li>
            </ul>
            <a href="#" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">Download</a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 p-8">
          <h3 className="font-display text-2xl font-semibold text-white">Pro Subscription</h3>
          <p className="mt-2 text-white/70">For creators who want advanced features and automation.</p>

          <div className="mt-6 rounded-xl bg-black/40 p-5">
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-white">$9</div>
              <div className="pb-1 text-sm text-white/60">per month</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><Check size={16} className="text-indigo-400" /> All Free features</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-indigo-400" /> AI highlights & clip finder</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-indigo-400" /> Advanced scene automation</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-indigo-400" /> Unlimited royalty‑free tracks</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-indigo-400" /> Priority updates & plugins</li>
            </ul>
            <a href="#" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">Start 14‑day Trial</a>
          </div>
        </div>
      </div>
    </section>
  );
}
