import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import React from 'react';

import Footer from '@/containers/Footer';
import Header from '@/containers/Header';
import { profile, SITE_URL } from '@/data/profile';
import Notification from '@/providers/Notification';
import Theme from '@/providers/Theme';
import type { TTheme } from '@/providers/Theme';
import * as themeConstant from '@/styles/constant';
import StoreProvider from '@/store/provider';
import Fonts from '@/styles/fonts';
import Globals from '@/styles/globals';
import StyleProvider from '@/styles/provider';
import ThemeProvider from '@/styles/themeProvider';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('profile');

  const title = `${profile.name} - ${t('jobTitle')}`;
  const description = `${t('jobTitle')} at ${profile.company}. ${t.raw('about')[0]}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: `%s - ${profile.name}`,
    },
    description,
    openGraph: {
      type: 'profile',
      url: SITE_URL,
      title,
      description,
    },
    twitter: { card: 'summary_large_image' },
    alternates: { canonical: SITE_URL },
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
                    {children}
                    <Footer />
                  </NextIntlClientProvider>
                </ThemeProvider>
              </StyleProvider>
            </StoreProvider>
          </Theme>
        </body>
      </html>
    </Notification>
  );
};

export default Layout;
