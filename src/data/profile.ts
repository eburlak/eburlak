import GithubIcon from "@/assets/icons/github.svg";
import MailIcon from "@/assets/icons/mail.svg";
import NpmIcon from "@/assets/icons/npm.svg";
import TelegramIcon from "@/assets/icons/telegram.svg";
import type { SvgIcon } from "@/components/icon";

export const SITE_URL = "https://eburlak.github.io";

export const profile = {
  name: "Evgeniy Burlak",
  displayName: "Evgeniy Burlak",
  initials: "EB",
  jobTitle: "Senior Frontend Developer",
  company: "edna",
  location: "Russia",
  locationLink: "https://www.google.com/maps/place/Russia",
  avatar: "/avatar.svg",
  email: "evgeniy.burlak@edna.io",
  available: true,
  // TODO: replace with the summary from the CV.
  about: [
    "Senior frontend developer focused on complex product interfaces: real-time chat, admin panels and design systems.",
    "I work on Chatflow and Chat-center at edna - contact-center products where a single screen has to stay fast and readable with thousands of live events behind it.",
    "Outside of work I maintain a few small zero-dependency npm packages and enjoy trimming code down to the part that actually carries the weight.",
  ],
};

export type Social = {
  name: string;
  handle: string;
  href: string;
  icon: SvgIcon;
};

export const socials: Social[] = [
  { name: "GitHub", handle: "@eburlak", href: "https://github.com/eburlak", icon: GithubIcon },
  { name: "npm", handle: "@eburlak", href: "https://www.npmjs.com/~eburlak", icon: NpmIcon },
  { name: "Telegram", handle: "@eburlak", href: "https://t.me/eburlak", icon: TelegramIcon },
  {
    name: "Email",
    handle: "evgeniy.burlak@edna.io",
    href: "mailto:evgeniy.burlak@edna.io",
    icon: MailIcon,
  },
];

