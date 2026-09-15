import NextLink from 'next/link';
import styled, { keyframes } from 'styled-components';

import { dashedEdge, screenLineAfter } from '@/styles/mixins';
import { font, layout, media } from '@/styles/theme';
import { hexToRgba } from '@/utils/color';

export const Wrapper = styled.header<{ $scrolled: boolean }>`
  ${screenLineAfter}
  position: sticky;
  top: 0;
  z-index: 50;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  background-color: ${({ theme, $scrolled }) =>
    $scrolled ? hexToRgba(theme.colors.background, 0.8) : 'transparent'};
  transition: background-color 150ms ease;
`;

const progressGrow = keyframes`
  from { scale: 0 1; }
  to { scale: 1 1; }
`;

/** How far down the document the reader is - drawn by the scroll timeline itself. */
export const ScrollProgress = styled.span`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.foreground};
  pointer-events: none;

  @supports (animation-timeline: scroll()) {
    @media (prefers-reduced-motion: no-preference) {
      display: block;
      transform-origin: left center;
      scale: 0 1;
      animation: ${progressGrow} linear both;
      animation-timeline: scroll(root block);
    }
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: ${layout.headerHeight};
  max-width: ${layout.contentWidth};
  margin: 0 auto;
  padding: 0 16px;
  border-left: ${dashedEdge};
  border-right: ${dashedEdge};
`;

export const Brand = styled(NextLink)`
  font-family: ${font.mono};
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 16px;

  ${media.small} {
    display: flex;
  }
`;

export const Link = styled(NextLink)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color 150ms ease;

  &:hover,
  &[data-active='true'] {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;
