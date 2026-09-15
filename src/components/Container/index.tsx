'use client';

import styled from 'styled-components';

import { dashedEdge, screenLineAfter } from '@/styles/mixins';
import { layout } from '@/styles/theme';

const Container = styled.main`
  ${screenLineAfter}
  width: 100%;
  max-width: ${layout.contentWidth};
  flex: 1;
  margin: 0 auto;
  border-left: ${dashedEdge};
  border-right: ${dashedEdge};
  counter-reset: section;
`;

export default Container;
