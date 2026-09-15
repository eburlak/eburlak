'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import Icon from '@/components/Icon';
import Section from '@/components/Section';
import { stack } from '@/data/stack';

import * as S from './style';

const Stack = () => {
  const t = useTranslations('section');
  const tStack = useTranslations('stack');

  return (
    <Section id="stack" title={t('stack')}>
      <S.Wrapper>
        {stack.map((group) => (
          <S.Group key={group.key}>
            <S.Label>{tStack(group.key)}</S.Label>

            <S.Items>
              {group.items.map((item) => (
                <li key={item.name}>
                  <S.Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    style={
                      item.brand
                        ? ({ '--brand': item.brand } as React.CSSProperties)
                        : undefined
                    }
                  >
                    <Icon as={item.icon} />
                    {item.name}
                  </S.Link>
                </li>
              ))}
            </S.Items>
          </S.Group>
        ))}
      </S.Wrapper>
    </Section>
  );
};

export default Stack;
