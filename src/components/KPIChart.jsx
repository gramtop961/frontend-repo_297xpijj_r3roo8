import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function KPIChart() {
  const data = useMemo(() => {
    // Simple growth curve (12 months)
    return [12, 16, 21, 27, 35, 44, 52, 61, 72, 86, 95, 110];
  }, []);

  const width = 640;
  const height = 220;
  const padding = 28;
  const maxY = Math.max(...data) * 1.1;
  const stepX = (width - padding * 2) / (data.length - 1);

  const points = data
    .map((y, i) => {
      const px = padding + i * stepX;
      const py = height - padding - (y / maxY) * (height - padding * 2);
      return [px, py];
    })
    .map(([x, y]) => `${x},${y}`)
    .join(' ');

  const pathD = `M ${points.replace(/\s+/g, ' L ')}`;

  return (
    <section id="metrics" className="mx-auto max-w-6xl px-6 py-14">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">KPI Growth</h3>
            <p className="mt-1 text-sm text-white/70">Month‑over‑month active creators using DKStudio Pro.</p>
          </div>
          <div className="text-right text-sm">
            <div className="font-semibold text-emerald-400">+17% MoM</div>
            <div className="text-white/60">Last 30 days</div>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4">
          <svg viewBox={`0 0 ${width} ${height}`} className="h-56 w-full">
            {/* Grid */}
            <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
              {Array.from({ length: 4 }).map((_, r) => {
                const y = padding + r * ((height - padding * 2) / 4);
                return <line key={r} x1={padding} x2={width - padding} y1={y} y2={y} />;
              })}
            </g>

            {/* Area gradient */}
            <defs>
              <linearGradient id="kpiFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Animated line */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="#34d399"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />

            {/* Filled area under the curve */}
            <motion.path
              d={`${pathD} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`}
              fill="url(#kpiFill)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />

            {/* Dots */}
            {data.map((y, i) => {
              const x = padding + i * stepX;
              const py = height - padding - (y / maxY) * (height - padding * 2);
              return <circle key={i} cx={x} cy={py} r={3} fill="#34d399" />;
            })}
          </svg>

          {/* Legend */}
          <div className="mt-3 flex items-center gap-4 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Active Creators
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-8 rounded bg-gradient-to-r from-emerald-400 to-lime-300" /> Current Quarter
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
