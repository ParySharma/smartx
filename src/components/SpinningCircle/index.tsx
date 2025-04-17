'use client';

import { Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const SpinningCircle = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 160,
        height: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}
    >
      {/* Spinning Text */}
      <motion.svg
        width='160'
        height='160'
        viewBox='0 0 160 160'
        xmlns='http://www.w3.org/2000/svg'
        style={{ position: 'absolute', top: 0, left: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'linear',
        }}
      >
        <defs>
          <path
            id='circlePath'
            d='M 80, 80 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0'
          />
        </defs>
        <text fill='#000' fontSize='21' fontFamily='Arial'>
          <textPath xlinkHref='#circlePath' startOffset='0%'>
            Watch Video Watch Video Watch Video
          </textPath>
        </text>
      </motion.svg>

      {/* Center Play Button */}
      <IconButton
        sx={{
          width: 64,
          height: 64,
          backgroundColor: '#fff',
          zIndex: 1,
          borderRadius: '50%',

          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        <PlayArrowRoundedIcon
          sx={{
            color: '#000',
            fontSize: 60,
          }}
        />
      </IconButton>
    </Box>
  );
};

export default SpinningCircle;
