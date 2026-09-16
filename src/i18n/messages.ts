import { list } from './constant';

import type ru from './translations/ru';

export type Messages = typeof ru;

export const getMessages = async (locale: string): Promise<Messages> =>
  (await import(`./translations/${locale}`)).default;

export const getOtherLocales = (locale: string) =>
  list.filter((item) => item !== locale);
