'use client';

import React from 'react';

const frames = ['|', '/', '-', '\\'];
const FRAME_MS = 90;

/** Text-mode spinner - the same one every CLI has. */
const Spinner = () => {
  const [frameIndex, setFrameIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setFrameIndex((current) => (current + 1) % frames.length),
      FRAME_MS,
    );

    return () => clearInterval(intervalId);
  }, []);

  return <span aria-hidden="true">{frames[frameIndex]}</span>;
};

export default Spinner;
