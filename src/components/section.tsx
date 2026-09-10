"use client";

import type { ReactNode } from "react";
import styled from "styled-components";

import { screenLineAfter } from "@/styles/mixins";
import { color, font } from "@/styles/theme";

const Wrapper = styled.section`
  ${screenLineAfter}
`;

const Header = styled.div`
  ${screenLineAfter}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.625rem 1rem;
`;

const Title = styled.h2`
  font-family: ${font.mono};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${color.mutedForeground};
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
