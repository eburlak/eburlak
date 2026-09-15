'use client';

import isPropValid from '@emotion/is-prop-valid';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const StyleProvider = ({ children }: React.PropsWithChildren) => {
  const [styledComponentsStyleSheet] = React.useState(
    () => new ServerStyleSheet(),
  );

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // Styled components from the shared kit take plain props (appearance, isCenter,
  // wide); without this filter styled-components forwards them to the DOM.
  const shouldForwardProp = (prop: string, element: unknown) =>
    typeof element === 'string' ? isPropValid(prop) : true;

  if (typeof window !== 'undefined') {
    return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        {children}
      </StyleSheetManager>
    );
  }

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={shouldForwardProp}
    >
      {children}
    </StyleSheetManager>
  );
};

export default StyleProvider;
