import React from 'react';
import { flushSync } from 'react-dom';

/** Only the newest wipe may clear the flag: a quick second click skips the first transition. */
let runningWipe: ViewTransition | null = null;

/** Wipes the incoming palette in as a circle growing out of the clicked control. */
export function applyWithWipe(
  event: React.MouseEvent<HTMLButtonElement>,
  applyTheme: () => void,
) {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (
    prefersReducedMotion ||
    typeof document.startViewTransition !== 'function'
  ) {
    applyTheme();
    return;
  }

  // Taken from the pressed control, not the pointer: a keyboard activation carries
  // clientX/clientY of 0, which would start every wipe in the top left corner.
  const bounds = event.currentTarget.getBoundingClientRect();

  const originX = bounds.left + bounds.width / 2;
  const originY = bounds.top + bounds.height / 2;
  const radius = Math.hypot(
    Math.max(originX * 2, window.innerWidth - originX),
    Math.max(originY * 2, window.innerHeight - originY),
  );

  // Chrome resolves px inside clip-path on ::view-transition-new(root) against the
  // snapshot's own pixels, so on a 2x display the origin lands at half the distance
  // from the top left corner. Percentages carry no scale and stay put.
  const radiusPercentageBasis =
    Math.hypot(window.innerWidth, window.innerHeight) / Math.SQRT2;

  root.style.setProperty(
    '--theme-switch-x',
    `${(originX / window.innerWidth) * 100}%`,
  );
  root.style.setProperty(
    '--theme-switch-y',
    `${(originY / window.innerHeight) * 100}%`,
  );
  root.style.setProperty(
    '--theme-switch-radius',
    `${(radius / radiusPercentageBasis) * 100}%`,
  );
  root.dataset.themeSwitch = 'on';

  const transition = document.startViewTransition(() => flushSync(applyTheme));
  runningWipe = transition;

  void transition.finished.finally(() => {
    if (runningWipe !== transition) {
      return;
    }

    runningWipe = null;
    delete root.dataset.themeSwitch;
  });
}
