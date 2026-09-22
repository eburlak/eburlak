'use client';

import { key, maxAgeSeconds } from './constant';
import type { TConsent } from './constant';

export const setConsent = (value: TConsent) => {
  document.cookie = `${key}=${value}; path=/; max-age=${maxAgeSeconds}`;
};
