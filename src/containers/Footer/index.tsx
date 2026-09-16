'use client';

import { useTranslations } from 'next-intl';

import Telemetry from './components/Telemetry';

import * as S from './style';

const Footer = () => {
  const t = useTranslations('profile');

  return (
    <S.Wrapper>
      <S.Gutter />
      <Telemetry />
      <S.Credits>
        <p>
          &copy; {new Date().getFullYear()} {t('name')}
        </p>
      </S.Credits>
    </S.Wrapper>
  );
};

export default Footer;
