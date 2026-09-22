import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Page from '@/components/Page';
import Privacy from '@/containers/Privacy';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('privacy');

  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: '/privacy' },
  };
};

export default async function PrivacyPage() {
  const t = await getTranslations('privacy');

  return (
    <Page title={t('title')} description={t('description')}>
      <Privacy />
    </Page>
  );
}
