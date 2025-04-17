'use client';
import React from 'react';
import ContainerLayout from '@/components/Container';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import _map from 'lodash/map';
import { CompanyLogos } from '@/utils/constancts';

const CompanysSection = () => {
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
            xs: '1rem',
            md: '1.5rem',
          }}
          textAlign='center'
          mb='2rem'
        >
          Trusted by great companies
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems='center'
          flexWrap='wrap'
          gap={{
            xs: '2rem',
            md: '4rem',
          }}
        >
          {_map(CompanyLogos, (logo, index) => (
            <Image
              src={logo}
              alt='company logo'
              width={150}
              height={50}
              style={{
                maxHeight: '39.75px',
                width: 'auto',
                height: 'auto',
              }}
              key={index}
              unoptimized
            />
          ))}
        </Stack>
      </ContainerLayout>
    </Box>
  );
};

export default CompanysSection;
