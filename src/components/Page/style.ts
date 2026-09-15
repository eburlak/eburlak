import Link from 'next/link';
import styled from 'styled-components';

import { screenLineAfter } from '@/styles/mixins';
import { duration, easing } from '@/styles/animations';
import { font } from '@/styles/theme';

export const Header = styled.div`
  ${screenLineAfter}
  padding: 24px 16px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color ${duration.fast}ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }

  svg {
    width: 14px;
    height: 14px;
    transition: translate ${duration.base}ms ${easing.spring};
  }

  &:hover svg {
    translate: -4px 0;
  }
`;

export const Title = styled.h1`
  margin-top: 12px;
  font-family: ${font.mono};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
`;

export const Description = styled.p`
  margin-top: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
