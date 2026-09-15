'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '@/providers/Theme';

import themes from './theme';

const Provider = ({ children }: React.PropsWithChildren) => {
  const { theme } = useTheme();

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Provider;
