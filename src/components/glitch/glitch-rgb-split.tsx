"use client";

import styled, { keyframes } from "styled-components";

import { color, font } from "@/styles/theme";

const glitchRed = "#ff2d55";
const glitchCyan = "#00e5ff";

const sliceTop = keyframes`
  0% { clip-path: inset(8% 0 82% 0); transform: translate(-2px, -1px); }
  15% { clip-path: inset(48% 0 34% 0); transform: translate(3px, 1px); }
  30% { clip-path: inset(72% 0 12% 0); transform: translate(-4px, 0); }
  45% { clip-path: inset(22% 0 66% 0); transform: translate(2px, -2px); }
  60% { clip-path: inset(60% 0 26% 0); transform: translate(-3px, 1px); }
  75% { clip-path: inset(36% 0 52% 0); transform: translate(4px, 0); }
  90% { clip-path: inset(84% 0 6% 0); transform: translate(-2px, 2px); }
  100% { clip-path: inset(14% 0 76% 0); transform: translate(2px, -1px); }
`;

const sliceBottom = keyframes`
  0% { clip-path: inset(66% 0 22% 0); transform: translate(3px, 1px); }
  16% { clip-path: inset(28% 0 58% 0); transform: translate(-3px, -1px); }
  32% { clip-path: inset(12% 0 80% 0); transform: translate(4px, 2px); }
  48% { clip-path: inset(78% 0 8% 0); transform: translate(-2px, 0); }
  64% { clip-path: inset(42% 0 44% 0); transform: translate(3px, -2px); }
  80% { clip-path: inset(56% 0 30% 0); transform: translate(-4px, 1px); }
  100% { clip-path: inset(20% 0 70% 0); transform: translate(2px, 0); }
`;

const flicker = keyframes`
  0%, 92%, 100% { opacity: 1; }
  93% { opacity: 0.72; }
  95% { opacity: 1; }
  96% { opacity: 0.5; }
  97% { opacity: 1; }
`;

const drift = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-100%); }
`;

const Stage = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 8px;
  animation: ${flicker} 6s infinite steps(1);
`;

const Code = styled.p`
  position: relative;
  font-family: ${font.mono};
  font-size: clamp(80px, 24vw, 176px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.06em;
  color: ${color.foreground};
  user-select: none;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    background-color: ${color.background};
  }

  &::before {
    text-shadow: -0.05em 0 ${glitchRed};
    animation: ${sliceTop} 2.4s infinite linear alternate-reverse;
  }

  &::after {
    text-shadow: 0.05em 0 ${glitchCyan};
    animation: ${sliceBottom} 3.1s infinite linear alternate-reverse;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

const Scanline = styled.span`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    to bottom,
    color-mix(in oklab, var(--foreground) 8%, transparent) 0,
    color-mix(in oklab, var(--foreground) 8%, transparent) 1px,
    transparent 1px,
    transparent 4px
  );
  animation: ${drift} 8s infinite linear;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export function GlitchRgbSplit({ text }: { text: string }) {
  return (
    <Stage>
      <Code data-text={text}>{text}</Code>
      <Scanline />
    </Stage>
  );
}
