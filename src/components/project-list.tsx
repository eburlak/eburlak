"use client";

import styled from "styled-components";

import ArrowUpRightIcon from "@/assets/icons/arrowUpRight.svg";
import NpmIcon from "@/assets/icons/npm.svg";
import { Icon } from "@/components/icon";
import { ScrambleText } from "@/components/scramble-text";
import Skeleton from "@/components/skeleton";
import { useCountUp } from "@/hooks/use-count-up";
import type { PackageSnapshot } from "@/hooks/use-npm-registry";
import { projects, type Project } from "@/data/projects";
import { dashedEdge } from "@/styles/mixins";
import { duration, easing } from "@/styles/motion";
import { color, font } from "@/styles/theme";

const numberFormat = new Intl.NumberFormat("en-US");
const dateFormat = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const List = styled.div`
  > * + * {
    border-top: ${dashedEdge};
  }
`;

const Project = styled.article`
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
`;

const PackageName = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${font.mono};
  font-weight: 600;
  letter-spacing: -0.02em;

  svg {
    width: 1rem;
    height: 1rem;
    color: #cb3837;
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const Version = styled.span`
  flex-shrink: 0;
  font-family: ${font.mono};
  font-size: 0.75rem;
  color: ${color.mutedForeground};
`;

const Description = styled.p`
  margin-top: 0.375rem;
  font-size: 0.875rem;
  color: ${color.mutedForeground};
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  margin-top: 0.75rem;
`;

const InstallCommand = styled.code`
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${color.muted};
  font-size: 0.75rem;
`;

const Metrics = styled.dl`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1rem;
  font-family: ${font.mono};
  font-size: 0.75rem;
  color: ${color.mutedForeground};

  div {
    display: flex;
    align-items: baseline;
    gap: 0.375rem;
  }

  dd {
    color: ${color.foreground};
    font-variant-numeric: tabular-nums;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
  font-family: ${font.mono};
  font-size: 0.75rem;
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: ${color.mutedForeground};
  transition: color ${duration.fast}ms ease;

  &:hover {
    color: ${color.foreground};
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
    transition: translate ${duration.base}ms ${easing.spring};
  }

  &:hover svg {
    translate: 0.125rem -0.125rem;
  }
`;

function Downloads({ weeklyDownloads }: { weeklyDownloads: number | null }) {
  const counted = useCountUp(weeklyDownloads);

  if (counted === null) return <>n/a</>;

  return <>{numberFormat.format(counted)}</>;
}

function ProjectCard({ project, snapshot }: { project: Project; snapshot?: PackageSnapshot }) {
  const isLoading = (snapshot?.status ?? "loading") === "loading";
  const version = snapshot?.version ?? project.version;
  const updatedAt = snapshot?.updatedAt;

  return (
    <Project>
      <Header>
        <PackageName>
          <Icon as={NpmIcon} />
          <a href={project.npm} target="_blank" rel="noreferrer noopener">
            {project.package}
          </a>
        </PackageName>

        <Version>
          {isLoading ? (
            <Skeleton width="44px" height="12px" />
          ) : (
            <ScrambleText key={version} text={`v${version}`} />
          )}
        </Version>
      </Header>

      <Description>{project.description}</Description>

      <Footer>
        <InstallCommand>npm i {project.package}</InstallCommand>

        <Metrics>
          <div>
            <dt>weekly</dt>
            <dd>
              {isLoading ? (
                <Skeleton width="56px" height="12px" />
              ) : (
                <Downloads weeklyDownloads={snapshot?.weeklyDownloads ?? null} />
              )}
            </dd>
          </div>
          <div>
            <dt>updated</dt>
            <dd>
              {isLoading ? (
                <Skeleton width="80px" height="12px" />
              ) : (
                (updatedAt && dateFormat.format(new Date(updatedAt))) || "n/a"
              )}
            </dd>
          </div>
        </Metrics>

        <Links>
          {project.demo && (
            <ExternalLink href={project.demo} target="_blank" rel="noreferrer noopener">
              Demo
              <Icon as={ArrowUpRightIcon} />
            </ExternalLink>
          )}
          <ExternalLink href={project.repo} target="_blank" rel="noreferrer noopener">
            Source
            <Icon as={ArrowUpRightIcon} />
          </ExternalLink>
        </Links>
      </Footer>
    </Project>
  );
}

export function ProjectList({
  snapshots,
}: {
  snapshots: Record<string, PackageSnapshot | undefined>;
}) {
  return (
    <List>
      {projects.map((project) => (
        <ProjectCard
          key={project.package}
          project={project}
          snapshot={snapshots[project.package]}
        />
      ))}
    </List>
  );
}
