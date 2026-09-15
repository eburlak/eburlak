'use client';

import { projects } from '@/data/projects';

import Card from './Card';

import * as S from './style';

const List = () => (
  <S.Wrapper>
    {projects.map((project) => (
      <Card key={project.package} project={project} />
    ))}
  </S.Wrapper>
);

export default List;
