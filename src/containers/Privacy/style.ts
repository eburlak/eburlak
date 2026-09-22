import styled, { css } from 'styled-components';

import { dashedEdge } from '@/styles/mixins';
import { duration, easing } from '@/styles/animations';
import { font } from '@/styles/theme';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;

  th,
  td {
    padding: 8px 12px 8px 0;
    border-bottom: ${dashedEdge};
    vertical-align: top;
  }

  th {
    font-family: ${font.mono};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.mutedForeground};
  }

  td {
    color: ${({ theme }) => theme.colors.mutedForeground};
  }

  code {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.foreground};
    white-space: nowrap;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  & + p {
    margin-top: 12px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const pill = css`
  padding: 8px 14px;
  border-radius: 9999px;
  font-size: 12px;
`;

export const Action = styled.button`
  ${pill}
  border: 1px solid ${({ theme }) => theme.colors.foreground};
  background-color: ${({ theme }) => theme.colors.foreground};
  color: ${({ theme }) => theme.colors.background};
  font-family: ${font.mono};
  cursor: pointer;
  transition: scale ${duration.base}ms ${easing.spring};

  &:hover {
    scale: 1.03;
  }

  &:active {
    scale: 0.97;
  }
`;

export const Link = styled.a`
  ${pill}
  border: ${dashedEdge};
  font-family: ${font.mono};
  color: ${({ theme }) => theme.colors.mutedForeground};
  transition:
    background-color ${duration.fast}ms ease,
    color ${duration.fast}ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

export const Updated = styled.p`
  padding: 16px;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
