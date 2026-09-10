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

export const layout = {
  contentWidth: "48rem",
  headerHeight: "3.5rem",
} as const;

export const media = {
  small: "@media (min-width: 40rem)",
} as const;
