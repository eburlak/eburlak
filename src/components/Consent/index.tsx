'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { setConsent } from '@/consent/actions';
import type { TConsent } from '@/consent/constant';
import emitter, { EEvents } from '@/utils/Emitter';

import * as S from './style';

type TProps = {
  initial: TConsent | null;
};

const Consent = ({ initial }: TProps) => {
  const t = useTranslations('consent');
  const [open, setOpen] = React.useState(initial === null);

  React.useEffect(() => {
    const show = () => setOpen(true);

    emitter.on(EEvents.CONSENT_OPEN, show);

    return () => emitter.off(EEvents.CONSENT_OPEN, show);
  }, []);

  const save = (value: TConsent) => {
    setConsent(value);

    /** The counter is rendered on the server, so flipping analytics needs a fresh response. */
    if ((initial === 'granted') !== (value === 'granted')) {
      window.location.reload();
      return;
    }

    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <S.Wrapper role="region" aria-label={t('label')}>
      <S.Text>
        {t('message')} <S.PolicyLink href="/privacy">{t('policy')}</S.PolicyLink>
      </S.Text>

      <S.Actions>
        <S.Action type="button" onClick={() => save('denied')}>
          {t('deny')}
        </S.Action>
        <S.Action type="button" $accent onClick={() => save('granted')}>
          {t('accept')}
        </S.Action>
      </S.Actions>
    </S.Wrapper>
  );
};

export const consent = {
  open: () => emitter.publish(EEvents.CONSENT_OPEN),
};

export default Consent;
