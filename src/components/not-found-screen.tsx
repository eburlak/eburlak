"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import styled from "styled-components";

import ArrowLeftIcon from "@/assets/icons/arrowLeft.svg";
import { GlitchSlices } from "@/components/glitch/glitch-slices";
import { Icon } from "@/components/icon";
import { ScrambleText } from "@/components/scramble-text";
import { dashedEdge, screenLineAfter, screenLineBefore } from "@/styles/mixins";
import { color, font } from "@/styles/theme";

const Wrapper = styled.div`
  ${screenLineBefore}
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

/** The request that failed, echoed back the way a log line would put it. */
const Trace = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-width: 100%;
  padding: 0.375rem 0.625rem;
  border: ${dashedEdge};
  border-radius: 0.375rem;
  font-family: ${font.mono};
  font-size: 0.75rem;
  color: ${color.mutedForeground};

  code {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${color.foreground};
  }
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
  transition:
    background-color 150ms ease,
    scale 260ms cubic-bezier(0.34, 1.42, 0.64, 1);

  &:hover {
    background-color: ${color.accent};
    scale: 1.03;
  }

  &:active {
    scale: 0.97;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
    transition: translate 260ms cubic-bezier(0.34, 1.42, 0.64, 1);
  }

  &:hover svg {
    translate: -0.25rem 0;
  }
`;

const subscribeToNothing = () => () => {};

export function NotFoundScreen() {
  const pathname = usePathname();

  // The prerendered 404 knows nothing about the requested path, so it joins after hydration.
  const mounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false
  );

  return (
    <Wrapper>
      <GlitchSlices text="404" />

      <Status>Page not found</Status>

      <Trace>
        <span>GET</span>
        <code>{mounted ? <ScrambleText text={pathname} /> : null}</code>
        <span>-&gt; 404</span>
      </Trace>

      <Message>
        The page you are looking for has been moved, renamed, or never existed in the first
        place.
      </Message>

      <HomeLink href="/">
        <Icon as={ArrowLeftIcon} />
        Back to home
      </HomeLink>
    </Wrapper>
  );
}
