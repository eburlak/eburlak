"use client";

import { createGlobalStyle } from "styled-components";

import { easing } from "./motion";
import { layout } from "./theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: oklch(1 0 0);
    --foreground: oklch(0.21 0.006 285.9);
    --muted: oklch(0.97 0.001 286.4);
    --muted-foreground: oklch(0.55 0.014 285.9);
    --edge: oklch(0.92 0.004 286.3);
    --accent: oklch(0.96 0.002 286.3);
    --online: oklch(0.7 0.15 162);
  }

  .dark {
    --background: oklch(0.16 0.004 285.8);
    --foreground: oklch(0.96 0.001 286.4);
    --muted: oklch(0.22 0.006 285.9);
    --muted-foreground: oklch(0.66 0.011 286);
    --edge: oklch(0.29 0.008 285.9);
    --accent: oklch(0.23 0.006 285.9);
    --online: oklch(0.75 0.16 162);
  }

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
    scroll-padding-top: ${layout.headerHeight};
    -webkit-text-size-adjust: 100%;
  }

  body {
    display: flex;
    min-height: 100%;
    flex-direction: column;
    overflow-x: hidden;
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans), system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  h1, h2, h3, h4 {
    font-size: inherit;
    font-weight: inherit;
  }

  ul, ol {
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

  img, svg {
    display: block;
    max-width: 100%;
  }

  code {
    font-family: var(--font-mono), ui-monospace, monospace;
  }

  ::selection {
    background-color: var(--foreground);
    color: var(--background);
  }

  /* Theme swap: the incoming palette is wiped in from the toggle that started it. */
  [data-theme-switch="on"]::view-transition-old(root),
  [data-theme-switch="on"]::view-transition-new(root) {
    mix-blend-mode: normal;
  }

  [data-theme-switch="on"]::view-transition-old(root) {
    animation: none;
  }

  [data-theme-switch="on"]::view-transition-new(root) {
    animation: theme-wipe 620ms ${easing.entrance} both;
  }

  @keyframes theme-wipe {
    from {
      clip-path: circle(0 at var(--theme-switch-x) var(--theme-switch-y));
    }
    to {
      clip-path: circle(
        var(--theme-switch-radius) at var(--theme-switch-x) var(--theme-switch-y)
      );
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
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
`;
