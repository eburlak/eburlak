'use client';

import { removeCookiesByPrefix } from '@/utils';

import { analyticsCookiePrefix, key, maxAgeSeconds } from './constant';
import type { TConsent } from './constant';
import { getSerializedRecord } from './helpers';

export const setConsent = (value: TConsent) => {
  const record = getSerializedRecord(value);

  document.cookie = `${key}=${record}; path=/; max-age=${maxAgeSeconds}`;

  if (value === 'denied') {
    removeCookiesByPrefix(analyticsCookiePrefix);
  }
};
