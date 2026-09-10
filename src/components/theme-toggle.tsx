"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore, type CSSProperties, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import styled from "styled-components";

import MonitorIcon from "@/assets/icons/monitor.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import SunIcon from "@/assets/icons/sun.svg";
import { Icon } from "@/components/icon";
import { dashedEdge } from "@/styles/mixins";
import { duration, easing } from "@/styles/motion";
import { color } from "@/styles/theme";

const OPTION_SIZE = "1.75rem";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.125rem;
  border: ${dashedEdge};
  border-radius: 9999px;
`;

/** The lit pill slides to the chosen theme instead of every button owning a background. */
const Thumb = styled.span`
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
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
  color: ${({ $active }) => ($active ? color.foreground : color.mutedForeground)};

  &:hover {
    color: ${color.foreground};
    scale: 1.12;
  }

  &:active {
    scale: 0.94;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

const themes = [
  { value: "system", label: "System", icon: MonitorIcon },
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
];

const subscribeToNothing = () => () => {};

/** Wipes the incoming palette in as a circle growing out of the clicked control. */
function applyWithWipe(event: MouseEvent<HTMLButtonElement>, applyTheme: () => void) {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || typeof document.startViewTransition !== "function") {
    applyTheme();
    return;
  }

  const originX = event.clientX;
  const originY = event.clientY;
  const radius = Math.hypot(
    Math.max(originX, window.innerWidth - originX),
    Math.max(originY, window.innerHeight - originY)
  );

  root.style.setProperty("--theme-switch-x", `${originX}px`);
  root.style.setProperty("--theme-switch-y", `${originY}px`);
  root.style.setProperty("--theme-switch-radius", `${radius}px`);
  root.dataset.themeSwitch = "on";

  const transition = document.startViewTransition(() => flushSync(applyTheme));

  void transition.finished.finally(() => {
    delete root.dataset.themeSwitch;
  });
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false
  );

  // The stored theme is unknown until hydration, so the thumb starts parked and hidden.
  const activeIndex = mounted ? themes.findIndex((option) => option.value === theme) : -1;

  return (
    <Wrapper>
      <Thumb
        aria-hidden="true"
        style={
          {
            "--thumb-index": Math.max(activeIndex, 0),
            "--thumb-opacity": activeIndex >= 0 ? 1 : 0,
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
