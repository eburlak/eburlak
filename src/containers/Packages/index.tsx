'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import ReloadIcon from '@/assets/icons/reload.svg';
import Icon from '@/components/Icon';
import Section from '@/components/Section';
import Spinner from '@/components/Spinner';
import { packages } from '@/data/packages';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getSnapshots } from '@/store/slices/packages';

import List from './components/List';

import * as S from './style';

const packageNames = packages.map((item) => item.name);

const Packages = () => {
  const t = useTranslations('section');
  const tPackages = useTranslations('packages');
  const dispatch = useAppDispatch();
  const snapshots = useAppSelector((state) => state.packages.snapshots);

  const refetch = React.useCallback(() => {
    dispatch(getSnapshots(packageNames));
  }, [dispatch]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  const isLoading = packageNames.some(
    (packageName) =>
      (snapshots[packageName]?.status ?? 'loading') === 'loading',
  );

  const isLive = packageNames.every(
    (packageName) => snapshots[packageName]?.status === 'live',
  );

  return (
    <Section
      id="packages"
      title={t('packages')}
      action={
        <S.Status aria-live="polite">
          {isLoading ? (
            <S.Source>
              <Spinner />
              {tPackages('reading')}
            </S.Source>
          ) : (
            <S.Source>
              <S.Dot $live={isLive} aria-hidden="true" />
              {isLive ? tPackages('live') : tPackages('cached')}
            </S.Source>
          )}

          <S.RefetchButton
            type="button"
            onClick={refetch}
            disabled={isLoading}
            aria-label={tPackages('reload')}
          >
            <Icon as={ReloadIcon} />
          </S.RefetchButton>
        </S.Status>
      }
    >
      <S.Note>{tPackages('note')}</S.Note>
      <List />
    </Section>
  );
};

export default Packages;
