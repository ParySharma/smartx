'use client';
import React from 'react';
import ContainerLayout from '@/components/Container';
import { Box, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import _map from 'lodash/map';
import { CardContents } from '@/utils/constancts';

const EmpowerSection = () => {
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
          flexDirection={{ xs: 'column-reverse', sm: 'column', md: 'row' }}
          alignItems='center'
          gap={{
            xs: '1rem',
            md: '1.875rem',
          }}
        >
          <Box>
            <Image
              src='/images/empower.png'
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
          <Stack maxWidth={'595px'} gap={2}>
            <Typography
              fontSize={{ xs: '2.5rem', md: '2.75rem' }}
              fontWeight={600}
              lineHeight='1.2'
            >
              {`Empower your project's success with our agency`}
            </Typography>
            <Typography
              fontSize={{ xs: '1rem', md: '1.125rem' }}
              fontWeight={400}
            >
              {`Lorem Ipsum is simply dummy text of to and typesetting industry. Lorem Ipsum he been the industrandard dummy text ever since the 1500s, when an unknown printer took a galley of t scrambled it to make a type specimen book.`}
            </Typography>
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
              Contact with us
            </Box>
          </Stack>
        </Stack>
      </ContainerLayout>
    </Box>
  );
};

export default EmpowerSection;
