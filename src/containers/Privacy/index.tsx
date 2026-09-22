'use client';

import { useTranslations } from 'next-intl';

import { consent } from '@/components/Consent';
import Section from '@/components/Section';
import { getVersionDate } from '@/consent/helpers';
import { profile, SITE_URL } from '@/data/profile';

import List from './components/List';

import * as S from './style';

const YANDEX_POLICY_URL = 'https://yandex.ru/legal/confidential/';
const YANDEX_OPT_OUT_URL =
  'https://yandex.ru/support/metrica/general/opt-out.html';

type TColumns = {
  name: string;
  purpose: string;
  lifetime: string;
  group: string;
};

type TRow = TColumns;

const Privacy = () => {
  const t = useTranslations('privacy');

  const email = profile.email;
  const site = new URL(SITE_URL).host;

  const columns = t.raw('cookies.columns') as TColumns;
  const rows = t.raw('cookies.rows') as TRow[];

  return (
    <>
      <Section id="operator" title={t('operator.title')}>
        <List path="operator.items" values={{ site, email }} />
      </Section>

      <Section id="data" title={t('data.title')}>
        <p>{t('data.note')}</p>
        <List path="data.items" />
      </Section>

      <Section id="purposes" title={t('purposes.title')}>
        <List path="purposes.items" />
        <p>{t('purposes.note')}</p>
      </Section>

      <Section id="cookies" title={t('cookies.title')}>
        <S.Table>
          <thead>
            <tr>
              <th>{columns.name}</th>
              <th>{columns.purpose}</th>
              <th>{columns.lifetime}</th>
              <th>{columns.group}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>
                  <code>{row.name}</code>
                </td>
                <td>{row.purpose}</td>
                <td>{row.lifetime}</td>
                <td>{row.group}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>

        <p>{t('cookies.note')}</p>

        <S.Actions>
          <S.Action type="button" onClick={consent.open}>
            {t('cookies.action')}
          </S.Action>
        </S.Actions>
      </Section>

      <Section id="sharing" title={t('sharing.title')}>
        <List path="sharing.items" />
        <p>{t('sharing.note')}</p>

        <S.Actions>
          <S.Link href={YANDEX_POLICY_URL} target="_blank" rel="noreferrer">
            {t('sharing.yandexPolicy')}
          </S.Link>

          <S.Link href={YANDEX_OPT_OUT_URL} target="_blank" rel="noreferrer">
            {t('sharing.optOut')}
          </S.Link>
        </S.Actions>
      </Section>

      <Section id="retention" title={t('retention.title')}>
        <List path="retention.items" />
      </Section>

      <S.Updated>{t('updated', { date: getVersionDate() })}</S.Updated>
    </>
  );
};

export default Privacy;
