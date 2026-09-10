"use client";

import { useEffect, useState, type CSSProperties } from "react";
import styled from "styled-components";

import { useInView } from "@/hooks/use-in-view";
import { dashedEdge } from "@/styles/mixins";
import { color, font } from "@/styles/theme";

const SAMPLE_MS = 200;
const HISTORY_LENGTH = 32;
const FPS_CEILING = 120;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 1rem;
  padding: 0.625rem 1rem;
  border-bottom: ${dashedEdge};
  font-family: ${font.mono};
  font-size: 0.6875rem;
  color: ${color.mutedForeground};
`;

const Field = styled.span`
  display: flex;
  align-items: baseline;
  gap: 0.375rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Value = styled.span`
  color: ${color.foreground};
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
  text-transform: none;
`;

const Chart = styled.span`
  display: flex;
  align-items: flex-end;
  align-self: center;
  gap: 1px;
  height: 0.75rem;
`;

const Bar = styled.span`
  width: 2px;
  height: var(--bar-height);
  background-color: ${color.foreground};
  opacity: 0.55;
  transition: height 150ms linear;
`;

const emptyReadout = {
  uptimeMs: 0,
  fps: 0,
  viewport: "",
  history: Array.from<number>({ length: HISTORY_LENGTH }).fill(0),
};

function formatUptime(uptimeMs: number) {
  const totalSeconds = uptimeMs / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const tenths = Math.floor((uptimeMs % 1000) / 100);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${tenths}`;
}

/** Live frame budget of the page it sits on - the footer's own instrument panel. */
export function Telemetry() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: false, rootMargin: "0px" });
  const [readout, setReadout] = useState(emptyReadout);

  useEffect(() => {
    if (!inView) return;

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
  }, [inView]);

  const isMeasuring = readout.viewport !== "";

  return (
    <Wrapper ref={ref}>
      <Field>
        uptime <Value>{isMeasuring ? formatUptime(readout.uptimeMs) : "--:--.-"}</Value>
      </Field>

      <Field>
        fps <Value>{isMeasuring ? readout.fps : "--"}</Value>
        <Chart aria-hidden="true">
          {readout.history.map((fps, index) => (
            <Bar
              key={index}
              style={
                { "--bar-height": `${Math.min(fps / FPS_CEILING, 1) * 100}%` } as CSSProperties
              }
            />
          ))}
        </Chart>
      </Field>

      <Field>
        viewport <Value>{isMeasuring ? readout.viewport : "--"}</Value>
      </Field>
    </Wrapper>
  );
}
