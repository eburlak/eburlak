"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import styled from "styled-components";

import ArrowLeftIcon from "@/assets/icons/arrowLeft.svg";
import { GlitchSlices } from "@/components/Glitch/glitch-slices";
import { Icon } from "@/components/Icon";
import { ScrambleText } from "@/components/scramble-text";
import { dashedEdge, screenLineAfter } from "@/styles/mixins";
import { duration, easing } from "@/styles/motion";
import { color, font } from "@/styles/theme";

const Wrapper = styled.div`
  ${screenLineAfter}
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 64px 16px;
  text-align: center;
`;

const Status = styled.p`
  font-family: ${font.mono};
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${color.mutedForeground};
`;

/** The request that failed, echoed back the way a log line would put it. */
const Trace = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 100%;
  padding: 6px 10px;
  border: ${dashedEdge};
  border-radius: 6px;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${color.mutedForeground};

  code {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${color.foreground};
  }
`;

const Message = styled.p`
  max-width: 512px;
  font-size: 14px;
  color: ${color.mutedForeground};
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: ${dashedEdge};
  border-radius: 9999px;
  font-family: ${font.mono};
  font-size: 12px;
  transition:
    background-color ${duration.fast}ms ease,
    scale ${duration.base}ms ${easing.spring};

  &:hover {
    background-color: ${color.accent};
    scale: 1.03;
  }

  &:active {
    scale: 0.97;
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
