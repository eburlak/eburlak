'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import React from 'react';

const COUNTER_ID = 112710018;

const Metrica = () => {
  const pathname = usePathname();
  const isInitialHit = React.useRef(true);

  React.useEffect(() => {
    if (isInitialHit.current) {
      isInitialHit.current = false;
      return;
    }

    window.ym?.(COUNTER_ID, 'hit', window.location.href);
  }, [pathname]);

  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      <Script id="metrica" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${COUNTER_ID}', 'ym');

ym(${COUNTER_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${COUNTER_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};

export default Metrica;
