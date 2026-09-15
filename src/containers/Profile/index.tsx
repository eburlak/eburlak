'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import LocationIcon from '@/assets/icons/location.svg';
import VerifiedIcon from '@/assets/icons/verified.svg';
import Icon from '@/components/Icon';
import ScrambleText from '@/components/ScrambleText';
import { profile } from '@/data/profile';

import * as S from './style';

const Profile = () => {
  const t = useTranslations('profile');

  return (
    <S.Wrapper>
      <S.AvatarFrame>
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          sizes="(min-width: 640px) 160px, 128px"
          priority
          style={{ objectFit: 'cover' }}
        />
      </S.AvatarFrame>

      <S.Details>
        <S.Name>
          <ScrambleText text={profile.name} />
          <Icon as={VerifiedIcon} aria-label={t('verified')} />
        </S.Name>

        <S.JobTitle>
          {t('jobTitle')} at <strong>{profile.company}</strong>
        </S.JobTitle>

        <S.Location
          href={profile.locationLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon as={LocationIcon} />
          {t('location')}
        </S.Location>

        {profile.available && (
          <S.Availability>
            <S.OnlineDot />
            {t('availability')}
          </S.Availability>
        )}
      </S.Details>
    </S.Wrapper>
  );
};

export default Profile;
