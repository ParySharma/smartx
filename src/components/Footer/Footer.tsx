'use client';
import React from 'react';
import ContainerLayout from '@/components/Container';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import _map from 'lodash/map';

const footerLinks = [
  {
    title: 'Compare',
    items: ['Madgicx', 'AdEspresso', 'TrustAds', 'Adzooma'],
  },
  {
    title: 'Extra',
    items: ['Feature', 'Case Study', 'Book a Demo', 'Terms'],
  },
  {
    title: 'More templates',
    items: ['Nexo', 'Cloud', 'Techty', 'Simplly'],
  },
];

const socialIcons = [
  FacebookIcon,
  TwitterIcon,
  SportsEsportsIcon,
  LinkedInIcon,
];

const Footer = () => {
  return (
    <Box
      mt={{ xs: '3rem', md: '6.25rem' }}
      sx={{ background: '#fff', py: { xs: 6, md: 8 } }}
    >
      <ContainerLayout>
        <Grid2 container spacing={4}>
          {/* Left Section */}
          <Grid2
            container
            direction='column'
            spacing={2}
            size={{ xs: 12, md: 6 }}
          >
            <Stack maxWidth={312}>
              <Image
                src='/images/logo/logo.png'
                alt='Logo'
                width={152}
                height={36}
                style={{ cursor: 'pointer', marginBottom: '1rem' }}
                unoptimized
              />
              <Typography fontSize='1rem' color='text.secondary'>
                Lorem Ipsum is simply dxt of the printing and typesetting
                industrLorem Ipsum has been the industr dummy text ever. Lorem
                Ipsum is simply dmy text.
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1}>
              {_map(socialIcons, (Icon, index) => (
                <IconButton key={index} size='large'>
                  <Icon fontSize='large' />
                </IconButton>
              ))}
            </Stack>
            <Typography fontSize='1.125rem' color='text.secondary'>
              © 2024 SMARTX All rights reserved.
            </Typography>
          </Grid2>

          {/* Right Section */}
          <Grid2
            container
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            size={{ xs: 12, md: 6 }}
          >
            {_map(footerLinks, ({ title, items }, idx) => (
              <Grid2 key={idx} size={{ xs: 12, md: 4 }}>
                <Typography fontSize='1.375rem' fontWeight={600}>
                  {title}
                </Typography>
                <Stack spacing={1}>
                  {_map(items, (item, i) => (
                    <Typography
                      key={i}
                      fontSize='1.125rem'
                      color='#2D2D2D'
                      lineHeight={2.5}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </ContainerLayout>
    </Box>
  );
};

export default Footer;
