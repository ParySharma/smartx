'use client';

import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const messages = [
  'Initializing SmartX...',
  'Fetching resources...',
  'Launching interface...',
  'Almost there...',
];

export default function LoadingScreen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 300); // Change message every 1.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      height='100vh'
      width='100vw'
      bgcolor='#ffffff'
      textAlign='center'
    >
      <Box
        sx={{
          animation: 'spin 3s linear infinite',
          '@keyframes spin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
        }}
      >
        <svg
          width='60'
          height='60'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.37457 1.24321L28.4769 0.00204004C29.729 -0.0624384 30.4636 1.41584 29.6715 2.40618L14.426 21.4676C14.0111 21.9862 13.3037 22.1568 12.7108 21.8693C3.40733 17.3586 1.05561 12.898 3.04268 2.41108C3.16696 1.75523 3.71994 1.27692 4.37457 1.24321Z'
            fill='#888888'
          />
          <path
            d='M25.5809 29.9996L1.44784 29.968C0.194128 29.9663 -0.464327 28.4513 0.376986 27.5041L16.5701 9.27226C17.0107 8.77619 17.7259 8.64321 18.3034 8.96156C27.3653 13.9569 29.4873 18.5356 26.9703 28.9036C26.8129 29.552 26.2364 30.0005 25.5809 29.9996Z'
            fill='#0D0D0D'
          />
        </svg>
      </Box>

      <Typography
        variant='subtitle1'
        sx={{
          mt: 3,
          color: '#555',
          fontWeight: 500,
          transition: 'opacity 0.5s ease-in-out',
        }}
        key={index} // Ensures fade on text change
      >
        {messages[index]}
      </Typography>
    </Box>
  );
}
