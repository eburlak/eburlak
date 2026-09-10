"use client";

import styled from "styled-components";

import { Telemetry } from "@/components/telemetry";
import { profile } from "@/data/profile";
import { dashedEdge, screenLineBefore, stripes } from "@/styles/mixins";
import { color, font, layout } from "@/styles/theme";

const Wrapper = styled.footer`
  width: 100%;
  max-width: ${layout.contentWidth};
  margin: 0 auto;
  border-left: ${dashedEdge};
  border-right: ${dashedEdge};
`;

const TopGutter = styled.div`
  ${screenLineBefore}
  ${stripes}
  width: 100%;
  height: 2rem;
`;

const Credits = styled.div`
  padding: 1.5rem 1rem;
  text-align: center;
  font-family: ${font.mono};
  font-size: 0.75rem;
  color: ${color.mutedForeground};

  p + p {
    margin-top: 0.25rem;
  }
`;

export function SiteFooter() {
  return (
    <Wrapper>
      <TopGutter />
      <Telemetry />
      <Credits>
        <p>Built with Next.js and styled-components. Hosted on GitHub Pages.</p>
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </Credits>
    </Wrapper>
  );
}
