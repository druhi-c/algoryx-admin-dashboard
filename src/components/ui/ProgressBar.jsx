import React from 'react';

export function ProgressBar({
  progress = 0,
  variant = 'primary',
  size = 'sm',
  className = '',
}) {
  const clamped = Math.min(100, Math.max(0, progress));

  const variantColors = {
    primary: 'bg-primary-container',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    indigo: 'bg-indigo-500',
    slate: 'bg-slate-400',
    purple: 'bg-purple-500',
  };

  const sizeHeights = {
    xs: 'h-1',
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-2.5',
  };

  const colorClass = variantColors[variant] || variantColors.primary;
  const heightClass = sizeHeights[size] || sizeHeights.sm;

  return (
    <div className={`w-full bg-slate-200 rounded-full overflow-hidden ${heightClass} ${className}`}>
      <div
        className={`${colorClass} h-full rounded-full transition-all duration-300 ease-out`}
        style={{ width: `${clamped}%` }}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}

