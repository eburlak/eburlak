'use client';

import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
    scroll-padding-top: ${theme.layout.headerHeight};
    -webkit-text-size-adjust: 100%;
  }

  body {
    display: flex;
    min-height: 100%;
    flex-direction: column;
    overflow-x: hidden;
    background-color: ${theme.colors.background};
    color: ${theme.colors.foreground};
    font-family: ${theme.font.sans}, system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  h1,
  h2,
  h3,
  h4 {
    font-size: inherit;
    font-weight: inherit;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  code {
    font-family: ${theme.font.mono}, ui-monospace, monospace;
  }

  ::selection {
    background-color: ${theme.colors.foreground};
    color: ${theme.colors.background};
  }

  /* The transition overlay would otherwise swallow clicks for its whole duration. */
  ::view-transition {
    pointer-events: none;
  }

  /* Theme swap: the incoming palette is wiped in from the toggle that started it. */
  [data-theme-switch='on']::view-transition-old(root),
  [data-theme-switch='on']::view-transition-new(root) {
    mix-blend-mode: normal;
  }

  [data-theme-switch='on']::view-transition-old(root) {
    animation: none;
  }

  [data-theme-switch='on']::view-transition-new(root) {
    animation: theme-wipe 600ms linear both;
  }

  @keyframes theme-wipe {
    from {
      clip-path: circle(0% at var(--theme-switch-x) var(--theme-switch-y));
    }
    to {
      clip-path: circle(
        var(--theme-switch-radius) at var(--theme-switch-x)
          var(--theme-switch-y)
      );
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }

    ::view-transition-group(*),
    ::view-transition-old(*),
    ::view-transition-new(*) {
      animation-duration: 0.01ms !important;
      animation-delay: 0ms !important;
    }
  }
`}
`;

export default GlobalStyle;
