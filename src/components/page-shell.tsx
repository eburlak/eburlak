"use client";

import Link from "next/link";
import type { ReactNode, RefObject } from "react";
import styled from "styled-components";

import ArrowLeftIcon from "@/assets/icons/arrowLeft.svg";
import { Icon } from "@/components/Icon";
import { MainColumn } from "@/components/main-column";
import { ScrambleText } from "@/components/scramble-text";
import Visibility from "@/components/Visibility";
import { screenLineAfter } from "@/styles/mixins";
import { duration, easing } from "@/styles/motion";
import { color, font } from "@/styles/theme";

const Header = styled.div`
  ${screenLineAfter}
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
  transition: color ${duration.fast}ms ease;

  &:hover {
    color: ${color.foreground};
  }

  svg {
    width: 14px;
    height: 14px;
    transition: translate ${duration.base}ms ${easing.spring};
  }

  &:hover svg {
    translate: -4px 0;
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

        <Visibility>
          {({ ref, visible }) => (
            <Title ref={ref as RefObject<HTMLHeadingElement>}>
              {visible ? <ScrambleText text={title} /> : title}
            </Title>
          )}
        </Visibility>
        {description && <Description>{description}</Description>}
      </Header>

      {children}
    </MainColumn>
  );
}
