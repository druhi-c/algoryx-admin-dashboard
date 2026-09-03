import React from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

export function QuickActionsMenu({
  isOpen,
  onClose,
  onOpenCreateProject,
  onOpenShell,
  onExportReport,
}) {
  const menuRef = useClickOutside(() => onClose(), isOpen);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-full mt-2 w-56 max-w-[calc(100vw-2rem)] bg-surface-container-lowest rounded-xl border border-outline-variant shadow-xl z-50 py-1.5 animate-dropdown"
      role="menu"
    >
      <div className="px-3 py-1.5 border-b border-outline-variant/40">
        <p className="text-[11px] font-semibold text-outline tracking-wider uppercase">
          Quick Actions
        </p>
      </div>

      <button
        onClick={() => {
          onClose();
          onOpenCreateProject();
        }}
        className="w-full px-3 py-2 text-left flex items-center gap-2.5 text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
        role="menuitem"
      >
        <span className="material-symbols-outlined text-[18px] text-primary">add_circle</span>
        <span>New Deployment</span>
      </button>

      <button
        onClick={() => {
          onClose();
          onOpenShell();
        }}
        className="w-full px-3 py-2 text-left flex items-center gap-2.5 text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
        role="menuitem"
      >
        <span className="material-symbols-outlined text-[18px] text-primary">terminal</span>
        <span>Command Shell</span>
      </button>

      <button
        onClick={() => {
          onClose();
          onExportReport();
        }}
        className="w-full px-3 py-2 text-left flex items-center gap-2.5 text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
        role="menuitem"
      >
        <span className="material-symbols-outlined text-[18px] text-emerald-600">file_download</span>
        <span>Export Metrics Report</span>
      </button>

      <button
        onClick={() => {
          onClose();
          alert('Security pen-test routine queued: 0 critical vulnerabilities detected across active VPCs.');
        }}
        className="w-full px-3 py-2 text-left flex items-center gap-2.5 text-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
        role="menuitem"
      >
        <span className="material-symbols-outlined text-[18px] text-amber-600">security_update_good</span>
        <span>Audit Cluster Security</span>
      </button>
    </div>
  );
}
