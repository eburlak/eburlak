'use client';

import { useTheme } from 'next-themes';
import {
  useSyncExternalStore,
  type CSSProperties,
  type MouseEvent,
} from 'react';
import { flushSync } from 'react-dom';
import styled from 'styled-components';

import MonitorIcon from '@/assets/icons/monitor.svg';
import MoonIcon from '@/assets/icons/moon.svg';
import SunIcon from '@/assets/icons/sun.svg';
import { Icon } from '@/components/Icon';
import { dashedEdge } from '@/styles/mixins';
import { duration, easing } from '@/styles/motion';
import { color } from '@/styles/theme';

const OPTION_SIZE = '28px';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;
  border: ${dashedEdge};
  border-radius: 9999px;
`;

/** The lit pill slides to the chosen theme instead of every button owning a background. */
const Thumb = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: ${OPTION_SIZE};
  height: ${OPTION_SIZE};
  border-radius: 9999px;
  background-color: ${color.accent};
  translate: calc(var(--thumb-index) * ${OPTION_SIZE}) 0;
  opacity: var(--thumb-opacity);
  pointer-events: none;
  transition:
    translate ${duration.base}ms ${easing.spring},
    opacity ${duration.fast}ms linear;
`;

const Option = styled.button<{ $active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${OPTION_SIZE};
  height: ${OPTION_SIZE};
  border-radius: 9999px;
  cursor: pointer;
  transition:
    color ${duration.fast}ms ease,
    scale ${duration.base}ms ${easing.spring};
  color: ${({ $active }) =>
    $active ? color.foreground : color.mutedForeground};

  &:hover {
    color: ${color.foreground};
    scale: 1.12;
  }

  &:active {
    scale: 0.94;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const themes = [
  { value: 'system', label: 'System', icon: MonitorIcon },
  { value: 'light', label: 'Light', icon: SunIcon },
  { value: 'dark', label: 'Dark', icon: MoonIcon },
];

const subscribeToNothing = () => () => {};

/** Only the newest wipe may clear the flag: a quick second click skips the first transition. */
let runningWipe: ViewTransition | null = null;

/** Wipes the incoming palette in as a circle growing out of the clicked control. */
function applyWithWipe(
  event: MouseEvent<HTMLButtonElement>,
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

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  // The stored theme is unknown until hydration, so the thumb starts parked and hidden.
  const activeIndex = mounted
    ? themes.findIndex((option) => option.value === theme)
    : -1;

  return (
    <Wrapper>
      <Thumb
        aria-hidden="true"
        style={
          {
            '--thumb-index': Math.max(activeIndex, 0),
            '--thumb-opacity': activeIndex >= 0 ? 1 : 0,
          } as CSSProperties
        }
      />

      {themes.map(({ value, label, icon }) => {
        const active = mounted && theme === value;

        return (
          <Option
            key={value}
            type="button"
            $active={active}
            aria-label={`Switch to ${label.toLowerCase()} theme`}
            aria-pressed={active}
            onClick={(event) => applyWithWipe(event, () => setTheme(value))}
          >
            <Icon as={icon} />
          </Option>
        );
      })}
    </Wrapper>
  );
}
