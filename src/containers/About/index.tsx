'use client';

import { useTranslations } from 'next-intl';

import Section from '@/components/Section';

const About = () => {
  const t = useTranslations('section');
  const tProfile = useTranslations('profile');

  return (
    <Section id="about" title={t('about')}>
      {tProfile.raw('about').map((paragraph: string) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Section>
  );
};

export default About;
