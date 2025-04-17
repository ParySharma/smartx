'use client';
import React from 'react';
import ContainerLayout from '@/components/Container';
import { Box, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import _map from 'lodash/map';
import { ExplorCardContents } from '@/utils/constancts';

const StyledBox = styled(Box)`
  border-radius: 12px;
  padding: 0;
  background: #fff;
  max-height: 394px;
  height: 100%;
`;

const ExplorSection = () => {
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
            xs: '2.5rem',
            md: '2.75rem',
          }}
          textAlign='center'
          fontWeight={600}
          mb={{ xs: '2rem', md: '4.375rem' }}
        >
          Explore our latest resources and updates
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
          {_map(ExplorCardContents, (item, index) => (
            <StyledBox
              key={index}
              width={'370px'}
              padding={{ xs: '1.25rem', md: '0' }}
            >
              <Image
                src={item?.icon}
                alt='explore'
                width={100}
                height={100}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
                unoptimized
              />
              <Box
                display='flex'
                maxWidth='194px'
                justifyContent='space-between'
                alignItems='center'
                m='1.25rem 0'
                sx={{
                  cursor: 'pointer',
                  borderRadius: '60px',
                  padding: '0.625rem 1.25rem',
                  background: '#F2F2F2',
                }}
              >
                Development
              </Box>
              <Typography
                variant='body1'
                fontSize={{
                  xs: '0.875rem',
                  md: '1.375rem',
                }}
                fontWeight={600}
                lineHeight='1.5rem'
              >
                {item?.description}
              </Typography>
            </StyledBox>
          ))}
        </Stack>
      </ContainerLayout>
    </Box>
  );
};

export default ExplorSection;
