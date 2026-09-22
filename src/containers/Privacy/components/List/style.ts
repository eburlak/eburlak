import styled from 'styled-components';

import { font } from '@/styles/theme';

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};

  &:not(:first-child) {
    margin-top: 12px;
  }

  & + p {
    margin-top: 12px;
  }

  li {
    position: relative;
    padding-left: 18px;
  }

  li::before {
    content: '-';
    position: absolute;
    left: 0;
    font-family: ${font.mono};
    color: ${({ theme }) => theme.colors.edge};
  }
`;
