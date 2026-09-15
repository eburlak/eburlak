import styled from 'styled-components';

import { dashedEdge } from '@/styles/mixins';
import { font } from '@/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px 16px;
  padding: 10px 16px;
  border-bottom: ${dashedEdge};
  font-family: ${font.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Field = styled.span`
  display: flex;
  align-items: baseline;
  gap: 6px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.foreground};
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
  text-transform: none;
`;

export const Chart = styled.span`
  display: flex;
  align-items: flex-end;
  align-self: center;
  gap: 1px;
  height: 12px;
`;

export const Bar = styled.span`
  width: 2px;
  height: var(--bar-height);
  background-color: ${({ theme }) => theme.colors.foreground};
  opacity: 0.55;
  transition: height 150ms linear;
`;
