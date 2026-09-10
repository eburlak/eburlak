import { siGithub, siNpm, siTelegram, type SimpleIcon } from "simple-icons";
import { Mail, type LucideIcon } from "lucide-react";

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
  icon: SimpleIcon | LucideIcon;
};

export const socials: Social[] = [
  { name: "GitHub", handle: "@eburlak", href: "https://github.com/eburlak", icon: siGithub },
  { name: "npm", handle: "@eburlak", href: "https://www.npmjs.com/~eburlak", icon: siNpm },
  { name: "Telegram", handle: "@eburlak", href: "https://t.me/eburlak", icon: siTelegram },
  {
    name: "Email",
    handle: "evgeniy.burlak@edna.io",
    href: "mailto:evgeniy.burlak@edna.io",
    icon: Mail,
  },
];

export function getIsBrandIcon(icon: SimpleIcon | LucideIcon): icon is SimpleIcon {
  return "path" in icon;
}
