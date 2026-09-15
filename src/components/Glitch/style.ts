import styled, { keyframes } from 'styled-components';

import { font } from '@/styles/theme';

const fringeRed = '#ff2d55';
const fringeCyan = '#00e5ff';

const tear = keyframes`
  0%, 78% { opacity: 0; transform: translate3d(0, 0, 0); }
  79% { opacity: 1; transform: translate3d(var(--shift), 0, 0); }
  84% { opacity: 1; transform: translate3d(calc(var(--shift) * -0.5), 0, 0); }
  88% { opacity: 1; transform: translate3d(calc(var(--shift) * 0.25), 0, 0); }
  92%, 100% { opacity: 0; transform: translate3d(0, 0, 0); }
`;

const jolt = keyframes`
  0%, 89%, 100% { transform: none; }
  90% { transform: translate3d(-0.02em, 0, 0) skewX(3deg); }
  93% { transform: translate3d(0.02em, 0, 0) skewX(-2deg); }
  96% { transform: none; }
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 8px;
  animation: ${jolt} 5.5s infinite steps(1);
`;

export const Text = styled.p`
  position: relative;
  font-family: ${font.mono};
  font-size: clamp(80px, 24vw, 176px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.foreground};
  user-select: none;
`;

export const Slice = styled.span<{
  $top: number;
  $height: number;
  $shift: string;
  $duration: number;
  $delay: number;
}>`
  position: absolute;
  inset: 0;
  opacity: 0;
  --shift: ${({ $shift }) => $shift};
  clip-path: ${({ $top, $height }) => `inset(${$top}% 0 ${100 - $top - $height}% 0)`};
  background-color: ${({ theme }) => theme.colors.background};
  text-shadow:
    0.02em 0 ${fringeCyan},
    -0.02em 0 ${fringeRed};
  animation: ${tear} ${({ $duration }) => $duration}s ${({ $delay }) => $delay}s
    infinite steps(1);

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;
