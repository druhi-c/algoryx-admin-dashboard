import React, { useState } from 'react';
import { mockAlerts as initialAlerts } from '../../data/mockData';

export function AlertsFeed() {
  const [alerts, setAlerts] = useState(initialAlerts);

  const dismissAlert = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-space-lg">
      <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/40">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-primary-container">
            notifications_active
          </span>
          <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
            Live Event Alerts
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-medium text-emerald-700">Healthy</span>
        </div>
      </div>

      <div className="mt-space-md space-y-3">
        {alerts.length === 0 ? (
          <div className="py-4 text-center text-body-sm text-on-surface-variant">
            All system and security events acknowledged.
          </div>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-2.5 p-2.5 rounded-lg bg-surface border border-outline-variant/50 hover:border-outline-variant transition-colors"
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${alert.bgIcon}`}
              >
                <span className="material-symbols-outlined text-[14px]">{alert.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-body-sm font-body-sm font-medium text-on-surface leading-tight">
                  {alert.title}
                </p>
                <p className="text-[10px] text-on-surface-variant mt-0.5 font-mono">
                  {alert.meta}
                </p>
              </div>
              <button
                onClick={() => dismissAlert(alert.id)}
                className="text-outline hover:text-on-surface p-0.5 rounded transition-colors"
                title="Acknowledge alert"
              >
                <span className="material-symbols-outlined text-[14px]">check</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

