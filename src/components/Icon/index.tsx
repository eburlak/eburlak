'use client';

import styled from 'styled-components';

import { duration } from '@/styles/animations';

/** Base sizing for every icon; use as `<Icon as={ArrowLeftIcon} />`. */
const Icon = styled.svg<{ $rotate?: boolean }>`
  width: 16px;
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
  rotate: ${({ $rotate }) => ($rotate ? '180deg' : '0deg')};
  transition:
    color ${duration.base}ms ease,
    rotate ${duration.base}ms ease;
`;

export default Icon;
