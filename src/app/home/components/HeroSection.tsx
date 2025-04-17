'use client';
import AnimatedCounter from '@/components/AnimatedCounter';
import ContainerLayout from '@/components/Container';
import Header from '@/components/Header';
import SpinningCircle from '@/components/SpinningCircle';
import {
  Avatar,
  AvatarGroup,
  Box,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const StyledBox = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px 20px;
  text-align: left;
`;

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'var(--hero-section-background)',
        maxHeight: { xs: '100%', sm: '812px', md: '812px' },
      }}
    >
      <ContainerLayout>
        {/* header  */}
        <Header />

        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          justifyContent='space-between'
          flexDirection={{ xs: 'column-reverse', sm: 'column', md: 'row' }}
          sx={{
            marginTop: { xs: '24px', sm: '32px', md: '66px' },
          }}
        >
          <Box
            sx={{
              maxWidth: '592px',
              width: '100%',
            }}
          >
            <Typography
              variant='h1'
              fontSize={{ xs: '2.5rem', sm: '4.5rem' }}
              fontWeight={700}
              lineHeight={1.2}
            >
              Next-gen saas tool to increase your net sales
            </Typography>
            <Typography
              fontSize={{ xs: '1rem', sm: '1.25rem' }}
              fontWeight={400}
              lineHeight={2}
            >
              Creating account to our website and use it for your required time.
              We are ready to give you support all the time.
            </Typography>

            <Box
              mt={{ xs: 1, sm: 3 }}
              display='flex'
              flexDirection={{ xs: 'column', sm: 'row' }}
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
              alignItems='center'
              gap={{ xs: '16px', sm: '24px' }}
            >
              <Box
                component='button'
                sx={{
                  backgroundColor: 'var(--black-button-background)',
                  color: '#fff',
                  fontWeight: 600,
                  '&:hover': {
                    fontWeight: 600,
                  },
                }}
                className='Secodey-button'
              >
                Get started for free
              </Box>

              <Box component='button' className='Secodey-button'>
                Book a free demo
              </Box>
            </Box>
          </Box>
          <Box textAlign={'center'} position={'relative'}>
            <Image
              src='/images/hero-1.png'
              // src='/images/hero-image.png'
              alt='hero'
              width={538}
              height={512}
              style={{
                maxHeight: '512px',
                height: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
              }}
              unoptimized
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '35%',
                left: '10%',
                transform: 'translate(-50%, -50%)',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <StyledBox>
                <Stack direction={'row'} spacing={3}>
                  <AvatarGroup max={2} spacing='small'>
                    <Avatar
                      alt='Remy Sharp'
                      src='/static/images/avatar/1.jpg'
                    />
                    <Avatar
                      alt='Travis Howard'
                      src='/static/images/avatar/2.jpg'
                    />
                  </AvatarGroup>
                  <Box textAlign={'left'}>
                    <AnimatedCounter
                      target={100}
                      suffix='K+'
                      fontSize={'1.5rem'}
                      fontWeight={600}
                    />
                    <Typography
                      fontSize={'0.875rem'}
                      fontWeight={500}
                      color='#888888'
                    >
                      Customers
                    </Typography>
                  </Box>
                </Stack>
                <Typography fontSize={'1.625rem'} fontWeight={500}>
                  View All Reviews
                </Typography>
              </StyledBox>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: '-20%',
                left: '80%',
                transform: 'translate(-50%, -50%)',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              <SpinningCircle />
            </Box>
          </Box>
        </Stack>
      </ContainerLayout>
      <svg
        width='100%'
        height='75'
        viewBox='0 0 1440 75'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 75H1440L738.895 0.994476C726.333 -0.331492 713.667 -0.331492 701.105 0.994475L0 75Z'
          fill='#B8DBE6'
        />
      </svg>
    </Box>
  );
};

export default HeroSection;
