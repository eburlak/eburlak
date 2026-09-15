'use client';

import { key } from './constant';

export const setTheme = (value: string) => {
  document.cookie = `${key}=${value}; path=/; max-age=31536000`;
};
