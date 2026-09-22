import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/data/profile';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: `${SITE_URL}/`,
    changeFrequency: 'monthly',
    priority: 1,
  },
  {
    url: `${SITE_URL}/privacy`,
    changeFrequency: 'yearly',
    priority: 0.3,
  },
];

export default sitemap;
