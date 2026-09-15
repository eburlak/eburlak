import styled from 'styled-components';

import { dashedEdge } from '@/styles/mixins';
import { font } from '@/styles/theme';

export const Wrapper = styled.div`
  > * + * {
    border-top: ${dashedEdge};
  }

  > *:first-child {
    padding-top: 0;
  }

  > *:last-child {
    padding-bottom: 0;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 0;
`;

export const School = styled.h3`
  font-family: ${font.mono};
  font-weight: 600;
  letter-spacing: -0.02em;
`;

export const Degree = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Period = styled.span`
  flex-shrink: 0;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
