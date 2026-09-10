"use client";

import type { ReactNode } from "react";
import styled from "styled-components";

import { screenLineAfter, screenLineBefore } from "@/styles/mixins";
import { color, font, layout } from "@/styles/theme";

const Wrapper = styled.section`
  counter-increment: section;
`;

/** Stays under the site header while its own section is being read. */
const Header = styled.div`
  ${screenLineBefore}
  ${screenLineAfter}
  position: sticky;
  top: ${layout.headerHeight};
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.625rem 1rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: color-mix(in srgb, var(--background) 82%, transparent);
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${font.mono};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${color.mutedForeground};

  &::before {
    content: counter(section, decimal-leading-zero) " /";
    color: ${color.edge};
  }
`;

export function Section({
  id,
  title,
  action,
  children,
}: {
  id: string;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Wrapper id={id}>
      <Header>
        <Title>{title}</Title>
        {action}
      </Header>

      {children}
    </Wrapper>
  );
}
