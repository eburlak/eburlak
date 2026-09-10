"use client";

import { ArrowUpRight } from "lucide-react";
import { siNpm } from "simple-icons";
import styled from "styled-components";

import { BrandIcon } from "@/components/brand-icon";
import { projects } from "@/data/projects";
import { dashedEdge } from "@/styles/mixins";
import { color, font } from "@/styles/theme";

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

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${font.mono};
  font-size: 0.75rem;
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: ${color.mutedForeground};
  transition: color 150ms ease;

  &:hover {
    color: ${color.foreground};
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export function ProjectList() {
  return (
    <List>
      {projects.map((project) => (
        <Project key={project.package}>
          <Header>
            <PackageName>
              <BrandIcon icon={siNpm} />
              <a href={project.npm} target="_blank" rel="noreferrer noopener">
                {project.package}
              </a>
            </PackageName>
            <Version>v{project.version}</Version>
          </Header>

          <Description>{project.description}</Description>

          <Footer>
            <InstallCommand>npm i {project.package}</InstallCommand>

            <Links>
              {project.demo && (
                <ExternalLink href={project.demo} target="_blank" rel="noreferrer noopener">
                  Demo
                  <ArrowUpRight />
                </ExternalLink>
              )}
              <ExternalLink href={project.repo} target="_blank" rel="noreferrer noopener">
                Source
                <ArrowUpRight />
              </ExternalLink>
            </Links>
          </Footer>
        </Project>
      ))}
    </List>
  );
}
