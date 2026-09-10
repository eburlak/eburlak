"use client";

import styled from "styled-components";

import { BrandIcon } from "@/components/brand-icon";
import { stack } from "@/data/stack";
import { visuallyHidden } from "@/styles/mixins";
import { color } from "@/styles/theme";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  color: ${color.mutedForeground};
  transition: color 150ms ease, background-color 150ms ease;

  &:hover {
    background-color: ${color.accent};
    color: ${color.foreground};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Label = styled.span`
  ${visuallyHidden}
`;

export function TechStack() {
  return (
    <List>
      {stack.map((item) => (
        <li key={item.name}>
          <Link href={item.href} target="_blank" rel="noreferrer noopener" title={item.name}>
            <BrandIcon icon={item.icon} />
            <Label>{item.name}</Label>
          </Link>
        </li>
      ))}
    </List>
  );
}
