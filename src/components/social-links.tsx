"use client";

import styled from "styled-components";

import { BrandIcon } from "@/components/brand-icon";
import { getIsBrandIcon, socials } from "@/data/profile";
import { dashedEdge } from "@/styles/mixins";
import { color, font, media } from "@/styles/theme";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  ${media.small} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const Item = styled.li`
  border-right: ${dashedEdge};
  border-bottom: ${dashedEdge};

  &:last-child {
    border-right: none;
  }
`;

const Link = styled.a`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  transition: background-color 150ms ease;

  &:hover {
    background-color: ${color.accent};
  }
`;

const Name = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const Handle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${font.mono};
  font-size: 0.75rem;
  color: ${color.mutedForeground};
`;

export function SocialLinks() {
  return (
    <List>
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <Item key={social.name}>
            <Link href={social.href} target="_blank" rel="noreferrer noopener">
              <Name>
                {getIsBrandIcon(Icon) ? <BrandIcon icon={Icon} /> : <Icon />}
                {social.name}
              </Name>
              <Handle>{social.handle}</Handle>
            </Link>
          </Item>
        );
      })}
    </List>
  );
}
