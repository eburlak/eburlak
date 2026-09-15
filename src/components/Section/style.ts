import styled from 'styled-components';

import { screenLineAfter } from '@/styles/mixins';
import { font, layout } from '@/styles/theme';
import { hexToRgba } from '@/utils/color';

export const Wrapper = styled.section`
  ${screenLineAfter}
  counter-increment: section;
`;

/** Stays under the site header while its own section is being read. */
export const Header = styled.div`
  ${screenLineAfter}
  position: sticky;
  top: ${layout.headerHeight};
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: ${({ theme }) => hexToRgba(theme.colors.background, 0.82)};
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${font.mono};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mutedForeground};

  &::before {
    content: counter(section, decimal-leading-zero) ' /';
    color: ${({ theme }) => theme.colors.edge};
  }
`;

export const Content = styled.div`
  padding: 16px;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.mutedForeground};
  }

  p + p {
    margin-top: 12px;
  }
`;
