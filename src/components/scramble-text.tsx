"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

import { visuallyHidden } from "@/styles/mixins";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/\\[]{}#$%&*+=-_";
const frameInterval = 40;
const characterDelay = 55;

const RealText = styled.span`
  ${visuallyHidden}
`;

function getScrambled(text: string, revealedCount: number) {
  return text
    .split("")
    .map((character, index) => {
      if (index < revealedCount || character === " ") return character;
      return glyphs[Math.floor(Math.random() * glyphs.length)];
    })
    .join("");
}

export function ScrambleText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;
    let startedAt = 0;
    let lastFrameAt = 0;

    const render = (now: number) => {
      if (startedAt === 0) startedAt = now;

      const revealedCount = Math.floor((now - startedAt) / characterDelay);

      if (revealedCount >= text.length) {
        setDisplayed(text);
        return;
      }

      if (now - lastFrameAt >= frameInterval) {
        lastFrameAt = now;
        setDisplayed(getScrambled(text, revealedCount));
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(frameId);
  }, [text]);

  return (
    <>
      <RealText>{text}</RealText>
      <span aria-hidden="true">{displayed}</span>
    </>
  );
}
