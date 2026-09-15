'use client';

import React from 'react';

import { setTheme as saveTheme } from '@/styles/actions';
import { fallback } from '@/styles/constant';

export type TTheme = 'light' | 'dark';

type TContext = {
  theme: TTheme;
  setTheme: (value: TTheme) => void;
};

const Context = React.createContext<TContext>({
  theme: fallback as TTheme,
  setTheme: () => {},
});

export const useTheme = () => React.useContext(Context);

type TProps = React.PropsWithChildren<{
  theme: TTheme;
}>;

const Theme = ({ theme: initialTheme, children }: TProps) => {
  const [theme, setThemeState] = React.useState(initialTheme);

  const value = React.useMemo(
    () => ({
      theme,
      setTheme: (next: TTheme) => {
        saveTheme(next);
        setThemeState(next);
      },
    }),
    [theme],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Theme;
