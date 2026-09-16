'use client';

import { useTranslations } from 'next-intl';

import Section from '@/components/Section';
import { getExperienceYears } from '@/data/experience';

const About = () => {
  const t = useTranslations('section');
  const tProfile = useTranslations('profile');

  const years = getExperienceYears();

  return (
    <Section id="about" title={t('about')}>
      {tProfile.raw('about').map((paragraph: string, index: number) => (
        <p key={paragraph}>{tProfile(`about.${index}`, { years })}</p>
      ))}
    </Section>
  );
};

export default About;
