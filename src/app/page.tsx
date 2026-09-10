import { About } from "@/components/about";
import { EducationList } from "@/components/education-list";
import { ExperienceList } from "@/components/experience-list";
import { MainColumn } from "@/components/main-column";
import { ProfileCard } from "@/components/profile-card";
import { ProjectList } from "@/components/project-list";
import { Section } from "@/components/section";
import { SocialLinks } from "@/components/social-links";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <MainColumn id="top">
      <ProfileCard />

      <Section id="about" title="About">
        <About />
      </Section>

      <Section id="connect" title="Connect">
        <SocialLinks />
      </Section>

      <Section id="stack" title="Stack">
        <TechStack />
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceList />
      </Section>

      <Section id="projects" title="Projects">
        <ProjectList />
      </Section>

      <Section id="education" title="Education">
        <EducationList />
      </Section>
    </MainColumn>
  );
}
