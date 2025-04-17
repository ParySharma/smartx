'use client';
import React from 'react';
import ContainerLayout from '@/components/Container';
import { Box, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import _map from 'lodash/map';
import { CardContents } from '@/utils/constancts';

const CustomerSupport = () => {
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
          <Stack maxWidth={'552px'} gap={2}>
            <Typography
              fontSize={{ xs: '2.5rem', md: '2.75rem' }}
              fontWeight={600}
              lineHeight='1.2'
            >
              {`24/7 customer support & services`}
            </Typography>
            <Typography
              fontSize={{ xs: '1rem', md: '1.125rem' }}
              fontWeight={400}
            >
              {`Lorem Ipsum is simply dummy tering and typesetting industry. Lorem Ipsum has been t industry's standard dummy text ever since.Lorem Ips dummy textprinting and typesetting industry.`}
            </Typography>

            <Box
              component='button'
              sx={{
                backgroundColor: 'var(--black-button-background)',
                color: '#fff',
                maxWidth: '262px',
                fontWeight: 600,
                '&:hover': {
                  fontWeight: 600,
                },
              }}
              className='Secodey-button'
            >
              Get Started For Free
            </Box>
          </Stack>
          <Box>
            <Image
              src='/images/support.png'
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

export default CustomerSupport;
