"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useState, type ReactNode } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { GlobalStyle } from "@/styles/global-style";

export function StyledRegistry({ children }: { children: ReactNode }) {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styleElement = styleSheet.getStyleElement();
    styleSheet.instance.clearTag();
    return <>{styleElement}</>;
  });

  if (typeof window !== "undefined") {
    return (
      <>
        <GlobalStyle />
        {children}
      </>
    );
  }

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      <GlobalStyle />
      {children}
    </StyleSheetManager>
  );
}
