import React, { useMemo, useState } from 'react';

export default function ComparisonSlider() {
  const [pct, setPct] = useState(50);

  const beforeStyle = useMemo(
    () => ({ background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)' }),
    []
  );
  const afterStyle = useMemo(
    () => ({ background: 'linear-gradient(135deg, #22c55e 0%, #84cc16 50%, #f59e0b 100%)' }),
    []
  );

  return (
    <section id="compare" className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h3 className="font-display text-2xl font-semibold text-white">Before / After Overlay</h3>
          <p className="mt-2 text-sm text-white/70">
            Compare your scene before and after applying DKStudio Pro presets. Drag the handle to reveal changes in
            color, contrast, and clarity.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>• Smooth, GPU‑accelerated clipping</li>
            <li>• Keyboard accessible slider</li>
            <li>• Works with any image or canvas</li>
          </ul>
        </div>

        <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50">
          {/* Before layer */}
          <div className="absolute inset-0" style={beforeStyle} />

          {/* After layer clipped */}
          <div
            className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            style={{ ...afterStyle, width: pct + '%', overflow: 'hidden' }}
          />

          {/* Divider/Handle */}
          <div
            className="absolute top-0 -ml-0.5 h-full w-1 cursor-ew-resize bg-white/80 transition"
            style={{ left: pct + '%' }}
          />

          {/* Range input overlays on top */}
          <input
            type="range"
            min={0}
            max={100}
            value={pct}
            onChange={(e) => setPct(parseInt(e.target.value))}
            className="absolute inset-x-6 bottom-4 z-10 h-2 cursor-ew-resize appearance-none rounded-full bg-white/10 accent-white"
            aria-label="Before after slider"
          />
        </div>
      </div>
    </section>
  );
}
