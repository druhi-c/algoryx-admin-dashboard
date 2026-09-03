import { useEffect, useRef } from 'react';

export function useClickOutside(callback, active = true) {
  const ref = useRef(null);

  useEffect(() => {
    if (!active) return;

    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [callback, active]);

  return ref;
}

