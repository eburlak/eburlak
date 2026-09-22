'use client';

import { useTranslations } from 'next-intl';

import { consent } from '@/components/Consent';

import Telemetry from './components/Telemetry';

import * as S from './style';

const Footer = () => {
  const t = useTranslations();

  return (
    <S.Wrapper>
      <S.Gutter />
      <Telemetry />
      <S.Credits>
        <p>
          &copy; {new Date().getFullYear()} {t('profile.name')}
        </p>

        <S.Links>
          <S.PolicyLink href="/privacy">{t('privacy.link')}</S.PolicyLink>
          <S.Settings type="button" onClick={consent.open}>
            {t('consent.settings')}
          </S.Settings>
        </S.Links>
      </S.Credits>
    </S.Wrapper>
  );
};

export default Footer;
