'use client';

import { useTranslations } from 'next-intl';
import { useCountUp } from '@/hooks';

import { getFormattedDownloads } from '../helpers';

type TProps = {
  weeklyDownloads: number | null;
};

const Downloads = ({ weeklyDownloads }: TProps) => {
  const t = useTranslations('packages');
  const counted = useCountUp(weeklyDownloads);

  if (counted === null) {
    return <>{t('empty')}</>;
  }

  return <>{getFormattedDownloads(counted)}</>;
};

export default Downloads;
