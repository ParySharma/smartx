'use client';

// Libraries
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

// Assets
const notFoundImage = '/images/not_found_turf.png'; // Replace with a turf-themed 404 image

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: #f4f4f4;
  color: #333;
  padding: 20px;

  .image-container {
    max-width: 400px;
    width: 100%;
    margin-bottom: 20px;
  }

  .error-code {
    font-size: 100px;
    font-weight: bold;
    color: #1976d2;
  }

  .message {
    font-size: 20px;
    font-weight: 500;
    color: #555;
    margin-top: 10px;
  }

  .button-container {
    margin-top: 20px;
  }
`;

const NotFound = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Box className='image-container'>
        <Image
          src={notFoundImage}
          alt='404 Not Found'
          width={400}
          height={300}
          priority
          unoptimized
          style={{
            objectFit: 'cover',
            mixBlendMode: 'multiply',
          }}
        />
      </Box>
      <Typography variant='h1' className='error-code'>
        404
      </Typography>
      <Typography variant='h4' fontWeight='bold'>
        {`Oops! Looks like you're offside.`}
      </Typography>
      <Typography variant='body1' className='message'>
        {`The page you are looking for doesn't exist or has been moved.`}
      </Typography>
      <Box className='button-container'>
        <Button
          variant='contained'
          color='primary'
          size='large'
          onClick={() => router.push('/home')}
        >
          Back to Home
        </Button>
      </Box>
    </Wrapper>
  );
};

export default NotFound;
