"use client";

import styled from "styled-components";

import { experiences } from "@/data/experience";
import { dashedEdge } from "@/styles/mixins";
import { color, font } from "@/styles/theme";

const List = styled.div`
  > * + * {
    border-top: ${dashedEdge};
  }
`;

const Company = styled.div`
  padding: 16px;
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

const CompanyName = styled.h3`
  font-family: ${font.mono};
  font-weight: 600;
  letter-spacing: -0.02em;

  a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const MonoText = styled.span`
  flex-shrink: 0;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${color.mutedForeground};
`;

const Timeline = styled.div`
  margin-top: 12px;
  padding-left: 16px;
  border-left: ${dashedEdge};

  > * + * {
    margin-top: 16px;
  }
`;

const Position = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -21px;
    width: 8px;
    height: 8px;
    border: 1px solid ${color.edge};
    border-radius: 9999px;
    background-color: ${color.background};
  }
`;

const PositionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0 12px;
`;

const PositionTitle = styled.h4`
  font-family: ${font.mono};
  font-size: 14px;
  font-weight: 600;
`;

const Description = styled.ul`
  margin-top: 6px;
  font-size: 14px;
  color: ${color.mutedForeground};

  li {
    display: flex;
    gap: 8px;
  }

  li + li {
    margin-top: 4px;
  }

  li::before {
    content: "-";
    color: ${color.edge};
  }
`;

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;

  li {
    padding: 2px 6px;
    border: 1px solid ${color.edge};
    border-radius: 6px;
    font-family: ${font.mono};
    font-size: 11px;
    color: ${color.mutedForeground};
  }
`;

export function ExperienceList() {
  return (
    <List>
      {experiences.map((experience) => (
        <Company key={experience.company}>
          <CompanyHeader>
            <CompanyName>
              {experience.href ? (
                <a href={experience.href} target="_blank" rel="noreferrer noopener">
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </CompanyName>
            {experience.location && <MonoText>{experience.location}</MonoText>}
          </CompanyHeader>

          <Timeline>
            {experience.positions.map((position) => (
              <Position key={position.title}>
                <PositionHeader>
                  <PositionTitle>{position.title}</PositionTitle>
                  <MonoText>
                    {position.start} - {position.end ?? "Present"}
                  </MonoText>
                </PositionHeader>

                {position.description && (
                  <Description>
                    {position.description.map((line) => (
                      <li key={line}>
                        <span>{line}</span>
                      </li>
                    ))}
                  </Description>
                )}

                {position.skills && (
                  <Skills>
                    {position.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </Skills>
                )}
              </Position>
            ))}
          </Timeline>
        </Company>
      ))}
    </List>
  );
}
