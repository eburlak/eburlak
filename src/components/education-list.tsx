"use client";

import styled from "styled-components";

import { education } from "@/data/experience";
import { dashedEdge } from "@/styles/mixins";
import { color, font } from "@/styles/theme";

const List = styled.div`
  > * + * {
    border-top: ${dashedEdge};
  }
`;

const Item = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
`;

const School = styled.h3`
  font-family: ${font.mono};
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const Degree = styled.p`
  font-size: 14px;
  color: ${color.mutedForeground};
`;

const Period = styled.span`
  flex-shrink: 0;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${color.mutedForeground};
`;

export function EducationList() {
  return (
    <List>
      {education.map((item) => (
        <Item key={item.school}>
          <div>
            <School>{item.school}</School>
            <Degree>{item.degree}</Degree>
          </div>
          <Period>
            {item.start} - {item.end}
          </Period>
        </Item>
      ))}
    </List>
  );
}
