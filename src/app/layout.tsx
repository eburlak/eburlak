import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import React from 'react';

import Metrica from '@/components/Metrica';
import { Modals } from '@/components/Modal';
import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import { profile, SITE_URL } from '@/data/profile';
import Notification from '@/providers/Notification';
import Theme from '@/providers/Theme';
import type { TTheme } from '@/providers/Theme';
import * as i18nConstant from '@/i18n/constant';
import * as themeConstant from '@/styles/constant';
import StoreProvider from '@/store/provider';
import Fonts from '@/styles/fonts';
import Globals from '@/styles/globals';
import StyleProvider from '@/styles/provider';
import ThemeProvider from '@/styles/themeProvider';

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getLocale();
  const t = await getTranslations('profile');

  const name = t('name');
  const title = `${name} - ${profile.jobTitle}`;
  const description = t.raw('about')[0];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s - ${name}`,
    },
    description,
    openGraph: {
      type: 'profile',
      url: SITE_URL,
      siteName: name,
      locale: i18nConstant.openGraphLocales[locale],
      firstName: t('firstName'),
      lastName: t('lastName'),
      username: profile.username,
      title,
      description,
    },
    twitter: { card: 'summary_large_image' },
  };
};

const Layout = async ({ children }: React.PropsWithChildren) => {
  const locale = await getLocale();
  const cookieStore = await cookies();

  const themeCookie = cookieStore.get(themeConstant.key)?.value;

  const theme = (
    themeCookie && themeConstant.list.includes(themeCookie)
      ? themeCookie
      : themeConstant.fallback
  ) as TTheme;

  return (
    <Notification>
      <html className={Fonts.className} lang={locale}>
        <body>
          <Theme theme={theme}>
            <StoreProvider>
              <StyleProvider>
                <ThemeProvider>
                  <Globals />
                  <NextIntlClientProvider>
                    <Header />
                    <Modals />
                    {children}
                    <Footer />
                  </NextIntlClientProvider>
                </ThemeProvider>
              </StyleProvider>
            </StoreProvider>
          </Theme>
          <Metrica />
        </body>
      </html>
    </Notification>
  );
};

export default Layout;
