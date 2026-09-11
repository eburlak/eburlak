'use client';

import { useEffect, useRef, useState } from 'react';

type InViewOptions = {
  /** Stop observing after the first intersection. */
  once?: boolean;
  rootMargin?: string;
};

export function useInView<T extends HTMLElement>({
  once = false,
  rootMargin = '0px',
}: InViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  const reportedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((entry) => entry.isIntersecting);

        // The observer can report the same state twice; only a change is worth a render.
        if (isIntersecting !== reportedRef.current) {
          reportedRef.current = isIntersecting;
          setVisible(isIntersecting);
        }

        if (isIntersecting && once) {
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin]);

  return { ref, visible } as const;
}
