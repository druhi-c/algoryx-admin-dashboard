import React from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { mockOperator } from '../../data/mockData';

export function ProfileMenu({ isOpen, onClose, onOpenShell }) {
  const menuRef = useClickOutside(() => onClose(), isOpen);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-full mt-2 w-64 max-w-[calc(100vw-2rem)] bg-surface-container-lowest rounded-xl border border-outline-variant shadow-xl z-50 py-2 animate-dropdown"
      role="menu"
    >
      <div className="px-4 py-2 border-b border-outline-variant/40">
        <p className="text-body-sm font-semibold text-on-surface">{mockOperator.name}</p>
        <p className="text-[11px] text-on-surface-variant">{mockOperator.title}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            {mockOperator.clearance}
          </span>
          <span className="text-[10px] text-outline">{mockOperator.shiftZone.split('•')[0]}</span>
        </div>
      </div>

      <div className="py-1">
        <button
          onClick={() => {
            onClose();
            onOpenShell();
          }}
          className="w-full px-4 py-2 text-left flex items-center gap-2.5 text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
          role="menuitem"
        >
          <span className="material-symbols-outlined text-[18px] text-primary">terminal</span>
          <span>Open Command Shell</span>
        </button>

        <button
          onClick={() => {
            onClose();
            alert(`Operator Status: Active & On-Call for North America East.`);
          }}
          className="w-full px-4 py-2 text-left flex items-center gap-2.5 text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
          role="menuitem"
        >
          <span className="material-symbols-outlined text-[18px] text-emerald-600">verified_user</span>
          <span>Clearance & Access Keys</span>
        </button>

        <button
          onClick={() => {
            onClose();
            alert('Squad Roster: 5 Pods, 34 Senior & Staff Engineers assigned.');
          }}
          className="w-full px-4 py-2 text-left flex items-center gap-2.5 text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
          role="menuitem"
        >
          <span className="material-symbols-outlined text-[18px] text-outline">groups</span>
          <span>Squad Management</span>
        </button>
      </div>

      <div className="pt-1 border-t border-outline-variant/40">
        <button
          onClick={() => {
            onClose();
            alert('Session locked. Re-authenticate with hardware security key.');
          }}
          className="w-full px-4 py-2 text-left flex items-center gap-2.5 text-body-sm text-rose-600 hover:bg-rose-50 transition-colors"
          role="menuitem"
        >
          <span className="material-symbols-outlined text-[18px]">lock</span>
          <span>Lock Session</span>
        </button>
      </div>
    </div>
  );
}
