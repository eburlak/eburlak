import Link from 'next/link';
import styled from 'styled-components';

import { dashedEdge, screenLineAfter } from '@/styles/mixins';
import { duration, easing } from '@/styles/animations';
import { font } from '@/styles/theme';

export const Wrapper = styled.div`
  ${screenLineAfter}
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 64px 16px;
  text-align: center;
`;

export const Status = styled.p`
  font-family: ${font.mono};
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

/** The request that failed, echoed back the way a log line would put it. */
export const Trace = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 100%;
  padding: 6px 10px;
  border: ${dashedEdge};
  border-radius: 6px;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};

  code {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

export const Message = styled.p`
  max-width: 512px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: ${dashedEdge};
  border-radius: 9999px;
  font-family: ${font.mono};
  font-size: 12px;
  transition:
    background-color ${duration.fast}ms ease,
    scale ${duration.base}ms ${easing.spring};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    scale: 1.03;
  }

  &:active {
    scale: 0.97;
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
