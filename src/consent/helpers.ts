import { list, separator, version } from './constant';
import type { TConsent, TRecord } from './constant';

/** Parsed as local time: a bare date string would land on the previous day west of UTC. */
export const getVersionDate = () => new Date(`${version}T00:00:00`);

export const getSerializedRecord = (value: TConsent) =>
  [value, version, new Date().toISOString()].join(separator);

export const getRecord = (cookie?: string): TRecord | null => {
  if (!cookie) {
    return null;
  }

  const [value, recordVersion, answeredAt] = cookie.split(separator);

  if (!list.includes(value) || recordVersion !== version || !answeredAt) {
    return null;
  }

  return { value: value as TConsent, version: recordVersion, answeredAt };
};
