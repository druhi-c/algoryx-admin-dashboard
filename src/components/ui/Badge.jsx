import React from 'react';

export function Badge({ variant = 'neutral', children, className = '' }) {
  const variantStyles = {
    completed: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    active: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    inProgress: 'bg-blue-50 text-blue-700 border-blue-200',
    review: 'bg-amber-50 text-amber-800 border-amber-200',
    planning: 'bg-slate-100 text-slate-700 border-slate-300',
    critical: 'bg-rose-50 text-rose-800 border-rose-200',
    neutral: 'bg-surface text-on-surface-variant border-outline-variant/60',
  };

  const dotColors = {
    completed: 'bg-emerald-500',
    active: 'bg-emerald-500',
    inProgress: 'bg-blue-600',
    review: 'bg-amber-500',
    planning: 'bg-slate-400',
    critical: 'bg-rose-500',
    neutral: 'bg-slate-400',
  };

  const selectedVariant = variantStyles[variant] || variantStyles.neutral;
  const selectedDot = dotColors[variant] || dotColors.neutral;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-semibold border leading-tight ${selectedVariant} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${selectedDot}`} />
      {children}
    </span>
  );
}

