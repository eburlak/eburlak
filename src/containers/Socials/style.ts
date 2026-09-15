import styled from 'styled-components';

import Icon from '@/components/Icon';
import { dashedEdge } from '@/styles/mixins';
import { duration, easing } from '@/styles/animations';
import { font, media } from '@/styles/theme';

const COLUMNS = 5;

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: minmax(0, 1fr);

  ${media.small} {
    grid-template-columns: repeat(${COLUMNS}, minmax(0, 1fr));
  }
`;

/**
 * Rules sit between cells only - the outer edges belong to the column and to the
 * next heading. Both are keyed to the column count, so the grid survives a contact
 * being added or removed.
 */
export const Item = styled.li`
  &:nth-child(n + 2) {
    border-top: ${dashedEdge};
  }

  ${media.small} {
    border-right: ${dashedEdge};

    &:nth-child(${COLUMNS}n) {
      border-right: none;
    }

    &:nth-child(-n + ${COLUMNS}) {
      border-top: none;
    }

    &:nth-child(n + ${COLUMNS + 1}) {
      border-top: ${dashedEdge};
    }
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
  width: 12px;
  height: 12px;
  margin-left: auto;
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
    width: 16px;
    height: 16px;
  }
`;

export const Handle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
