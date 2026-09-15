import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Container from '@/components/Container';
import NotFound from '@/containers/NotFound';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('notFound');

  return { title: `404 - ${t('status')}` };
};

export default function NotFoundPage() {
  return (
    <Container>
      <NotFound />
    </Container>
  );
}
