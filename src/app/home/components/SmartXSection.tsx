'use client';
import React from 'react';
import ContainerLayout from '@/components/Container';
import { Box, Grid2, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import _map from 'lodash/map';
import { CardContents } from '@/utils/constancts';
import AnimatedCounter from '@/components/AnimatedCounter';

const SmartXSection = () => {
  return (
    <Box
      mt={{
        xs: '3rem',
        md: '6.25rem',
      }}
    >
      <ContainerLayout>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems='center'
          gap={{
            xs: '1rem',
            md: '1.875rem',
          }}
        >
          <Stack maxWidth={'595px'} gap={2}>
            <Typography
              fontSize={{ xs: '2.5rem', md: '2.75rem' }}
              fontWeight={600}
              lineHeight='1.2'
            >
              {`Smartx has the full types of potential for your startup business`}
            </Typography>
            <Typography
              fontSize={{ xs: '1rem', md: '1.125rem' }}
              fontWeight={400}
            >
              {`Lorem Ipsum is simply dummy textpring and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.Lorem Ipsply dummy textprinting and typesetting industry.`}
            </Typography>
            <Grid2 container spacing={0} mt={2}>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <AnimatedCounter
                  target={4.8}
                  suffix='/5'
                  fontSize={'2.125rem'}
                  fontWeight={600}
                />
                <Typography
                  fontSize={'1.375rem'}
                  fontWeight={500}
                  color='#888888'
                >
                  Success rate
                </Typography>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <AnimatedCounter
                  target={30}
                  suffix='M+'
                  fontSize={'2.125rem'}
                  fontWeight={600}
                />
                <Typography
                  fontSize={'1.375rem'}
                  fontWeight={500}
                  color='#888888'
                >
                  Global users
                </Typography>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 4 }}>
                <AnimatedCounter
                  target={50}
                  suffix='+'
                  fontSize={'2.125rem'}
                  fontWeight={600}
                />
                <Typography
                  fontSize={'1.375rem'}
                  fontWeight={500}
                  color='#888888'
                >
                  Projects completed
                </Typography>
              </Grid2>
            </Grid2>
          </Stack>
          <Box>
            <Image
              src='/images/smart-x.png'
              alt='empower'
              width={500}
              height={500}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
              unoptimized
            />
          </Box>
        </Stack>
      </ContainerLayout>
    </Box>
  );
};

export default SmartXSection;
