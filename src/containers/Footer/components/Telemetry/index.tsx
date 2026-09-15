'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { useInView } from '@/hooks';

import { getFormattedUptime } from './helpers';

import * as S from './style';

const SAMPLE_MS = 200;
const HISTORY_LENGTH = 32;
const FPS_CEILING = 120;

const emptyReadout = {
  uptimeMs: 0,
  fps: 0,
  viewport: '',
  history: Array.from<number>({ length: HISTORY_LENGTH }).fill(0),
};

/** Live frame budget of the page it sits on - the footer's own instrument panel. */
const Telemetry = () => {
  const t = useTranslations('footer');
  const { ref, visible } = useInView<HTMLDivElement>({ once: true });
  const [readout, setReadout] = React.useState(emptyReadout);

  React.useEffect(() => {
    if (!visible) {
      return;
    }

    let frameId = 0;
    let framesInSample = 0;
    let sampleStartedAt = performance.now();

    const render = (now: number) => {
      framesInSample += 1;
      const elapsed = now - sampleStartedAt;

      if (elapsed >= SAMPLE_MS) {
        const fps = Math.round((framesInSample / elapsed) * 1000);
        framesInSample = 0;
        sampleStartedAt = now;

        setReadout((current) => ({
          uptimeMs: now,
          fps,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          history: [...current.history, fps].slice(-HISTORY_LENGTH),
        }));
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(frameId);
  }, [visible]);

  const isMeasuring = readout.viewport !== '';

  return (
    <S.Wrapper ref={ref}>
      <S.Field>
        uptime{' '}
        <S.Value>
          {isMeasuring ? getFormattedUptime(readout.uptimeMs) : '--:--.-'}
        </S.Value>
      </S.Field>

      <S.Field>
        {t('fps')} <S.Value>{isMeasuring ? readout.fps : '--'}</S.Value>
        <S.Chart aria-hidden="true">
          {readout.history.map((fps, index) => (
            <S.Bar
              key={index}
              style={
                {
                  '--bar-height': `${Math.min(fps / FPS_CEILING, 1) * 100}%`,
                } as React.CSSProperties
              }
            />
          ))}
        </S.Chart>
      </S.Field>

      <S.Field>
        {t('viewport')}{' '}
        <S.Value>{isMeasuring ? readout.viewport : '--'}</S.Value>
      </S.Field>
    </S.Wrapper>
  );
};

export default Telemetry;
