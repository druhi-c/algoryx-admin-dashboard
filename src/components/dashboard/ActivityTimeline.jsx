import React from 'react';
import { mockTimeline } from '../../data/mockData';

export function ActivityTimeline() {
  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-space-lg">
      <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/40">
        <h3 className="text-headline-sm font-headline-sm font-bold text-on-surface">
          Squad Activity Timeline
        </h3>
        <button
          onClick={() => alert('Full Git & CI/CD deployment audit log (Last 7 Days)')}
          className="text-label-sm font-label-sm text-primary hover:underline"
        >
          View Log
        </button>
      </div>

      <div className="mt-space-md relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/40">
        {mockTimeline.map((item) => (
          <div key={item.id} className="relative">
            <div
              className={`absolute -left-5 top-1 w-2.5 h-2.5 rounded-full ${item.dotColor} ring-4 ring-surface-container-lowest`}
            />
            <div>
              <p className="text-body-sm font-body-sm text-on-surface leading-snug">
                {item.user && <span className="font-semibold">{item.user} </span>}
                {item.action}{' '}
                {item.highlight && (
                  <span className="font-mono text-primary text-[11px] bg-primary/5 px-1 py-0.5 rounded">
                    {item.highlight}
                  </span>
                )}
              </p>
              <span className="text-[10px] text-outline font-mono mt-0.5 block">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

