'use client';

import { useInView } from '@/hooks';

import type { TProps } from './types';

const Visibility = ({ children }: TProps) => {
  const { ref, visible } = useInView();

  return children({ ref, visible });
};

export default Visibility;
