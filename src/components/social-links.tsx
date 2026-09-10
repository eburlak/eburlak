"use client";

import styled from "styled-components";

import ArrowUpRightIcon from "@/assets/icons/arrowUpRight.svg";
import { Icon } from "@/components/icon";
import { socials } from "@/data/profile";
import { dashedEdge } from "@/styles/mixins";
import { duration, easing } from "@/styles/motion";
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

  &:last-child {
    border-right: none;
  }

  /* Rules between rows only - the bottom edge of the block is the next heading's rule. */
  &:nth-child(n + 3) {
    border-top: ${dashedEdge};
  }

  ${media.small} {
    &:nth-child(-n + 4) {
      border-top: none;
    }

    &:nth-child(n + 5) {
      border-top: ${dashedEdge};
    }
  }
`;

const Link = styled.a`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  transition: background-color ${duration.fast}ms ease;

  &:hover {
    background-color: ${color.accent};
  }
`;

/** Marks the cell as outbound and leans out of it under the cursor. */
const Jump = styled(Icon)`
  width: 0.75rem;
  height: 0.75rem;
  margin-left: auto;
  color: ${color.mutedForeground};
  transition:
    color ${duration.fast}ms ease,
    translate ${duration.base}ms ${easing.spring};

  ${Link}:hover & {
    color: ${color.foreground};
    translate: 0.125rem -0.125rem;
  }
`;

const Name = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;

  svg:first-child {
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
      {socials.map((social) => (
        <Item key={social.name}>
          <Link href={social.href} target="_blank" rel="noreferrer noopener">
            <Name>
              <Icon as={social.icon} />
              {social.name}
              <Jump as={ArrowUpRightIcon} aria-hidden="true" />
            </Name>
            <Handle>{social.handle}</Handle>
          </Link>
        </Item>
      ))}
    </List>
  );
}
