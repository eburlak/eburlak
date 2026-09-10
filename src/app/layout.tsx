import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StyledRegistry } from "@/components/styled-registry";
import { ThemeProvider } from "@/components/theme-provider";
import { profile, SITE_URL } from "@/data/profile";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

const description = `${profile.jobTitle} at ${profile.company}. ${profile.about[0]}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} - ${profile.jobTitle}`,
    template: `%s - ${profile.name}`,
  },
  description,
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: `${profile.name} - ${profile.jobTitle}`,
    description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <body>
        <StyledRegistry>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader />
            {children}
            <SiteFooter />
          </ThemeProvider>
        </StyledRegistry>
      </body>
    </html>
  );
}
