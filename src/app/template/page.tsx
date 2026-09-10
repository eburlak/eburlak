import type { Metadata } from "next";

import { PageShell } from "@/components/page-shell";
import { SectionBody } from "@/components/section-body";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Template",
  description: "Starting point for a new page.",
  robots: { index: false, follow: false },
};

export default function TemplatePage() {
  return (
    <PageShell
      title="Template"
      description="Copy this folder to src/app/<slug>/ and replace the sections below."
    >
      <Section id="first-section" title="First section">
        <SectionBody>
          Every block of a page goes inside a Section: it draws the dashed heading bar and the
          screen-wide rule underneath. Content of the section is whatever you render here.
        </SectionBody>
      </Section>

      <Section id="second-section" title="Second section">
        <SectionBody>
          Add as many sections as the page needs. Keep the text itself in src/data so the
          components stay free of content.
        </SectionBody>
      </Section>
    </PageShell>
  );
}
