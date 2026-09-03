import React from 'react';

export function StatCard({ label, value, subtitle, trend, isPositive = true, icon }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant shadow-sm hover:border-primary-container/60 hover:shadow-md transition-all duration-200 group">
      <div className="flex items-center justify-between">
        <span className="text-label-md font-label-md text-on-surface-variant">
          {label}
        </span>
        <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
          <span className="material-symbols-outlined text-[18px]">{icon}</span>
        </div>
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-headline-xl font-headline-xl font-bold text-on-surface tracking-tight tabular-nums">
          {value}
        </span>
      </div>

      <div className="mt-2.5 flex items-center justify-between text-body-sm font-body-sm">
        <span className="text-on-surface-variant truncate mr-2">{subtitle}</span>
        {trend && (
          <span
            className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[11px] font-semibold shrink-0 border ${
              isPositive
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-rose-50 text-rose-700 border-rose-200'
            }`}
          >
            <span className="material-symbols-outlined text-[12px]">
              {isPositive ? 'arrow_upward' : 'arrow_downward'}
            </span>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}

