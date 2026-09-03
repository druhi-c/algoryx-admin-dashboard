import React from 'react';
import { mockOperator } from '../../data/mockData';

export function ProfileCard({ onOpenShell }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-space-lg">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-xl object-cover border border-outline-variant"
            alt="Druhi S., Principal Solutions Architect"
            src={mockOperator.avatarUrl}
          />
          <div>
            <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface leading-tight">
              {mockOperator.name}
            </h3>
            <p className="text-[11px] text-on-surface-variant font-medium">
              {mockOperator.title}
            </p>
          </div>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-primary/10 text-primary border border-primary/20">
          {mockOperator.badge}
        </span>
      </div>

      <div className="mt-space-md pt-space-sm border-t border-outline-variant/40 space-y-2.5">
        <div className="flex items-center justify-between text-body-sm font-body-sm">
          <span className="text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
            Shift Zone:
          </span>
          <span className="font-medium text-on-surface">{mockOperator.shiftZone}</span>
        </div>

        <div className="flex items-center justify-between text-body-sm font-body-sm">
          <span className="text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-outline">verified_user</span>
            Clearance:
          </span>
          <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] border border-emerald-200">
            {mockOperator.clearance}
          </span>
        </div>

        <div className="flex items-center justify-between text-body-sm font-body-sm">
          <span className="text-on-surface-variant flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-outline">groups</span>
            Direct Squads:
          </span>
          <span className="font-medium text-on-surface">{mockOperator.directSquads}</span>
        </div>
      </div>

      <div className="mt-space-md pt-space-xs">
        <button
          onClick={onOpenShell}
          className="w-full py-2 bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md rounded-xl border border-outline-variant/60 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">terminal</span>
          <span>Engineering Command Shell</span>
        </button>
      </div>
    </div>
  );
}

