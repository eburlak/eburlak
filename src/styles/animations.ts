import { css, keyframes } from 'styled-components';

export const duration = {
  fast: 150,
  base: 260,
  slow: 420,
} as const;

export const easing = {
  entrance: 'cubic-bezier(0.16, 1, 0.3, 1)',
  spring: 'cubic-bezier(0.34, 1.42, 0.64, 1)',
} as const;

type TAnimateHeight = {
  height?: string;
  padding?: {
    start: string;
    end: string;
  };
  margin?: {
    start: string;
    end: string;
  };
};

export const animateHeightKeyframes = (props: TAnimateHeight = {}) => {
  const { padding, margin, height = '100px' } = props;

  return keyframes`
    0% {
      max-height: 0;
      overflow: hidden;
      ${
        padding &&
        css`
          padding: ${padding.start};
        `
      }
      ${
        margin &&
        css`
          margin: ${margin.start};
        `
      }
    }
    100% {
      max-height: ${height};
      overflow: visible;
      ${
        padding &&
        css`
          padding: ${padding.end};
        `
      }
      ${
        margin &&
        css`
          margin: ${margin.end};
        `
      }
    }
  `;
};

export const animateHeight = (props?: TAnimateHeight) => css`
  animation: ${animateHeightKeyframes(props)} 0.6s;
`;
