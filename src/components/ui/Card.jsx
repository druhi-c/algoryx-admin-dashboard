import React from 'react';

export function Card({ children, className = '', header, footer }) {
  return (
    <div
      className={`bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm transition-all duration-200 ${className}`}
    >
      {header && (
        <div className="p-space-lg border-b border-outline-variant/40">
          {header}
        </div>
      )}
      <div className="p-space-lg">{children}</div>
      {footer && (
        <div className="p-space-md bg-surface border-t border-outline-variant/50">
          {footer}
        </div>
      )}
    </div>
  );
}

