import React from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

export function NotificationDropdown({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead,
  onDismissNotification,
}) {
  const dropdownRef = useClickOutside(() => onClose(), isOpen);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-[calc(100vw-2rem)] max-w-sm bg-surface-container-lowest rounded-xl border border-outline-variant shadow-xl z-50 p-space-md space-y-3 animate-dropdown"
      role="region"
      aria-label="Notifications"
    >
      <div className="flex items-center justify-between pb-2 border-b border-outline-variant/40">
        <div className="flex items-center gap-2">
          <span className="text-label-md font-label-md font-semibold text-on-surface">
            System & Contract Alerts
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary">
            {notifications.filter((n) => !n.read).length} new
          </span>
        </div>
        <button
          onClick={onMarkAllRead}
          className="text-label-sm font-label-sm text-primary-container cursor-pointer hover:underline"
        >
          Mark all read
        </button>
      </div>

      <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
        {notifications.length === 0 ? (
          <div className="py-6 text-center text-body-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-[28px] text-outline mb-1">
              notifications_off
            </span>
            <p>No active alerts right now</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-2.5 rounded-lg border transition-colors flex items-start justify-between gap-2 ${
                notif.read
                  ? 'bg-surface border-transparent hover:bg-surface-container-low'
                  : 'bg-surface-container-low border-primary-container/30 hover:bg-surface-container'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    notif.iconColor || 'text-primary bg-primary-container/10'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {notif.icon || 'info'}
                  </span>
                </div>
                <div>
                  <p className="text-body-sm font-body-sm font-medium text-on-surface leading-snug">
                    {notif.title}
                  </p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">
                    {notif.time} • <span className="font-semibold">{notif.category}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => onDismissNotification(notif.id)}
                className="text-outline hover:text-on-surface p-1 rounded transition-colors"
                title="Dismiss alert"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
              </button>
            </div>
          ))
        )}
      </div>

      <div className="pt-2 border-t border-outline-variant/40 flex items-center justify-between text-[11px] text-outline">
        <span>Synced with AWS CloudWatch</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live feed
        </span>
      </div>
    </div>
  );
}
