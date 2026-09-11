"use client";

import styled from "styled-components";

import ArrowUpRightIcon from "@/assets/icons/arrowUpRight.svg";
import { Icon } from "@/components/Icon";
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
  gap: 4px;
  padding: 12px 16px;
  transition: background-color ${duration.fast}ms ease;

  &:hover {
    background-color: ${color.accent};
  }
`;

/** Marks the cell as outbound and leans out of it under the cursor. */
const Jump = styled(Icon)`
  width: 12px;
  height: 12px;
  margin-left: auto;
  color: ${color.mutedForeground};
  transition:
    color ${duration.fast}ms ease,
    translate ${duration.base}ms ${easing.spring};

  ${Link}:hover & {
    color: ${color.foreground};
    translate: 2px -2px;
  }
`;

const Name = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;

  svg:first-child {
    width: 16px;
    height: 16px;
  }
`;

const Handle = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${font.mono};
  font-size: 12px;
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
