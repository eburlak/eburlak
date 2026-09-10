"use client";

import { useEffect, useState } from "react";

const frames = ["|", "/", "-", "\\"];
const FRAME_MS = 90;

/** Text-mode spinner - the same one every CLI has. */
export function Spinner() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setFrameIndex((current) => (current + 1) % frames.length),
      FRAME_MS
    );

    return () => clearInterval(intervalId);
  }, []);

  return <span aria-hidden="true">{frames[frameIndex]}</span>;
}
