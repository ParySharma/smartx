'use client';
// pages/under-development.tsx

import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function UnderDevelopment() {
  return (
    <Container
      maxWidth='md'
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant='h2'
          fontWeight={700}
          gutterBottom
          sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
        >
          🚧 Page Under Development
        </Typography>
        <Typography
          variant='h6'
          color='text.secondary'
          sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
        >
          {`We’re currently working hard to bring this page to life.`}
          <br />
          Stay tuned for something amazing!
        </Typography>
        <Button
          component={Link}
          href='/home'
          variant='contained'
          sx={{ mt: 4 }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
