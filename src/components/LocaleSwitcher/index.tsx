'use client';

import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

import { setLocale } from '@/i18n/actions';
import { list } from '@/i18n/constant';

import * as S from './style';

const LocaleSwitcher = () => {
  const t = useTranslations('locale');
  const locale = useLocale();

  const activeIndex = list.indexOf(locale);

  return (
    <S.Wrapper>
      <S.Thumb
        aria-hidden="true"
        style={
          { '--thumb-index': Math.max(activeIndex, 0) } as React.CSSProperties
        }
      />

      {list.map((value) => {
        const active = value === locale;

        return (
          <S.Option
            key={value}
            type="button"
            $active={active}
            aria-label={t('switch', { locale: t(value) })}
            aria-pressed={active}
            onClick={() => setLocale(value)}
          >
            {value}
          </S.Option>
        );
      })}
    </S.Wrapper>
  );
};

export default LocaleSwitcher;
