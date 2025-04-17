'use client';
import React, { useState } from 'react';
import { Box, Stack, Typography, Drawer, IconButton } from '@mui/material';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import _map from 'lodash/map';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Modules } from '@/utils/constancts';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigation = (link: string) => {
    setDrawerOpen(false); // Close drawer on navigation
    router.push(link);
  };

  return (
    <Box>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{ py: 4 }}
      >
        {/* Logo */}
        <Image
          src='/images/logo/logo.png'
          alt='Logo'
          width={152}
          height={36}
          style={{ cursor: 'pointer' }}
          unoptimized
        />

        {/* Desktop Nav */}
        <Stack
          direction='row'
          spacing={2}
          display={{ xs: 'none', sm: 'flex' }}
          alignItems='center'
        >
          {_map(Modules, (item: any, index: number) => {
            const isActive = pathname === item?.link;
            return (
              <Typography
                key={index}
                variant='body1'
                fontWeight={isActive ? 700 : 400}
                sx={{ cursor: 'pointer', px: 2 }}
                onClick={() => router.push(item?.link)}
              >
                {item?.title}
              </Typography>
            );
          })}
        </Stack>

        {/* Right Section */}
        <Stack direction='row' alignItems='center'>
          {/* Sign In (desktop) */}
          <Typography
            variant='body1'
            sx={{
              cursor: 'pointer',
              px: 2,
              display: { xs: 'none', sm: 'block' },
            }}
            onClick={() => router.push('/item')}
          >
            Sign In
          </Typography>
          {/* Try for Free Button */}
          <Box
            sx={{
              background: '#0D0D0D',
              px: 3,
              py: 1.75,
              cursor: 'pointer',
              boxShadow: '0px 4px 4px rgba(115, 110, 239, 0.15)',
              ml: { xs: 0, sm: 2 },
            }}
            onClick={() => router.push('/item')}
          >
            <Typography variant='body1' fontWeight={500} color='#FFFFFF'>
              Try For Free
            </Typography>
          </Box>

          {/* Hamburger Icon (mobile) */}
          <IconButton
            sx={{ ml: 2, display: { sm: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Stack>

      {/* Mobile Drawer */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 3 }}>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            mb={2}
          >
            <Typography variant='h6'>Menu</Typography>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={2}>
            {_map(Modules, (item: any, index: number) => {
              const isActive = pathname === item?.link;
              return (
                <Typography
                  key={index}
                  fontWeight={isActive ? 700 : 400}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => handleNavigation(item?.link)}
                >
                  {item?.title}
                </Typography>
              );
            })}
            <Typography
              sx={{ cursor: 'pointer', mt: 2 }}
              onClick={() => handleNavigation('/item')}
            >
              Sign In
            </Typography>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
