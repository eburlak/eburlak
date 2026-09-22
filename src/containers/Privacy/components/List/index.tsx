'use client';

import { useTranslations } from 'next-intl';

import * as S from './style';

type TProps = {
  path: string;
  values?: Record<string, string>;
};

const List = ({ path, values }: TProps) => {
  const t = useTranslations('privacy');

  return (
    <S.Wrapper>
      {t.raw(path).map((item: string, index: number) => (
        <li key={item}>{t(`${path}.${index}`, values)}</li>
      ))}
    </S.Wrapper>
  );
};

export default List;
