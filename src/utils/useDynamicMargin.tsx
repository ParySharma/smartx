import { useState, useEffect } from 'react';

export const useDynamicMargin = (containerSelector = '#container') => {
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const container = document.querySelector(
        containerSelector
      ) as HTMLElement | null;

      if (container) {
        const containerWidth = container.offsetWidth;
        const windowWidth = window.innerWidth;
        const newMarginLeft = (windowWidth - containerWidth) / 2;
        setMarginLeft(newMarginLeft);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [containerSelector]);

  return marginLeft;
};
