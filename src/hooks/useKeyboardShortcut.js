import { useEffect } from 'react';

export function useKeyboardShortcut(key, callback, options = {}) {
  const { ctrlOrMeta = false } = options;

  useEffect(() => {
    const handleKeyDown = (e) => {
      const matchesKey = e.key.toLowerCase() === key.toLowerCase();
      const matchesModifier = !ctrlOrMeta || e.metaKey || e.ctrlKey;

      if (matchesKey && matchesModifier) {
        e.preventDefault();
        callback(e);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback, ctrlOrMeta]);
}

