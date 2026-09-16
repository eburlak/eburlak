import { getTranslations } from 'next-intl/server';

import { education } from '@/data/experience';
import { profile, socials, SITE_URL } from '@/data/profile';
import { stack } from '@/data/stack';

const getWebLinks = () =>
  socials.map((social) => social.href).filter((href) => href.startsWith('http'));

export const getProfileJsonLd = async () => {
  const t = await getTranslations('profile');
  const tEducation = await getTranslations('education');

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: profile.name,
      givenName: profile.firstName,
      familyName: profile.lastName,
      jobTitle: profile.jobTitle,
      description: t.raw('about')[0],
      url: SITE_URL,
      image: new URL(profile.avatar, SITE_URL).toString(),
      email: `mailto:${profile.email}`,
      worksFor: {
        '@type': 'Organization',
        name: profile.company,
        url: profile.companyUrl,
      },
      alumniOf: education.map((item) => ({
        '@type': 'CollegeOrUniversity',
        name: tEducation(`${item.key}.school`),
      })),
      knowsAbout: stack.flatMap((group) =>
        group.items.map((item) => item.name),
      ),
      sameAs: getWebLinks(),
    },
  };
};
