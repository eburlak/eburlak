import type { Metadata } from 'next';

import Container from '@/components/Container';
import About from '@/containers/About';
import Education from '@/containers/Education';
import Experience from '@/containers/Experience';
import Profile from '@/containers/Profile';
import Projects from '@/containers/Projects';
import Socials from '@/containers/Socials';
import Stack from '@/containers/Stack';

import { getProfileJsonLd } from './helpers';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default async function Home() {
  const jsonLd = await getProfileJsonLd();

  return (
    <Container id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Profile />
      <About />
      <Socials />
      <Stack />
      <Experience />
      <Projects />
      <Education />
    </Container>
  );
}
