import { Geist, JetBrains_Mono } from 'next/font/google';

export const Sans = Geist({ variable: '--font-sans', subsets: ['latin'] });
export const Mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

const Fonts = { className: `${Sans.variable} ${Mono.variable}` };

export default Fonts;
