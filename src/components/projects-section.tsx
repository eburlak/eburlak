"use client";

import styled from "styled-components";

import ReloadIcon from "@/assets/icons/reload.svg";
import { Icon } from "@/components/Icon";
import { ProjectList } from "@/components/project-list";
import { Section } from "@/components/section";
import { Spinner } from "@/components/spinner";
import { useNpmRegistry } from "@/hooks/use-npm-registry";
import { projects } from "@/data/projects";
import { color, font } from "@/styles/theme";

const packageNames = projects.map((project) => project.package);

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${font.mono};
  font-size: 11px;
  color: ${color.mutedForeground};
`;

const Source = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Dot = styled.span<{ $live: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background-color: ${({ $live }) => ($live ? color.online : "transparent")};
  box-shadow: inset 0 0 0 1px ${({ $live }) => ($live ? "transparent" : color.edge)};
  transition: background-color 260ms ease;
`;

const RefetchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  color: ${color.mutedForeground};
  transition: color 150ms ease, background-color 150ms ease;

  &:hover:not(:disabled) {
    background-color: ${color.accent};
    color: ${color.foreground};
  }

  &:disabled {
    cursor: progress;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  &:disabled svg {
    animation: spin 900ms linear infinite;
  }

  @keyframes spin {
    to {
      rotate: 360deg;
    }
  }
`;

export function ProjectsSection() {
  const { snapshots, isLoading, refetch } = useNpmRegistry(packageNames);

  const isLive = packageNames.every((packageName) => snapshots[packageName]?.status === "live");

  return (
    <Section
      id="projects"
      title="Projects"
      action={
        <Status aria-live="polite">
          {isLoading ? (
            <Source>
              <Spinner />
              reading registry
            </Source>
          ) : (
            <Source>
              <Dot $live={isLive} aria-hidden="true" />
              {isLive ? "npm live" : "cached"}
            </Source>
          )}

          <RefetchButton
            type="button"
            onClick={refetch}
            disabled={isLoading}
            aria-label="Reload package data from npm"
          >
            <Icon as={ReloadIcon} />
          </RefetchButton>
        </Status>
      }
    >
      <ProjectList snapshots={snapshots} />
    </Section>
  );
}
