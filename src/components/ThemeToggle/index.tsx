'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import MoonIcon from '@/assets/icons/moon.svg';
import SunIcon from '@/assets/icons/sun.svg';
import Icon from '@/components/Icon';
import { useTheme } from '@/providers/Theme';
import type { TTheme } from '@/providers/Theme';

import { applyWithWipe } from './helpers';

import * as S from './style';

const themes: { value: TTheme; icon: TSvgComponent }[] = [
  { value: 'light', icon: SunIcon },
  { value: 'dark', icon: MoonIcon },
];

const ThemeToggle = () => {
  const t = useTranslations('theme');
  const { theme, setTheme } = useTheme();

  const activeIndex = themes.findIndex((option) => option.value === theme);

  return (
    <S.Wrapper>
      <S.Thumb
        aria-hidden="true"
        style={
          {
            '--thumb-index': Math.max(activeIndex, 0),
            '--thumb-opacity': 1,
          } as React.CSSProperties
        }
      />

      {themes.map(({ value, icon }) => {
        const active = theme === value;

        return (
          <S.Option
            key={value}
            type="button"
            $active={active}
            aria-label={t('switch', { theme: t(value) })}
            aria-pressed={active}
            onClick={(event) => applyWithWipe(event, () => setTheme(value))}
          >
            <Icon as={icon} />
          </S.Option>
        );
      })}
    </S.Wrapper>
  );
};

export default ThemeToggle;
