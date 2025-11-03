import React from 'react';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Integrations from './components/Integrations';
import PricingCTA from './components/PricingCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-black text-white">
      <header className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-white text-black">
              <span className="text-sm font-extrabold">DK</span>
            </div>
            <div className="text-lg font-semibold">DKStudio Pro</div>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#integrations" className="hover:text-white">Integrations</a>
            <a href="#download" className="hover:text-white">Pricing</a>
          </nav>
          <a href="#download" className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/90">Download</a>
        </div>
      </header>

      <main className="space-y-8">
        <Hero />
        <div id="features">
          <FeatureGrid />
        </div>
        <div id="integrations">
          <Integrations />
        </div>
        <PricingCTA />
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} DKStudio Pro. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
