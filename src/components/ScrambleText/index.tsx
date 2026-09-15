'use client';

import React from 'react';

import { useInView } from '@/hooks';

import { getScrambledText } from './helpers';

import * as S from './style';

const frameInterval = 40;
const characterDelay = 55;
const bottomEdgeIgnored = '0px 0px -100px 0px';

type TProps = {
  text: string;
};

const ScrambleText = ({ text }: TProps) => {
  const { ref, visible } = useInView<HTMLSpanElement>({
    rootMargin: bottomEdgeIgnored,
  });
  const [scrambled, setScrambled] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (
      !visible ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let frameId = 0;
    let startedAt = 0;
    let lastFrameAt = 0;

    const render = (now: number) => {
      if (startedAt === 0) {
        startedAt = now;
      }

      const revealedCount = Math.floor((now - startedAt) / characterDelay);

      if (revealedCount >= text.length) {
        setScrambled(null);
        return;
      }

      if (now - lastFrameAt >= frameInterval) {
        lastFrameAt = now;
        setScrambled(getScrambledText(text, revealedCount));
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      setScrambled(null);
    };
  }, [text, visible]);

  return (
    <span ref={ref}>
      <S.Text>{text}</S.Text>
      <span aria-hidden="true">{scrambled ?? text}</span>
    </span>
  );
};

export default ScrambleText;
