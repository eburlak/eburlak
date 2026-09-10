"use client";

import Image from "next/image";
import styled from "styled-components";

import LocationIcon from "@/assets/icons/location.svg";
import VerifiedIcon from "@/assets/icons/verified.svg";
import { Icon } from "@/components/icon";
import { ScrambleText } from "@/components/scramble-text";

import { profile } from "@/data/profile";
import { dashedEdge, screenLineBefore } from "@/styles/mixins";
import { color, font, media } from "@/styles/theme";

const Wrapper = styled.div`
  ${screenLineBefore}
  display: flex;
`;

const AvatarFrame = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 8rem;
  height: 8rem;
  border-right: ${dashedEdge};

  ${media.small} {
    width: 10rem;
    height: 10rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
`;

const Name = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-family: ${font.mono};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;

  ${media.small} {
    font-size: 1.5rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #3b82f6;
  }
`;

const JobTitle = styled.p`
  font-size: 0.875rem;
  color: ${color.mutedForeground};

  strong {
    font-weight: 400;
    color: ${color.foreground};
  }
`;

const Location = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: fit-content;
  font-size: 0.875rem;
  color: ${color.mutedForeground};
  transition: color 150ms ease;

  &:hover {
    color: ${color.foreground};
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

const Availability = styled.p`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.25rem;
  font-family: ${font.mono};
  font-size: 0.75rem;
  color: ${color.mutedForeground};
`;

const OnlineDot = styled.span`
  position: relative;
  display: flex;
  width: 0.375rem;
  height: 0.375rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background-color: ${color.online};
  }

  &::before {
    animation: ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping {
    75%,
    100% {
      transform: scale(2.4);
      opacity: 0;
    }
  }
`;

export function ProfileCard() {
  return (
    <Wrapper>
      <AvatarFrame>
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </AvatarFrame>

      <Details>
        <Name>
          <ScrambleText text={profile.name} />
          <Icon as={VerifiedIcon} aria-label="verified" />
        </Name>

        <JobTitle>
          {profile.jobTitle} at <strong>{profile.company}</strong>
        </JobTitle>

        <Location href={profile.locationLink} target="_blank" rel="noreferrer noopener">
          <Icon as={LocationIcon} />
          {profile.location}
        </Location>

        {profile.available && (
          <Availability>
            <OnlineDot />
            Open to new opportunities
          </Availability>
        )}
      </Details>
    </Wrapper>
  );
}
