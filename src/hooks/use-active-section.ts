"use client";

import { useEffect, useMemo, useState } from "react";

import { layout } from "@/styles/theme";

const thresholds = [0, 0.15, 0.4, 0.75, 1];

/** Reports which of the given sections currently owns the viewport. */
export function useActiveSection(sectionIds: string[]) {
  const idsKey = sectionIds.join(",");
  const observedIds = useMemo(() => idsKey.split(","), [idsKey]);

  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = observedIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {

      return;

    }

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        const [leadingId] = Array.from(ratios.entries())
          .filter(([, ratio]) => ratio > 0)
          .sort(([, left], [, right]) => right - left)[0] ?? [null];

        setActiveId(leadingId);
      },
      { threshold: thresholds, rootMargin: `-${layout.headerHeightPx}px 0px -35% 0px` }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [observedIds]);

  return activeId;
}
