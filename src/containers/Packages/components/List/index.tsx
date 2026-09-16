'use client';

import { packages } from '@/data/packages';

import Card from './Card';

import * as S from './style';

const List = () => (
  <S.Wrapper>
    {packages.map((item) => (
      <Card key={item.name} item={item} />
    ))}
  </S.Wrapper>
);

export default List;
