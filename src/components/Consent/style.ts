import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';

import { dashedEdge } from '@/styles/mixins';
import { duration, easing } from '@/styles/animations';
import { font, layout, media } from '@/styles/theme';
import { hexToRgba } from '@/utils/color';

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 60;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: ${layout.contentWidth};
  padding: 16px;
  translate: -50% 0;
  border: ${dashedEdge};
  border-bottom: none;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => hexToRgba(theme.colors.background, 0.92)};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${rise} ${duration.slow}ms ${easing.entrance};
  }

  ${media.small} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
`;

export const Text = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const PolicyLink = styled(Link)`
  color: ${({ theme }) => theme.colors.foreground};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color ${duration.fast}ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.theme};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

export const Action = styled.button<{ $accent?: boolean }>`
  flex: 1;
  padding: 8px 14px;
  border: ${dashedEdge};
  border-radius: 9999px;
  white-space: nowrap;
  font-family: ${font.mono};
  font-size: 12px;
  cursor: pointer;
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

  ${({ $accent, theme }) =>
    $accent &&
    css`
      border: 1px solid ${theme.colors.foreground};
      background-color: ${theme.colors.foreground};
      color: ${theme.colors.background};

      &:hover {
        background-color: ${theme.colors.foreground};
      }
    `}
`;
