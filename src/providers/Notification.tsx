'use client';

import React from 'react';

// The package assigns to `window` at module scope, so it must not be imported during SSR.
const Notification = ({ children }: React.PropsWithChildren) => {
  React.useEffect(() => {
    let cancelled = false;

    import('notificit').then(({ default: Notificit }) => {
      if (cancelled) {
        return;
      }

      window.notifications = new Notificit({
        close: {
          button: true,
          area: true,
        },
        animation: {
          time: 300,
        },
      });
    });

    return () => {
      cancelled = true;
      window.notifications?.destroy();
      delete window.notifications;
    };
  }, []);

  return <>{children}</>;
};

export default Notification;
