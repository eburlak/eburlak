'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import { useActiveSection } from '@/hooks';

import * as S from './style';

const navItems = [
  { id: 'about', href: '/#about', label: 'about' },
  { id: 'stack', href: '/#stack', label: 'stack' },
  { id: 'experience', href: '/#experience', label: 'experience' },
  { id: 'packages', href: '/#packages', label: 'packages' },
];

const navSectionIds = navItems.map((item) => item.id);

const Header = () => {
  const t = useTranslations('nav');
  const tProfile = useTranslations('profile');
  const [scrolled, setScrolled] = React.useState(false);
  const activeId = useActiveSection(navSectionIds);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.Wrapper $scrolled={scrolled}>
      <S.Inner>
        <S.Brand href="/#top">{tProfile('name')}</S.Brand>

        <S.Actions>
          <S.Nav>
            {navItems.map((item) => (
              <S.Link
                key={item.href}
                href={item.href}
                data-active={item.id === activeId}
                aria-current={item.id === activeId ? 'true' : undefined}
              >
                {t(item.label)}
              </S.Link>
            ))}
          </S.Nav>

          <LocaleSwitcher />
          <ThemeToggle />
        </S.Actions>
      </S.Inner>

      <S.ScrollProgress aria-hidden="true" />
    </S.Wrapper>
  );
};

export default Header;
