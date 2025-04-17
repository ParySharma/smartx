'use client';

// Libraries
import Container, { ContainerProps } from '@mui/material/Container';
import { SCREEN_SOLUTION } from '@/utils/constancts';
import { styled } from '@mui/material';

const ContainerStyled = styled(Container)`
  &&.MuiContainer-root {
    padding: 0px;

    ${SCREEN_SOLUTION.TABLET} {
      padding: 0 15px;
    }
    ${SCREEN_SOLUTION.LAPTOP} {
      padding: 0 15px;
    }
    ${SCREEN_SOLUTION.MOBILE} {
      padding: 0 15px;
    }

    ${SCREEN_SOLUTION.MINIMUM_DESKTOP} {
      max-width: 1170px;
      // max-width: 1436.5px;
    }
  }
`;

export default function ContainerLayout({
  children,
  ...rest
}: ContainerProps & {
  children: React.ReactNode;
}) {
  return (
    <ContainerStyled id='container' {...rest}>
      {children}
    </ContainerStyled>
  );
}
