export const color = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  muted: "var(--muted)",
  mutedForeground: "var(--muted-foreground)",
  edge: "var(--edge)",
  accent: "var(--accent)",
  online: "var(--online)",
} as const;

export const font = {
  sans: "var(--font-sans)",
  mono: "var(--font-mono)",
} as const;

const headerHeightPx = 56;

export const layout = {
  contentWidth: "768px",
  headerHeightPx,
  headerHeight: `${headerHeightPx}px`,
} as const;

export const media = {
  small: "@media (min-width: 640px)",
} as const;
