import styled from 'styled-components';

import { dashedEdge } from '@/styles/mixins';
import { font } from '@/styles/theme';

export const Wrapper = styled.div`
  > * + * {
    border-top: ${dashedEdge};
  }

  > *:first-child {
    padding-top: 0;
  }

  > *:last-child {
    padding-bottom: 0;
  }
`;

export const Company = styled.div`
  padding: 16px 0;
`;

export const CompanyHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

export const CompanyName = styled.h3`
  font-family: ${font.mono};
  font-weight: 600;
  letter-spacing: -0.02em;

  a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export const Meta = styled.span`
  flex-shrink: 0;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Timeline = styled.div`
  margin-top: 12px;
  padding-left: 16px;
  border-left: ${dashedEdge};

  > * + * {
    margin-top: 16px;
  }
`;

export const Position = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: -21px;
    width: 8px;
    height: 8px;
    border: 1px solid ${({ theme }) => theme.colors.edge};
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const PositionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0 12px;
`;

export const PositionTitle = styled.h4`
  font-family: ${font.mono};
  font-size: 14px;
  font-weight: 600;
`;

export const Description = styled.ul`
  margin-top: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};

  li {
    display: flex;
    gap: 8px;
  }

  li + li {
    margin-top: 4px;
  }

  li::before {
    content: '-';
    color: ${({ theme }) => theme.colors.edge};
  }
`;

export const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;

  li {
    padding: 2px 6px;
    border: 1px solid ${({ theme }) => theme.colors.edge};
    border-radius: 6px;
    font-family: ${font.mono};
    font-size: 11px;
    color: ${({ theme }) => theme.colors.mutedForeground};
  }
`;
