'use client';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

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

  useEffect(() => {
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
  }, [target, duration]);

  return (
    <Typography fontSize={fontSize} fontWeight={fontWeight}>
      {count.toLocaleString() + suffix}
    </Typography>
  );
};

export default AnimatedCounter;
