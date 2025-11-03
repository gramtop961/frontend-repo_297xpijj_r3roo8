import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Maximize } from 'lucide-react';

export default function DemoPlayer() {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(12); // 0..100
  const [hoverPct, setHoverPct] = useState<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTs = useRef<number>(0);

  // Simulate playback progress when playing
  useEffect(() => {
    const step = (ts: number) => {
      if (!playing) return;
      if (!lastTs.current) lastTs.current = ts;
      const dt = ts - lastTs.current; // ms
      lastTs.current = ts;
      setProgress((p) => {
        const next = p + (dt / 1000) * 6; // ~6% per sec → ~16s loop
        return next >= 100 ? 0 : next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    if (playing) rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTs.current = 0;
    };
  }, [playing]);

  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseFloat(e.target.value));
  };

  const waveformBars = useMemo(() => {
    return Array.from({ length: 48 }).map((_, i) => {
      const phase = (progress / 100) * Math.PI * 2;
      const h = 20 + Math.abs(Math.sin(i * 0.45 + phase)) * 36;
      return (
        <div
          key={i}
          className="w-[6px] rounded-sm bg-gradient-to-t from-emerald-500 to-lime-300"
          style={{ height: h }}
        />
      );
    });
  }, [progress]);

  return (
    <section id="demo" className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 md:flex-1">
          {/* Visual preview area (no external video, simulated visuals) */}
          <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-black via-[#07110a] to-black sm:h-80">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(16,185,129,0.18),transparent)]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex items-end gap-1 opacity-90" aria-hidden>
                {waveformBars}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 border-t border-white/10 bg-black/50 px-4 py-3">
            <button
              className="grid h-8 w-8 place-items-center rounded-md bg-white text-black transition hover:bg-white/90"
              aria-label={playing ? 'Pause' : 'Play'}
              onClick={() => setPlaying((p) => !p)}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              className="grid h-8 w-8 place-items-center rounded-md border border-white/15 text-white transition hover:bg-white/10"
              aria-label={muted ? 'Unmute' : 'Mute'}
              onClick={() => setMuted((m) => !m)}
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button
              className="hidden h-8 items-center gap-2 rounded-md border border-white/15 px-2 text-xs text-white transition hover:bg-white/10 sm:inline-flex"
              onClick={() => setProgress(0)}
            >
              <RotateCcw size={14} /> Restart
            </button>
            <div className="ml-2 flex-1">
              <input
                type="range"
                min={0}
                max={100}
                step={0.1}
                value={progress}
                onChange={handleScrub}
                onMouseMove={(e) => {
                  const rect = (e.target as HTMLInputElement).getBoundingClientRect();
                  const pct = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
                  setHoverPct(pct);
                }}
                onMouseLeave={() => setHoverPct(null)}
                className="w-full appearance-none accent-white"
                aria-label="Timeline"
              />
              <div className="mt-1 flex items-center justify-between text-[10px] text-white/60">
                <span>{(progress / 6).toFixed(0).padStart(2, '0')}s</span>
                <span>16s</span>
              </div>
            </div>
            <button
              className="hidden grid h-8 w-8 place-items-center rounded-md border border-white/15 text-white transition hover:bg-white/10 md:inline-flex"
              title="Fullscreen"
            >
              <Maximize size={16} />
            </button>
          </div>
        </div>

        {/* Copy side */}
        <div className="md:w-[360px]">
          <h3 className="font-display text-2xl font-semibold text-white">Mini Demo Player</h3>
          <p className="mt-2 text-sm text-white/70">
            Preview how scenes, overlays, and audio balance react in real time. Scrub the timeline or let it play to
            see dynamic waveform feedback.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>• Timeline scrubber with smooth playback</li>
            <li>• Restart and mute controls</li>
            <li>• Simulated waveform visualization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
