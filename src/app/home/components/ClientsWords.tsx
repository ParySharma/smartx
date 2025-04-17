'use client';
import ContainerLayout from '@/components/Container';
import Header from '@/components/Header';
import {
  Avatar,
  Box,
  CardHeader,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Rating from '@mui/material/Rating';
import _map from 'lodash/map';
import { ClientCardContents } from '@/utils/constancts';
import { ApostoSvg } from '@/styles/allSvgs/homeSvgs';

const StyledBox = styled(Box)`
  border-radius: 12px;
  padding: 1.875rem;
  background: #fff;
  max-height: 394px;
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 36px 0px #0000000f;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: perspective(1000px) scale(1.05) rotateX(4deg) rotateY(4deg)
      translateY(-5px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.2);
  }
`;

const ClientsWords = () => {
  return (
    <Box
      mt={{
        xs: '3rem',
        md: '6.25rem',
      }}
      sx={{
        backgroundColor: 'var(--hero-section-background)',
        maxHeight: { xs: '100%', md: '812px' },
        minHeight: '786px',
      }}
      paddingBottom={{ xs: '2rem', md: '0' }}
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
          mt={{
            xs: '3rem',
            md: '6.25rem',
          }}
        >
          <Box maxWidth={'770px'} mb={{ xs: '2rem', md: '5rem' }} gap='20px'>
            <Typography
              variant='h2'
              fontSize={{
                xs: '2.5rem',
                md: '2.75rem',
              }}
              fontWeight={600}
              mt={{ xs: '2rem', md: '6.25rem' }}
            >
              Words from happy clients
            </Typography>
            <Typography
              fontSize='1.375rem'
              fontWeight={400}
              color='#7A7A7A'
              lineHeight={1.5}
            >
              {`Lorem Ipsum is simply dummy a and typesetting industry. Lorem
              Ipsum has been t industry's standard dummy text ever since.Lorem
              Ips dummy.`}
            </Typography>
          </Box>
          <Box
            component='button'
            sx={{
              backgroundColor: 'transparent',
              color: 'var(--black-button-background)',
              padding: '16px 42px',
              fontSize: '1.125rem',
              fontWeight: 500,
              cursor: 'pointer',
              border: '1px solid var(--black-button-background)',
            }}
            className='Secodey-button'
          >
            See More Reviews
          </Box>
        </Stack>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems='center'
          gap={{
            xs: '1rem',
            md: '1.875rem',
          }}
          mt={{ xs: '2rem', md: '2.25rem' }}
          padding={{ xs: '1.25rem', md: '0' }}
        >
          {_map(ClientCardContents, (item, index) => (
            <StyledBox key={index} width={'370px'}>
              <Stack
                direction='row'
                gap='1rem'
                justifyContent='space-between'
                alignItems='flex-start'
                mb='1.875rem'
              >
                <Rating
                  name='read-only'
                  value={4.5}
                  readOnly
                  precision={0.5}
                  size='small'
                  sx={{
                    '& .MuiRating-iconFilled': {
                      color: '#FFB800',
                    },
                  }}
                />
                <Box>
                  <ApostoSvg /> <ApostoSvg />
                </Box>
              </Stack>
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
                {`Lorem Ipsum is simply dxt of the printing and typesetting industrLorem Ipsum has been the industr dummy text ever.Lorem Ipsum is simply dmy text.`}
              </Typography>
              <CardHeader
                avatar={<Avatar aria-label='recipe'>P</Avatar>}
                title={item?.name}
                subheader='Manager at TechMatter'
                sx={{
                  padding: 0,
                  marginTop: '2.5rem',
                }}
                titleTypographyProps={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: '#000000',
                }}
              />
            </StyledBox>
          ))}
        </Stack>
      </ContainerLayout>
    </Box>
  );
};

export default ClientsWords;
