import styled from 'styled-components';

import { dashedEdge, stripes } from '@/styles/mixins';
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
  padding: 24px 16px;
  text-align: center;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
