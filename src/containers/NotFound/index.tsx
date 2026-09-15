'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import React from 'react';

import ArrowLeftIcon from '@/assets/icons/arrowLeft.svg';
import Glitch from '@/components/Glitch';
import Icon from '@/components/Icon';
import ScrambleText from '@/components/ScrambleText';

import * as S from './style';

const subscribeToNothing = () => () => {};

const NotFound = () => {
  const t = useTranslations('notFound');
  const pathname = usePathname();

  // The prerendered 404 knows nothing about the requested path, so it joins after hydration.
  const mounted = React.useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );

  return (
    <S.Wrapper>
      <Glitch text="404" />

      <S.Status>{t('status')}</S.Status>

      <S.Trace>
        <span>GET</span>
        <code>{mounted ? <ScrambleText text={pathname} /> : null}</code>
        <span>-&gt; 404</span>
      </S.Trace>

      <S.Message>{t('message')}</S.Message>

      <S.HomeLink href="/">
        <Icon as={ArrowLeftIcon} />
        {t('home')}
      </S.HomeLink>
    </S.Wrapper>
  );
};

export default NotFound;
