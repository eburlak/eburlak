'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import ArrowLeftIcon from '@/assets/icons/arrowLeft.svg';
import Icon from '@/components/Icon';
import Container from '@/components/Container';
import ScrambleText from '@/components/ScrambleText';

import * as S from './style';

type TProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

const Page = ({ title, description, children }: TProps) => {
  const t = useTranslations('notFound');

  return (
    <Container>
      <S.Header>
        <S.BackLink href="/">
          <Icon as={ArrowLeftIcon} />
          {t('home')}
        </S.BackLink>

        <S.Title>
          <ScrambleText text={title} />
        </S.Title>
        {description && <S.Description>{description}</S.Description>}
      </S.Header>

      {children}
    </Container>
  );
};

export default Page;
