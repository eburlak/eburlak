import styled from 'styled-components';

import { font } from '@/styles/theme';

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${font.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Source = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Dot = styled.span<{ $live: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background-color: ${({ theme, $live }) => ($live ? theme.colors.online : 'transparent')};
  box-shadow: inset 0 0 0 1px
    ${({ theme, $live }) => ($live ? 'transparent' : theme.colors.edge)};
  transition: background-color 260ms ease;
`;

export const RefetchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition:
    color 150ms ease,
    background-color 150ms ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.foreground};
  }

  &:disabled {
    cursor: progress;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  &:disabled svg {
    animation: spin 900ms linear infinite;
  }

  @keyframes spin {
    to {
      rotate: 360deg;
    }
  }
`;
