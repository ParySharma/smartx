'use client';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({
  target,
  suffix = '',
  duration = 2000,
  fontSize,
  fontWeight,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  fontSize?: string | number;
  fontWeight?: string | number;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.2, // percentage of the component visible to trigger
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const start = 0;
      const end = target;
      const increment = end / (duration / 16);
      let current = start;

      const step = () => {
        current += increment;
        if (current < end) {
          setCount(Math.floor(current));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(step);
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, target, duration]);

  return (
    <Typography ref={ref} fontSize={fontSize} fontWeight={fontWeight}>
      {count.toLocaleString() + suffix}
    </Typography>
  );
};

export default AnimatedCounter;
