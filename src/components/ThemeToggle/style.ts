import styled from 'styled-components';

import { dashedEdge } from '@/styles/mixins';
import { duration, easing } from '@/styles/animations';

const OPTION_SIZE = '28px';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;
  border: ${dashedEdge};
  border-radius: 9999px;
`;

/** The lit pill slides to the chosen theme instead of every button owning a background. */
export const Thumb = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: ${OPTION_SIZE};
  height: ${OPTION_SIZE};
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.accent};
  translate: calc(var(--thumb-index) * ${OPTION_SIZE}) 0;
  opacity: var(--thumb-opacity);
  pointer-events: none;
  transition:
    translate ${duration.base}ms ${easing.spring},
    opacity ${duration.fast}ms linear;
`;

export const Option = styled.button<{ $active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${OPTION_SIZE};
  height: ${OPTION_SIZE};
  border-radius: 9999px;
  cursor: pointer;
  transition:
    color ${duration.fast}ms ease,
    scale ${duration.base}ms ${easing.spring};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.foreground : theme.colors.mutedForeground};

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
    scale: 1.12;
  }

  &:active {
    scale: 0.94;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
