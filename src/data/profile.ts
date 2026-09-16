import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import MailIcon from '@/assets/icons/mail.svg';
import NpmIcon from '@/assets/icons/npm.svg';
import TelegramIcon from '@/assets/icons/telegram.svg';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eburlak.vercel.app';

const email = 'eugeneburlak@yandex.ru';

export const profile = {
  username: 'eburlak',
  jobTitle: 'Senior Frontend Developer',
  company: 'edna',
  companyUrl: 'https://edna.ru',
  locationLink: 'https://yandex.ru/maps/146/simferopol/',
  avatar: '/me.jpg',
  email,
  available: true,
};

export type Social = {
  name: string;
  handle: string;
  href: string;
  icon: TSvgComponent;
};

export const socials: Social[] = [
  {
    name: 'GitHub',
    handle: '@eburlak',
    href: 'https://github.com/eburlak',
    icon: GithubIcon,
  },
  {
    name: 'npm',
    handle: '@eburlak',
    href: 'https://www.npmjs.com/~eburlak',
    icon: NpmIcon,
  },
  {
    name: 'Telegram',
    handle: '@eburlak',
    href: 'https://t.me/eburlak',
    icon: TelegramIcon,
  },
  {
    name: 'LinkedIn',
    handle: '@evgeniy-burlak',
    href: 'https://www.linkedin.com/in/evgeniy-burlak-5216b4125',
    icon: LinkedinIcon,
  },
  {
    name: 'Email',
    handle: email,
    href: `mailto:${email}`,
    icon: MailIcon,
  },
];
