'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import ReloadIcon from '@/assets/icons/reload.svg';
import Icon from '@/components/Icon';
import Section from '@/components/Section';
import Spinner from '@/components/Spinner';
import { projects } from '@/data/projects';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getSnapshots } from '@/store/slices/projects';

import List from './components/List';

import * as S from './style';

const packageNames = projects.map((project) => project.package);

const Projects = () => {
  const t = useTranslations('projects');
  const dispatch = useAppDispatch();
  const snapshots = useAppSelector((state) => state.projects.snapshots);

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
      id="projects"
      title="Projects"
      action={
        <S.Status aria-live="polite">
          {isLoading ? (
            <S.Source>
              <Spinner />
              {t('reading')}
            </S.Source>
          ) : (
            <S.Source>
              <S.Dot $live={isLive} aria-hidden="true" />
              {isLive ? t('live') : t('cached')}
            </S.Source>
          )}

          <S.RefetchButton
            type="button"
            onClick={refetch}
            disabled={isLoading}
            aria-label={t('reload')}
          >
            <Icon as={ReloadIcon} />
          </S.RefetchButton>
        </S.Status>
      }
    >
      <List />
    </Section>
  );
};

export default Projects;
