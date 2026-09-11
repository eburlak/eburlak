"use client";

import type { CSSProperties } from "react";
import styled from "styled-components";

import { Icon } from "@/components/Icon";
import { stack } from "@/data/stack";
import { visuallyHidden } from "@/styles/mixins";
import { duration, easing } from "@/styles/motion";
import { color, font } from "@/styles/theme";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px;
`;

const Item = styled.li`
  position: relative;
`;

const Tooltip = styled.span`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  z-index: 30;
  translate: -50% 4px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${color.foreground};
  color: ${color.background};
  font-family: ${font.mono};
  font-size: 10px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity ${duration.fast}ms ease,
    translate ${duration.base}ms ${easing.spring};
`;

/** Each icon carries its own brand colour, which only shows up under the cursor. */
const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  color: ${color.mutedForeground};
  transition:
    color ${duration.fast}ms ease,
    background-color ${duration.fast}ms ease,
    scale ${duration.base}ms ${easing.spring},
    translate ${duration.base}ms ${easing.spring};

  &:hover {
    background-color: ${color.accent};
    color: var(--brand, ${color.foreground});
    scale: 1.12;
    translate: 0 -2px;
  }

  &:active {
    scale: 0.94;
  }

  &:hover + ${Tooltip} {
    opacity: 1;
    translate: -50% 0;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Label = styled.span`
  ${visuallyHidden}
`;

export function TechStack() {
  return (
    <List>
      {stack.map((item) => (
        <Item key={item.name}>
          <Link
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            style={item.brand ? ({ "--brand": item.brand } as CSSProperties) : undefined}
          >
            <Icon as={item.icon} />
            <Label>{item.name}</Label>
          </Link>
          <Tooltip aria-hidden="true">{item.name}</Tooltip>
        </Item>
      ))}
    </List>
  );
}
