"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import styled from "styled-components";

import { MainColumn } from "@/components/main-column";
import { screenLineAfter } from "@/styles/mixins";
import { color, font } from "@/styles/theme";

const Header = styled.div`
  ${screenLineAfter}
  padding: 1.5rem 1rem;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  width: fit-content;
  font-family: ${font.mono};
  font-size: 0.75rem;
  color: ${color.mutedForeground};
  transition: color 150ms ease;

  &:hover {
    color: ${color.foreground};
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

const Title = styled.h1`
  margin-top: 0.75rem;
  font-family: ${font.mono};
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
`;

const Description = styled.p`
  margin-top: 0.375rem;
  font-size: 0.875rem;
  color: ${color.mutedForeground};
`;

export function PageShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <MainColumn>
      <Header>
        <BackLink href="/">
          <ArrowLeft />
          Back to home
        </BackLink>

        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Header>

      {children}
    </MainColumn>
  );
}
