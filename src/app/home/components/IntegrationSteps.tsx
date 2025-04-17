'use client';
import React from 'react';
import ContainerLayout from '@/components/Container';
import { Box, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import _map from 'lodash/map';
import { CardContents } from '@/utils/constancts';

const StyledBox = styled(Box)`
  border-radius: 12px;
  padding: 1.875rem;
  background: #fff;
  max-height: 394px;
  height: 100%;
  box-shadow: 0px 4px 36px 0px #0000000f;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: perspective(1000px) scale(1.05) rotateX(4deg) rotateY(4deg)
      translateY(-5px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
  }
`;

const IntegrationSteps = () => {
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
          Easy 3 Steps Integration
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
          {_map(CardContents, (item, index) => (
            <StyledBox key={index} width={'370px'}>
              {item?.icon}
              <Typography
                variant='h4'
                fontSize={{
                  xs: '1.125rem',
                  md: '1.5rem',
                }}
                fontWeight={600}
                mt='1.875rem'
                mb='0.625rem'
              >
                {item?.title}
              </Typography>
              <Typography
                variant='body1'
                fontSize={{
                  xs: '0.875rem',
                  md: '1rem',
                }}
                fontWeight={400}
                color='#7A7A7A'
                lineHeight='1.5rem'
              >
                {item?.description}
              </Typography>
              <Box
                display='flex'
                maxWidth='194px'
                justifyContent='space-between'
                alignItems='center'
                mt='2.5rem'
                mb='1.875rem'
                sx={{
                  cursor: 'pointer',
                  borderRadius: '60px',
                  padding: '0.625rem 1.25rem',
                  '&:hover': {
                    background: '#F2F2F2',
                  },
                }}
              >
                Get Started Now{' '}
                <svg
                  width='16'
                  height='14'
                  viewBox='0 0 16 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M8.29289 0.292893C7.90237 0.683417 7.90237 1.31658 8.29289 1.70711L12.5858 6H1C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8H12.5858L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L15.7071 7.70711C16.0976 7.31658 16.0976 6.68342 15.7071 6.29289L9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893Z'
                    fill='#0D0D0D'
                  />
                </svg>
              </Box>
            </StyledBox>
          ))}
        </Stack>
      </ContainerLayout>
    </Box>
  );
};

export default IntegrationSteps;
