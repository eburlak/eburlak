'use client';

import React from 'react';

import ScrambleText from '@/components/ScrambleText';

import * as S from './style';

type TProps = {
  id: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

const Section = ({ id, title, action, children }: TProps) => (
  <S.Wrapper id={id}>
    <S.Header>
      <S.Title>
        <ScrambleText text={title} />
      </S.Title>
      {action}
    </S.Header>

    <S.Content>{children}</S.Content>
  </S.Wrapper>
);

export default Section;
