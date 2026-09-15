import Container from '@/components/Container';
import About from '@/containers/About';
import Education from '@/containers/Education';
import Experience from '@/containers/Experience';
import Profile from '@/containers/Profile';
import Projects from '@/containers/Projects';
import Socials from '@/containers/Socials';
import Stack from '@/containers/Stack';

export default function Home() {
  return (
    <Container id="top">
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
