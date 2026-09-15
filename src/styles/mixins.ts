import { css } from 'styled-components';

import { font } from './theme';

export const dashedEdge = css`1px dashed ${({ theme }) => theme.colors.edge}`;

/**
 * Dashed rule anchored to the element edge but drawn across the whole viewport.
 * It sits inside the element's own bottom edge: a sticky element keeps it in view, and
 * the backdrop of whatever follows cannot paint over it.
 */
export const screenLineAfter = css`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100vw;
    translate: -50% 0;
    border-bottom: ${dashedEdge};
    pointer-events: none;
  }
`;

export const stripes = css`
  background-image: repeating-linear-gradient(
    -45deg,
    ${({ theme }) => theme.colors.edge} 0,
    ${({ theme }) => theme.colors.edge} 1px,
    transparent 1px,
    transparent 6px
  );
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

export const monoLabel = css`
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
