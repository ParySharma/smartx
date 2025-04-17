'use client';
import React from 'react';
import ContainerLayout from '@/components/Container';
import { Box, Grid2, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import _map from 'lodash/map';
import { motion } from 'framer-motion';
import { CardContents } from '@/utils/constancts';
import { VectorSvg1, VectorSvg2, VectorSvg3 } from '@/styles/allSvgs/homeSvgs';
const CollaborateSection = () => {
  const MotionBox = motion(Box);
  return (
    <Box
      mt={{
        xs: '3rem',
        md: '6.25rem',
      }}
    >
      <ContainerLayout>
        <Stack
          sx={{
            background: '#0D0D0D',
            color: '#fff',
            display: 'flex', // changed from 'column' (invalid) to 'flex'
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5.625rem 0',
            position: 'relative',
          }}
        >
          <MotionBox
            sx={{
              position: 'absolute',
              top: '0',
              right: '30%',
              bottom: '0',
              zIndex: '1',
            }}
            animate={{
              y: [0, -20, 0], // bounce up and down
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <VectorSvg1 />
          </MotionBox>

          <MotionBox
            sx={{
              position: 'absolute',
              left: '0',
              bottom: '5%',
              zIndex: '1',
            }}
            animate={{
              x: [0, 20, 0], // side-to-side bounce
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <VectorSvg2 />
          </MotionBox>

          <MotionBox
            sx={{
              position: 'absolute',
              right: '10%',
              bottom: '0',
              zIndex: '1',
            }}
            animate={{
              y: [0, -15, 0], // subtle bounce
              x: [0, 10, 0], // combined motion
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <VectorSvg3 />
          </MotionBox>
          <Box sx={{ maxWidth: '904px' }} textAlign={'center'}>
            <Typography
              fontSize={{
                xs: '1.5rem',
                md: '2.75rem',
              }}
              fontWeight={600}
              textAlign='center'
            >
              Collaborate on the next big thing together
            </Typography>
            <Typography
              fontSize={{
                xs: '1rem',
                md: '1.25rem',
              }}
              fontWeight={400}
              textAlign='center'
              mt='1rem'
              mb='2rem'
            >
              {`Lorem Ipsum is simply dummy textprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`}
            </Typography>
            <Box
              component='button'
              sx={{
                backgroundColor: '#E7F875',
                color: '#000',
                padding: '16px 42px',
                fontSize: '1.125rem',
                fontWeight: 700,
                border: 0,
                mt: '3.175rem',
              }}
            >
              Get started
            </Box>
          </Box>
        </Stack>
      </ContainerLayout>
    </Box>
  );
};

export default CollaborateSection;
