import { css } from "styled-components";

import { color, font } from "./theme";

export const dashedEdge = `1px dashed ${color.edge}`;

/**
 * Dashed rule anchored to the element edge but drawn across the whole viewport.
 * It sits on the element's own top edge, so a sticky element keeps it in view.
 */
export const screenLineBefore = css`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    translate: -50% 0;
    border-top: ${dashedEdge};
    pointer-events: none;
  }
`;

export const screenLineAfter = css`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100vw;
    translate: -50% 1px;
    border-bottom: ${dashedEdge};
    pointer-events: none;
  }
`;

export const stripes = css`
  background-image: repeating-linear-gradient(
    -45deg,
    ${color.edge} 0,
    ${color.edge} 1px,
    transparent 1px,
    transparent 6px
  );
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

export const monoLabel = css`
  font-family: ${font.mono};
  font-size: 0.75rem;
  color: ${color.mutedForeground};
`;
