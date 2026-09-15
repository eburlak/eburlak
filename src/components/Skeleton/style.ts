import styled, { keyframes } from 'styled-components';
import { hexToRgba } from '@/utils/color';

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

/** Hugs its bars when they have a fixed width, fills the row otherwise. */
export const Wrapper = styled.span<{ $fixed: boolean }>`
  display: inline-flex;
  flex-wrap: wrap;
  width: ${({ $fixed }) => ($fixed ? 'auto' : '100%')};
  align-items: center;
  gap: 10px;
  vertical-align: middle;
`;

export const Item = styled.span`
  flex: 1;
  display: block;
  background: ${({ theme }) => theme.colors.muted};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => hexToRgba(theme.colors.foreground, 0.14)},
      transparent
    );
    animation: ${shimmer} ease-in infinite 1s;
  }
`;
