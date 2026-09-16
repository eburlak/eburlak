'use client';

import { useTranslations } from 'next-intl';

import ArrowUpRightIcon from '@/assets/icons/arrowUpRight.svg';
import Icon from '@/components/Icon';
import Section from '@/components/Section';
import { socials } from '@/data/profile';

import * as S from './style';

const Socials = () => {
  const t = useTranslations('section');

  return (
    <Section id="connect" title={t('connect')}>
      <S.Wrapper>
        {socials.map((social) => (
          <S.Item key={social.name}>
            <S.Link
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              title={social.handle}
            >
              <S.Name>
                <Icon as={social.icon} />
                {social.name}
                <S.Jump as={ArrowUpRightIcon} aria-hidden="true" />
              </S.Name>
              <S.Handle>{social.handle}</S.Handle>
            </S.Link>
          </S.Item>
        ))}
      </S.Wrapper>
    </Section>
  );
};

export default Socials;
