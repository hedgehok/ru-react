import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

export function useWindowScroll() {
  const [scroll, setScroll] = useState({
    x: typeof window !== 'undefined' ? window.scrollX : 0,
    y: typeof window !== 'undefined' ? window.scrollY : 0,
  });

  const updateScroll = () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useWindowEvent('scroll', updateScroll);

  const scrollTo = ({ x, y }) => {
    if (typeof window !== 'undefined') {
      window.scrollTo(x, y);
    }
  };

  return [scroll, scrollTo];
}