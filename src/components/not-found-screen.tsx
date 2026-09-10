"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

import { GlitchSlices } from "@/components/glitch/glitch-slices";
import { dashedEdge, screenLineAfter } from "@/styles/mixins";
import { color, font } from "@/styles/theme";

const Wrapper = styled.div`
  ${screenLineAfter}
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 4rem 1rem;
  text-align: center;
`;

const Status = styled.p`
  font-family: ${font.mono};
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${color.mutedForeground};
`;

const Message = styled.p`
  max-width: 32rem;
  font-size: 0.875rem;
  color: ${color.mutedForeground};
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  border: ${dashedEdge};
  border-radius: 9999px;
  font-family: ${font.mono};
  font-size: 0.75rem;
  transition: background-color 150ms ease;

  &:hover {
    background-color: ${color.accent};
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

export function NotFoundScreen() {
  return (
    <Wrapper>
      <GlitchSlices text="404" />

      <Status>Page not found</Status>

      <Message>
        The page you are looking for has been moved, renamed, or never existed in the first
        place.
      </Message>

      <HomeLink href="/">
        <ArrowLeft />
        Back to home
      </HomeLink>
    </Wrapper>
  );
}
