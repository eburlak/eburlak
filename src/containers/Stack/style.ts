import styled from 'styled-components';

import { duration, easing } from '@/styles/animations';
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

export const Group = styled.div`
  padding: 16px 0;
`;

export const Label = styled.h3`
  font-family: ${font.mono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

/** Each icon carries its own brand colour, which only shows up under the cursor. */
export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid ${({ theme }) => theme.colors.edge};
  border-radius: 8px;
  font-size: 13px;
  transition:
    color ${duration.fast}ms ease,
    background-color ${duration.fast}ms ease,
    border-color ${duration.fast}ms ease,
    translate ${duration.base}ms ${easing.spring};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.mutedForeground};
    translate: 0 -2px;
  }

  &:active {
    translate: 0 0;
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.mutedForeground};
    transition: color ${duration.fast}ms ease;
  }

  &:hover svg {
    color: var(--brand, ${({ theme }) => theme.colors.foreground});
  }
`;
