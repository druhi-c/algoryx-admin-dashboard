import React from 'react';

export function ExecutiveBrief({ timeframe, onTimeframeChange, onExportReport }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-2 border-b border-outline-variant/40">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-headline-lg font-headline-lg font-bold text-on-surface tracking-tight">
            Good morning, Administrator 👋
          </h1>
        </div>
        <p className="text-body-md font-body-md text-on-surface-variant mt-1">
          Here is what's happening across Algoryx engineering squads and cloud infrastructure today.
        </p>

        {/* Live System Health Pill */}
        <div className="mt-2.5 inline-flex flex-wrap items-center gap-2 py-1.5 px-3 bg-surface-container-lowest rounded-2xl sm:rounded-full border border-outline-variant/70 shadow-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5" />
            <span className="text-label-sm font-label-sm text-on-surface font-semibold">
              9 Cloud Clusters Active
            </span>
          </div>
          <span className="text-outline-variant hidden sm:inline">•</span>
          <span className="text-label-sm font-label-sm text-on-surface-variant">
            3 Deployments in Pipeline
          </span>
          <span className="text-outline-variant hidden sm:inline">•</span>
          <span className="text-label-sm font-label-sm text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
            Zero Critical Alerts
          </span>
        </div>
      </div>

      {/* Header Action Controls */}
      <div className="flex flex-wrap items-center gap-2 self-start lg:self-center">
        <div className="inline-flex rounded-xl border border-outline-variant bg-surface-container-lowest p-0.5 shadow-xs">
          {['This Quarter', 'Last 30 Days', 'YTD'].map((t) => {
            const isSelected = timeframe === t;
            return (
              <button
                key={t}
                onClick={() => onTimeframeChange(t)}
                className={`px-3 py-1.5 text-label-md font-label-md rounded-lg transition-colors ${
                  isSelected
                    ? 'font-medium text-on-surface bg-surface-container-low shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <button
          onClick={onExportReport}
          className="px-3.5 py-2 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low text-on-surface rounded-xl text-label-md font-label-md flex items-center gap-1.5 shadow-xs transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">file_download</span>
          <span>Export Report</span>
        </button>
      </div>
    </div>
  );
}

