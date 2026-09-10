"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import styled from "styled-components";

import { dashedEdge } from "@/styles/mixins";
import { color } from "@/styles/theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.125rem;
  border: ${dashedEdge};
  border-radius: 9999px;
`;

const Option = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease;
  background-color: ${({ $active }) => ($active ? color.accent : "transparent")};
  color: ${({ $active }) => ($active ? color.foreground : color.mutedForeground)};

  &:hover {
    color: ${color.foreground};
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

const themes = [
  { value: "system", label: "System", Icon: Monitor },
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
];

const subscribeToNothing = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false
  );

  return (
    <Wrapper>
      {themes.map(({ value, label, Icon }) => {
        const active = mounted && theme === value;

        return (
          <Option
            key={value}
            type="button"
            $active={active}
            aria-label={`Switch to ${label.toLowerCase()} theme`}
            aria-pressed={active}
            onClick={() => setTheme(value)}
          >
            <Icon />
          </Option>
        );
      })}
    </Wrapper>
  );
}
