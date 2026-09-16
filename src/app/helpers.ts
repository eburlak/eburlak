import { getLocale, getTranslations } from 'next-intl/server';

import { education } from '@/data/experience';
import { profile, socials, SITE_URL } from '@/data/profile';
import { stack } from '@/data/stack';
import { getMessages, getOtherLocales } from '@/i18n/messages';

const getWebLinks = () =>
  socials.map((social) => social.href).filter((href) => href.startsWith('http'));

const getAlternateNames = async (locale: string) => {
  const messages = await Promise.all(
    getOtherLocales(locale).map((item) => getMessages(item)),
  );

  return messages.map((item) => item.profile.name);
};

export const getProfileJsonLd = async () => {
  const locale = await getLocale();
  const t = await getTranslations('profile');
  const tEducation = await getTranslations('education');

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: t('name'),
      alternateName: await getAlternateNames(locale),
      givenName: t('firstName'),
      familyName: t('lastName'),
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
