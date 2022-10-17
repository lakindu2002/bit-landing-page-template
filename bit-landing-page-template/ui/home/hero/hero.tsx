import { Container } from '@enlear/bit-landing-page-template.layouts.container';
import { useTheme } from '@mui/material';
import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

export type HeroProps = {
  /**
   * the children to be rendered within the hero container.
   */
  children?: ReactNode;
};

export function Hero({ children }: HeroProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.warning.light,
        width: '100%',
        py: 8,
        minHeight: 400,
        minWidth: '100%',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: {
              sm: '100%',
              xs: '100%',
              md: '80%',
              xl: '80%',
              lg: '80%',
            },
            textAlign: 'center',
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}
