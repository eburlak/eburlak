"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import styled from "styled-components";

import ArrowLeftIcon from "@/assets/icons/arrowLeft.svg";
import { Icon } from "@/components/Icon";
import { MainColumn } from "@/components/main-column";
import { color, font } from "@/styles/theme";

const Header = styled.div`
  padding: 24px 16px;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${color.mutedForeground};
  transition: color 150ms ease;

  &:hover {
    color: ${color.foreground};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Title = styled.h1`
  margin-top: 12px;
  font-family: ${font.mono};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
`;

const Description = styled.p`
  margin-top: 6px;
  font-size: 14px;
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
          <Icon as={ArrowLeftIcon} />
          Back to home
        </BackLink>

        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Header>

      {children}
    </MainColumn>
  );
}
