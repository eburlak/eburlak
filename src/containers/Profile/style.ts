import styled from 'styled-components';

import { dashedEdge, screenLineAfter } from '@/styles/mixins';
import { font, media } from '@/styles/theme';

export const Wrapper = styled.div`
  ${screenLineAfter}
  display: flex;
`;

export const AvatarFrame = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 128px;
  height: 128px;
  border-right: ${dashedEdge};

  ${media.small} {
    width: 160px;
    height: 160px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 12px 16px;
`;

export const Name = styled.h1`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${font.mono};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;

  ${media.small} {
    font-size: 24px;
  }

  svg {
    width: 16px;
    height: 16px;
    color: #3b82f6;
  }
`;

export const JobTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};

  strong {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

export const Location = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const Availability = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const OnlineDot = styled.span`
  position: relative;
  display: flex;
  width: 6px;
  height: 6px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.online};
  }

  &::before {
    animation: ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2.4);
      opacity: 0;
    }
  }
`;
