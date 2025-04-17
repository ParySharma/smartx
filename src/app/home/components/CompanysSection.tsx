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
            xs: '1.5rem',
            md: '1.5rem',
          }}
          textAlign='center'
          mb='2rem'
        >
          Trusted by great companies
        </Typography>
        <Stack
          direction={'row'}
          justifyContent='space-between'
          alignItems='center'
          gap={{
            xs: '2rem',
            md: '4rem',
          }}
          overflow='auto'
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
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
