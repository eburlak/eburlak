'use client';

import { useTranslations as useTranslationsBase } from 'next-intl';
import React from 'react';

import { layout } from '@/styles/theme';

type TInViewOptions = {
  /** Stop observing after the first intersection. */
  once?: boolean;
  rootMargin?: string;
};

export const useInView = <T extends HTMLElement>({
  once = false,
  rootMargin = '0px',
}: TInViewOptions = {}) => {
  const ref = React.useRef<T | null>(null);
  const [visible, setVisible] = React.useState(false);
  const reportedRef = React.useRef(false);

  React.useEffect(() => {
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
};

const thresholds = [0, 0.15, 0.4, 0.75, 1];

/** Reports which of the given sections currently owns the viewport. */
export const useActiveSection = (sectionIds: string[]) => {
  const idsKey = sectionIds.join(',');
  const observedIds = React.useMemo(() => idsKey.split(','), [idsKey]);

  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
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
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }

        const [leadingId] = Array.from(ratios.entries())
          .filter(([, ratio]) => ratio > 0)
          .sort(([, left], [, right]) => right - left)[0] ?? [null];

        setActiveId(leadingId);
      },
      {
        threshold: thresholds,
        rootMargin: `-${layout.headerHeightPx}px 0px -35% 0px`,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [observedIds]);

  return activeId;
};

const COUNT_UP_DURATION_MS = 900;

const easeOutExpo = (progress: number) =>
  progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

/** Rolls a number up from its previous value whenever the target changes. */
export const useCountUp = (target: number | null) => {
  const [value, setValue] = React.useState(target ?? 0);
  const startValueRef = React.useRef(0);

  React.useEffect(() => {
    if (target === null) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const animationDuration = prefersReducedMotion ? 0 : COUNT_UP_DURATION_MS;
    const startValue = startValueRef.current;
    const distance = target - startValue;
    let frameId = 0;
    let startedAt = 0;

    const render = (now: number) => {
      if (startedAt === 0) {
        startedAt = now;
      }

      const progress =
        animationDuration === 0
          ? 1
          : Math.min((now - startedAt) / animationDuration, 1);
      const current = Math.round(startValue + distance * easeOutExpo(progress));

      setValue(current);
      startValueRef.current = current;

      if (progress < 1) {
        frameId = requestAnimationFrame(render);
      }
    };

    frameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return target === null ? null : value;
};

export const useOnChange = (
  callback: () => void,
  deps: React.DependencyList,
) => {
  const mountedRef = React.useRef(false);
  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  });

  React.useEffect(() => {
    if (mountedRef.current) {
      callbackRef.current();
    }

    mountedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export const useEvent = (
  type: string,
  listener: EventListener,
  target: EventTarget | null = typeof document !== 'undefined'
    ? document
    : null,
) => {
  React.useEffect(() => {
    if (!target) {
      return;
    }

    target.addEventListener(type, listener);

    return () => {
      target.removeEventListener(type, listener);
    };
  }, [target, type, listener]);
};

export const useHotkey = (key: string, callback: TAnyFunction) => {
  const handleKeyUp = React.useCallback(
    (event: Event) => {
      const keyboardEvent = event as KeyboardEvent;

      if (keyboardEvent.key === key || keyboardEvent.code === key) {
        callback(keyboardEvent);
      }
    },
    [callback, key],
  );

  useEvent('keyup', handleKeyUp);
};

export const useClickOutside = (
  callback: () => void,
  ref: React.RefObject<HTMLElement | null>,
) => {
  const handleClick = React.useCallback(
    (event: MouseEvent) => {
      const path = event.composedPath();

      if (ref.current && path.includes(ref.current)) {
        return;
      }

      callback();
    },
    [callback, ref],
  );

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);
};

export const useForceUpdate = () => {
  const [, forceUpdate] = React.useState({});

  return React.useCallback(() => forceUpdate({}), []);
};

/** Falls back through a list of keys and returns the first one that resolves. */
export const useTranslations = () => {
  const t = useTranslationsBase();

  const translator = Object.assign(
    (
      strings: string[] | string,
      options?: Record<string, string | number | Date>,
    ) => {
      if (typeof strings === 'string') {
        return t(strings, options);
      }

      for (const string of strings) {
        const translation = t(string, options);

        if (translation !== string) {
          return translation;
        }
      }

      return t(strings[strings.length - 1], options);
    },
    { raw: t.raw },
  );

  return translator;
};
