"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { ThemeToggle } from "@/components/theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { profile } from "@/data/profile";
import { dashedEdge } from "@/styles/mixins";
import { color, font, layout, media } from "@/styles/theme";

const Wrapper = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 50;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  background-color: ${({ $scrolled }) =>
    $scrolled ? "color-mix(in srgb, var(--background) 80%, transparent)" : "transparent"};
  transition: background-color 150ms ease;
`;

const progressGrow = keyframes`
  from { scale: 0 1; }
  to { scale: 1 1; }
`;

/** How far down the document the reader is - drawn by the scroll timeline itself. */
const ScrollProgress = styled.span`
  display: none;
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: ${color.foreground};
  pointer-events: none;

  @supports (animation-timeline: scroll()) {
    @media (prefers-reduced-motion: no-preference) {
      display: block;
      transform-origin: left center;
      scale: 0 1;
      animation: ${progressGrow} linear both;
      animation-timeline: scroll(root block);
    }
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: ${layout.headerHeight};
  max-width: ${layout.contentWidth};
  margin: 0 auto;
  padding: 0 1rem;
  border-left: ${dashedEdge};
  border-right: ${dashedEdge};
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${font.mono};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const Monogram = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.375rem;
  background-color: ${color.foreground};
  color: ${color.background};
  font-family: ${font.mono};
  font-size: 0.625rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 1rem;

  ${media.small} {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  font-size: 0.875rem;
  color: ${color.mutedForeground};
  transition: color 150ms ease;

  &:hover,
  &[data-active="true"] {
    color: ${color.foreground};
  }
`;

const navItems = [
  { id: "about", href: "/#about", label: "About" },
  { id: "stack", href: "/#stack", label: "Stack" },
  { id: "experience", href: "/#experience", label: "Experience" },
  { id: "projects", href: "/#projects", label: "Projects" },
];

const navSectionIds = navItems.map((item) => item.id);

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(navSectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper $scrolled={scrolled}>
      <Inner>
        <Brand href="/#top">
          <Monogram>{profile.initials}</Monogram>
          <span>{profile.displayName}</span>
        </Brand>

        <Actions>
          <Nav>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                data-active={item.id === activeId}
                aria-current={item.id === activeId ? "true" : undefined}
              >
                {item.label}
              </NavLink>
            ))}
          </Nav>

          <ThemeToggle />
        </Actions>
      </Inner>

      <ScrollProgress aria-hidden="true" />
    </Wrapper>
  );
}
