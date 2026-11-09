import styled, { css } from 'styled-components';

import Icon from '@/components/Icon';
import { dashedEdge, getColumnsCss } from '@/styles/mixins';
import { duration, easing } from '@/styles/animations';
import { font, media } from '@/styles/theme';

const getEdgesCss = (columns: number) => css`
  &:nth-child(n) {
    border-top: ${dashedEdge};
    border-right: ${dashedEdge};
  }

  &:nth-child(-n + ${columns}) {
    border-top: none;
  }

  &:nth-child(${columns}n),
  &:last-child {
    border-right: none;
  }
`;

const getGridCss = (columns: number) => css`
  ${getColumnsCss(columns)}
  ${getEdgesCss(columns)}
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  min-width: 0;
  ${getGridCss(1)}

  ${media.small} {
    ${getGridCss(3)}
  }
`;

export const Link = styled.a`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  transition: background-color ${duration.fast}ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

/** Marks the cell as outbound and leans out of it under the cursor. */
export const Jump = styled(Icon)`
  flex-shrink: 0;
  width: 12px;
  height: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition:
    color ${duration.fast}ms ease,
    translate ${duration.base}ms ${easing.spring};

  ${Link}:hover & {
    color: ${({ theme }) => theme.colors.foreground};
    translate: 2px -2px;
  }
`;

export const Name = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;

  svg:first-child {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
  }
`;

export const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Handle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
