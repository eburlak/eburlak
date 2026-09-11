'use client';

import Image from 'next/image';
import styled from 'styled-components';

import LocationIcon from '@/assets/icons/location.svg';
import VerifiedIcon from '@/assets/icons/verified.svg';
import { Icon } from '@/components/Icon';
import { ScrambleText } from '@/components/scramble-text';

import { profile } from '@/data/profile';
import { dashedEdge, screenLineBefore } from '@/styles/mixins';
import { color, font, media } from '@/styles/theme';
import Visibility from './Visibility';

const Wrapper = styled.div`
  ${screenLineBefore}
  display: flex;
`;

const AvatarFrame = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 128px;
  height: 128px;
  border-right: ${dashedEdge};

  ${media.small} {
    width: 160px;
    height: 160px;
  }
`;

const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 12px 16px;
`;

const Name = styled.h1`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${font.mono};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;

  ${media.small} {
    font-size: 24px;
  }

  svg {
    width: 16px;
    height: 16px;
    color: #3b82f6;
  }
`;

const JobTitle = styled.p`
  font-size: 14px;
  color: ${color.mutedForeground};

  strong {
    font-weight: 400;
    color: ${color.foreground};
  }
`;

const Location = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  font-size: 14px;
  color: ${color.mutedForeground};
  transition: color 150ms ease;

  &:hover {
    color: ${color.foreground};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Availability = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
  font-family: ${font.mono};
  font-size: 12px;
  color: ${color.mutedForeground};
`;

const OnlineDot = styled.span`
  position: relative;
  display: flex;
  width: 6px;
  height: 6px;

  &::before,
  &::after {
    content: '';
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
          style={{ objectFit: 'cover' }}
        />
      </AvatarFrame>

      <Details>
        <Visibility>
          {({ ref, visible }) => (
            <Name ref={ref as React.RefObject<HTMLHeadingElement>}>
              {visible ? <ScrambleText text={profile.name} /> : profile.name}
              <Icon as={VerifiedIcon} aria-label="verified" />
            </Name>
          )}
        </Visibility>

        <JobTitle>
          {profile.jobTitle} at <strong>{profile.company}</strong>
        </JobTitle>

        <Location
          href={profile.locationLink}
          target="_blank"
          rel="noreferrer noopener"
        >
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
