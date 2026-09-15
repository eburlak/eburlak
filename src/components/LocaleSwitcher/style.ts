import styled from 'styled-components';

import { duration, easing } from '@/styles/animations';
import { dashedEdge } from '@/styles/mixins';
import { font } from '@/styles/theme';

const OPTION_WIDTH = '32px';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;
  border: ${dashedEdge};
  border-radius: 9999px;
`;

/** Mirrors the theme toggle: one lit pill slides instead of every option owning a background. */
export const Thumb = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: ${OPTION_WIDTH};
  height: 28px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.accent};
  translate: calc(var(--thumb-index) * ${OPTION_WIDTH}) 0;
  pointer-events: none;
  transition: translate ${duration.base}ms ${easing.spring};
`;

export const Option = styled.button<{ $active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${OPTION_WIDTH};
  height: 28px;
  border-radius: 9999px;
  cursor: pointer;
  font-family: ${font.mono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
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
`;
