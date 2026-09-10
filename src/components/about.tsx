import { SectionBody } from "@/components/section-body";
import { profile } from "@/data/profile";

export function About() {
  return (
    <SectionBody>
      {profile.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </SectionBody>
  );
}
