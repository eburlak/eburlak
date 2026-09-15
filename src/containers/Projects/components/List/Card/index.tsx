'use client';

import { useTranslations } from 'next-intl';
import ArrowUpRightIcon from '@/assets/icons/arrowUpRight.svg';
import NpmIcon from '@/assets/icons/npm.svg';
import Icon from '@/components/Icon';
import ScrambleText from '@/components/ScrambleText';
import Skeleton from '@/components/Skeleton';
import { useAppSelector } from '@/store/hooks';

import Downloads from './Downloads';
import { getFormattedDate } from './helpers';
import type { TProps } from './types';

import * as S from './style';

const Card = ({ project }: TProps) => {
  const t = useTranslations('projects');
  const snapshot = useAppSelector(
    (state) => state.projects.snapshots[project.package],
  );

  const isLoading = (snapshot?.status ?? 'loading') === 'loading';
  const version = snapshot?.version ?? project.version;
  const updatedAt = snapshot?.updatedAt;

  return (
    <S.Wrapper>
      <S.Header>
        <S.Name>
          <Icon as={NpmIcon} />
          <a href={project.npm} target="_blank" rel="noreferrer noopener">
            <ScrambleText text={project.package} />
          </a>
        </S.Name>

        <S.Version>
          {isLoading ? (
            <Skeleton width="44px" height="12px" />
          ) : (
            <ScrambleText key={version} text={`v${version}`} />
          )}
        </S.Version>
      </S.Header>

      <S.Description>{t(project.package)}</S.Description>

      <S.Footer>
        <S.InstallCommand>npm i {project.package}</S.InstallCommand>

        <S.Metrics>
          <div>
            <dt>{t('weekly')}</dt>
            <dd>
              {isLoading ? (
                <Skeleton width="56px" height="12px" />
              ) : (
                <Downloads
                  weeklyDownloads={snapshot?.weeklyDownloads ?? null}
                />
              )}
            </dd>
          </div>
          <div>
            <dt>{t('updated')}</dt>
            <dd>
              {isLoading ? (
                <Skeleton width="80px" height="12px" />
              ) : (
                (updatedAt && getFormattedDate(updatedAt)) || t('empty')
              )}
            </dd>
          </div>
        </S.Metrics>

        <S.Links>
          {project.demo && (
            <S.Link
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
            >
              {t('demo')}
              <Icon as={ArrowUpRightIcon} />
            </S.Link>
          )}
          <S.Link href={project.repo} target="_blank" rel="noreferrer noopener">
            {t('source')}
            <Icon as={ArrowUpRightIcon} />
          </S.Link>
        </S.Links>
      </S.Footer>
    </S.Wrapper>
  );
};

export default Card;
