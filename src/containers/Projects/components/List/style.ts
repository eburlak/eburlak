import styled from 'styled-components';

import { dashedEdge } from '@/styles/mixins';

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
