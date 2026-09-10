"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 900;

const easeOutExpo = (progress: number) =>
  progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

/** Rolls a number up from its previous value whenever the target changes. */
export function useCountUp(target: number | null) {
  const [value, setValue] = useState(target ?? 0);
  const startValueRef = useRef(0);

  useEffect(() => {
    if (target === null) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animationDuration = prefersReducedMotion ? 0 : DURATION_MS;
    const startValue = startValueRef.current;
    const distance = target - startValue;
    let frameId = 0;
    let startedAt = 0;

    const render = (now: number) => {
      if (startedAt === 0) startedAt = now;

      const progress =
        animationDuration === 0 ? 1 : Math.min((now - startedAt) / animationDuration, 1);
      const current = Math.round(startValue + distance * easeOutExpo(progress));

      setValue(current);
      startValueRef.current = current;

      if (progress < 1) frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return target === null ? null : value;
}
