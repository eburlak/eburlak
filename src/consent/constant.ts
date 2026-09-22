export const list = ['granted', 'denied'];
export const key = 'consent';
export const maxAgeSeconds = 60 * 60 * 24 * 180;
export const separator = '|';
export const analyticsCookiePrefix = '_ym';

/** Bump whenever the policy text changes: an answer to an older revision stops counting. */
export const version = '2026-09-22';

export type TConsent = 'granted' | 'denied';

export type TRecord = {
  value: TConsent;
  version: string;
  answeredAt: string;
};
