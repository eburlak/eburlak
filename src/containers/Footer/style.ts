import Link from 'next/link';
import styled, { css } from 'styled-components';

import { dashedEdge, stripes } from '@/styles/mixins';
import { duration } from '@/styles/animations';
import { font, layout } from '@/styles/theme';

export const Wrapper = styled.footer`
  width: 100%;
  max-width: ${layout.contentWidth};
  margin: 0 auto;
  border-left: ${dashedEdge};
  border-right: ${dashedEdge};
`;

export const Gutter = styled.div`
  ${stripes}
  width: 100%;
  height: 32px;
`;

export const Credits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 24px 16px;
  text-align: center;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const hoverable = css`
  transition: color ${duration.fast}ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.foreground};
  }
`;

export const PolicyLink = styled(Link)`
  ${hoverable}
`;

export const Settings = styled.button`
  font: inherit;
  color: inherit;
  cursor: pointer;
  ${hoverable}
`;
