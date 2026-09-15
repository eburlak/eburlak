import styled from 'styled-components';

import { duration, easing } from '@/styles/animations';
import { font } from '@/styles/theme';

export const Wrapper = styled.article`
  padding: 16px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

export const Name = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${font.mono};
  font-weight: 600;
  letter-spacing: -0.02em;

  svg {
    width: 16px;
    height: 16px;
    color: #cb3837;
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const Version = styled.span`
  flex-shrink: 0;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Description = styled.p`
  margin-top: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  margin-top: 12px;
`;

export const InstallCommand = styled.code`
  padding: 4px 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
`;

export const Metrics = styled.dl`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 16px;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};

  div {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }

  dd {
    color: ${({ theme }) => theme.colors.foreground};
    font-variant-numeric: tabular-nums;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  font-family: ${font.mono};
  font-size: 12px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition: color ${duration.fast}ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }

  svg {
    width: 12px;
    height: 12px;
    transition: translate ${duration.base}ms ${easing.spring};
  }

  &:hover svg {
    translate: 2px -2px;
  }
`;
