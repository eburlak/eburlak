import React from 'react';

export type TProps = {
  children: (props: {
    visible?: boolean;
    ref: React.RefObject<HTMLElement | null>;
  }) => React.ReactElement;
};
