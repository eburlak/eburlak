"use client";

import { useEffect, useRef, useState } from "react";

type InViewOptions = {
  /** Stop observing after the first intersection. */
  once?: boolean;
  rootMargin?: string;
};

export function useInView<T extends HTMLElement>({
  once = true,
  rootMargin = "0px 0px -8% 0px",
}: InViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((entry) => entry.isIntersecting);
        setInView(isIntersecting);
        if (isIntersecting && once) observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin]);

  return { ref, inView } as const;
}
