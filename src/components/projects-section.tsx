"use client";

import styled from "styled-components";

import ReloadIcon from "@/assets/icons/reload.svg";
import { Icon } from "@/components/icon";
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
  gap: 0.5rem;
  font-family: ${font.mono};
  font-size: 0.6875rem;
  color: ${color.mutedForeground};
`;

const Source = styled.span`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

const Dot = styled.span<{ $live: boolean }>`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 9999px;
  background-color: ${({ $live }) => ($live ? color.online : "transparent")};
  box-shadow: inset 0 0 0 1px ${({ $live }) => ($live ? "transparent" : color.edge)};
  transition: background-color 260ms ease;
`;

const RefetchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
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
    width: 0.75rem;
    height: 0.75rem;
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
