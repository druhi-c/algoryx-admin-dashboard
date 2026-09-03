import React, { useState, useEffect } from 'react';
import { ProgressBar } from '../ui/ProgressBar';
import { mockTimeframeData, mockServiceDistribution, ALGORYX_SERVICES } from '../../data/mockData';

export function AnalyticsSection({ timeframe = 'This Quarter' }) {
  const [activeView, setActiveView] = useState('quarterly'); // 'quarterly' | 'service'
  const currentDataset = mockTimeframeData[timeframe] || mockTimeframeData['This Quarter'];
  const [hoveredPoint, setHoveredPoint] = useState(
    currentDataset.points[currentDataset.points.length - 1]
  );

  // Sync hovered point when timeframe changes
  useEffect(() => {
    const ds = mockTimeframeData[timeframe] || mockTimeframeData['This Quarter'];
    setHoveredPoint(ds.points[ds.points.length - 1]);
  }, [timeframe]);

  const points = currentDataset.points;
  const polylinePoints = points.map((p) => `${p.x},${p.y}`).join(' ');
  const polygonPoints = `${polylinePoints} ${points[points.length - 1].x},210 ${points[0].x},210`;

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-space-lg">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-space-md border-b border-outline-variant/40">
        <div>
          <h2 className="text-headline-sm font-headline-sm font-bold text-on-surface">
            Revenue &amp; Contract Pipeline Analytics
          </h2>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            {currentDataset.subtitle}
          </p>
        </div>

        {/* Tab toggles */}
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg border border-outline-variant bg-surface p-0.5 text-[11px] font-medium">
            <button
              onClick={() => setActiveView('quarterly')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeView === 'quarterly'
                  ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Revenue MRR
            </button>
            <button
              onClick={() => setActiveView('service')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeView === 'service'
                  ? 'bg-surface-container-lowest text-on-surface shadow-xs font-semibold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Service Breakdown
            </button>
          </div>
          <button
            onClick={() => alert(`Exporting ${timeframe} financial trajectory data.`)}
            className="p-1 text-outline hover:text-on-surface rounded"
            title="Options"
          >
            <span className="material-symbols-outlined text-[18px]">more_vert</span>
          </button>
        </div>
      </div>

      {activeView === 'quarterly' ? (
        /* High Fidelity Interactive Area/Line SVG Chart */
        <div className="mt-space-lg relative">
          {/* Interactive Hover Data Tooltip */}
          {hoveredPoint && (
            <div
              className="hidden sm:block absolute top-2 z-10 bg-inverse-surface text-inverse-on-surface py-1.5 px-3 rounded-lg shadow-md pointer-events-none text-left transition-all duration-150"
              style={{
                left: `${(hoveredPoint.x / 700) * 100}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <p className="text-[10px] text-outline-variant font-mono uppercase tracking-wider">
                {hoveredPoint.label}
              </p>
              <p className="text-label-md font-label-md font-bold text-inverse-on-surface tabular-nums">
                {hoveredPoint.value}
              </p>
              <p className="text-[10px] text-emerald-400 font-medium">{hoveredPoint.variance}</p>
            </div>
          )}

          <div className="w-full overflow-x-auto">
            <svg
              className="w-full min-w-[500px] h-56 overflow-visible"
              viewBox="0 0 700 240"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartBlueGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Horizontal Grid lines */}
              <line stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="680" y1="20" y2="20" />
              <line stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="680" y1="70" y2="70" />
              <line stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="680" y1="120" y2="120" />
              <line stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" x1="40" x2="680" y1="170" y2="170" />
              <line stroke="#CBD5E1" strokeWidth="1" x1="40" x2="680" y1="210" y2="210" />

              {/* Y-Axis Labels */}
              {currentDataset.yLabels.map((lbl, idx) => (
                <text
                  key={lbl}
                  className="text-[10px] fill-slate-400 font-mono font-medium"
                  textAnchor="end"
                  x="32"
                  y={24 + idx * 50}
                >
                  {lbl}
                </text>
              ))}

              {/* Shaded Area */}
              <polygon
                fill="url(#chartBlueGradient)"
                points={polygonPoints}
                className="transition-all duration-300"
              />

              {/* Vertical Crosshair */}
              {hoveredPoint && (
                <line
                  x1={hoveredPoint.x}
                  x2={hoveredPoint.x}
                  y1={20}
                  y2={210}
                  stroke="#1D4ED8"
                  strokeDasharray="3 3"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              )}

              {/* Trajectory Line */}
              <polyline
                fill="none"
                points={polylinePoints}
                stroke="#1D4ED8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="transition-all duration-300"
              />

              {/* Data Points on Line */}
              {points.map((pt) => {
                const isHovered = hoveredPoint?.label === pt.label;
                return (
                  <g
                    key={pt.label}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(pt)}
                  >
                    {pt.isCurrent && (
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="12"
                        className="fill-blue-400/20 animate-ping"
                      />
                    )}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? '6' : '4.5'}
                      className="fill-surface stroke-primary stroke-[2.5] transition-all duration-150"
                    />
                    <text
                      className={`text-[11px] font-medium font-mono ${
                        isHovered ? 'fill-primary font-bold' : 'fill-slate-500'
                      }`}
                      textAnchor="middle"
                      x={pt.x}
                      y="230"
                    >
                      {pt.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      ) : (
        /* Detailed Service Breakdown View */
        <div className="mt-space-lg space-y-4">
          <p className="text-body-sm text-on-surface-variant mb-2">
            Annual recurring contract allocation categorized by Algoryx core capabilities:
          </p>
          <div className="space-y-3">
            {[
              { name: 'Cloud Solutions & DevOps', share: '₹28.4L ARR', pct: 38, variant: 'primary' },
              { name: 'AI / ML & Automation', share: '₹19.4L ARR', pct: 26, variant: 'indigo' },
              { name: 'Cybersecurity & System Protection', share: '₹15.7L ARR', pct: 21, variant: 'emerald' },
              { name: 'Data Engineering & Analytics', share: '₹11.3L ARR', pct: 15, variant: 'indigo' },
              { name: 'Product Engineering & Consulting', share: '₹6.0L ARR', pct: 8, variant: 'purple' },
              { name: 'Web & Mobile Development', share: '₹4.5L ARR', pct: 6, variant: 'slate' },
            ].map((srv) => (
              <div key={srv.name} className="p-3 rounded-lg bg-surface border border-outline-variant/60">
                <div className="flex items-center justify-between text-body-sm font-medium mb-1.5">
                  <span className="text-on-surface">{srv.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-on-surface-variant font-mono text-[12px]">{srv.share}</span>
                    <span className="font-bold text-primary">{srv.pct}%</span>
                  </div>
                </div>
                <ProgressBar progress={srv.pct} variant={srv.variant || 'primary'} size="md" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mini Service Distribution Pills */}
      <div className="mt-space-md pt-space-sm border-t border-outline-variant/40 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {mockServiceDistribution.map((item) => (
          <div key={item.name} className="p-2.5 rounded-lg bg-surface border border-outline-variant/50">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-on-surface-variant font-medium truncate mr-1">
                {item.shortName}
              </span>
              <span className="text-label-sm font-label-sm font-bold text-primary tabular-nums">
                {item.percentage}%
              </span>
            </div>
            <ProgressBar progress={item.percentage} variant="primary" size="xs" className="mt-1.5" />
          </div>
        ))}
      </div>
    </div>
  );
}
