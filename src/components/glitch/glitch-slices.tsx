"use client";

import styled, { keyframes } from "styled-components";

import { color, font } from "@/styles/theme";

const fringeRed = "#ff2d55";
const fringeCyan = "#00e5ff";

const slices = [
  { top: 2, height: 10, shift: "-0.16em", duration: 3.1, delay: 0 },
  { top: 15, height: 6, shift: "0.24em", duration: 2.3, delay: 0.45 },
  { top: 26, height: 4, shift: "-0.3em", duration: 4.2, delay: 1.1 },
  { top: 38, height: 11, shift: "0.12em", duration: 2.7, delay: 0.2 },
  { top: 52, height: 5, shift: "-0.22em", duration: 3.6, delay: 1.8 },
  { top: 63, height: 8, shift: "0.28em", duration: 2.9, delay: 0.9 },
  { top: 76, height: 4, shift: "-0.1em", duration: 4.7, delay: 2.4 },
  { top: 86, height: 9, shift: "0.18em", duration: 3.3, delay: 1.5 },
];

const tear = keyframes`
  0%, 78% { opacity: 0; transform: translate3d(0, 0, 0); }
  79% { opacity: 1; transform: translate3d(var(--shift), 0, 0); }
  84% { opacity: 1; transform: translate3d(calc(var(--shift) * -0.5), 0, 0); }
  88% { opacity: 1; transform: translate3d(calc(var(--shift) * 0.25), 0, 0); }
  92%, 100% { opacity: 0; transform: translate3d(0, 0, 0); }
`;

const jolt = keyframes`
  0%, 89%, 100% { transform: none; }
  90% { transform: translate3d(-0.02em, 0, 0) skewX(3deg); }
  93% { transform: translate3d(0.02em, 0, 0) skewX(-2deg); }
  96% { transform: none; }
`;

const Stage = styled.div`
  position: relative;
  overflow: hidden;
  padding: 0 0.5rem;
  animation: ${jolt} 5.5s infinite steps(1);
`;

const Text = styled.p`
  position: relative;
  font-family: ${font.mono};
  font-size: clamp(5rem, 24vw, 11rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.06em;
  color: ${color.foreground};
  user-select: none;
`;

const Slice = styled.span<{
  $top: number;
  $height: number;
  $shift: string;
  $duration: number;
  $delay: number;
}>`
  position: absolute;
  inset: 0;
  opacity: 0;
  --shift: ${({ $shift }) => $shift};
  clip-path: ${({ $top, $height }) => `inset(${$top}% 0 ${100 - $top - $height}% 0)`};
  background-color: ${color.background};
  text-shadow: 0.02em 0 ${fringeCyan}, -0.02em 0 ${fringeRed};
  animation: ${tear} ${({ $duration }) => $duration}s ${({ $delay }) => $delay}s infinite
    steps(1);

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export function GlitchSlices({ text }: { text: string }) {
  return (
    <Stage>
      <Text>
        {text}

        {slices.map((slice) => (
          <Slice
            key={slice.top}
            aria-hidden="true"
            $top={slice.top}
            $height={slice.height}
            $shift={slice.shift}
            $duration={slice.duration}
            $delay={slice.delay}
          >
            {text}
          </Slice>
        ))}
      </Text>
    </Stage>
  );
}
