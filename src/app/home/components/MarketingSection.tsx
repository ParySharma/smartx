'use client';
import React from 'react';
import ContainerLayout from '@/components/Container';
import { Box, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import _map from 'lodash/map';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const points = [
  'Expert & experienced marketing team',
  'Top supportive teams & experts',
];

const MarketingSection = () => {
  return (
    <Box
      mt={{
        xs: '3rem',
        md: '6.25rem',
      }}
    >
      <ContainerLayout>
        <Typography
          variant='h2'
          fontSize={{
            xs: '1.5rem',
            md: '2.75rem',
          }}
          textAlign='center'
          fontWeight={600}
          mb={{ xs: '2rem', md: '4.375rem' }}
        >
          Comprehensive marketing team <br />
          strategy and direction
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems='center'
          gap={{
            xs: '1rem',
            md: '1.875rem',
          }}
        >
          <Box>
            <Image
              src='/images/marketing.png'
              alt='empower'
              width={578}
              height={500}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
              unoptimized
            />
          </Box>
          <Stack maxWidth={'500px'} gap={2}>
            <Typography
              fontSize={{ xs: '1rem', md: '1.125rem' }}
              fontWeight={400}
            >
              {`Lorem Ipsum is simply dummy textprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`}
            </Typography>
            {_map(points, (text, index) => (
              <Stack
                key={index}
                direction='row'
                gap={2}
                flexWrap='wrap'
                justifyContent='flex-start'
                alignItems='center' // ✅ 'center' aligns icon with text vertically
              >
                <CheckCircleRoundedIcon />
                <Typography
                  fontSize={{ xs: '1rem', md: '1.125rem' }}
                  fontWeight={400}
                  color='#2D2D2D'
                  lineHeight='1.5'
                >
                  {text}
                </Typography>
              </Stack>
            ))}
            <Box
              component='button'
              sx={{
                backgroundColor: 'var(--black-button-background)',
                color: '#fff',
                fontWeight: 600,
                maxWidth: '224px',
                '&:hover': {
                  fontWeight: 600,
                },
              }}
              className='Secodey-button'
            >
              Explore More
            </Box>
          </Stack>
        </Stack>
      </ContainerLayout>
    </Box>
  );
};

export default MarketingSection;
