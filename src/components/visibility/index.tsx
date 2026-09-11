'use client';

import { useInView } from '@/hooks/use-in-view';
import React from 'react';

type TProps = {
  children: (props: {
    visible?: boolean;
    ref: React.RefObject<HTMLElement | null>;
  }) => React.ReactElement;
};

const Visibility = React.memo<TProps>(({ children }) => {
  const { ref, visible } = useInView();

  return children({
    ref,
    visible,
  });
});

Visibility.displayName = 'Visibility';

export default Visibility;
