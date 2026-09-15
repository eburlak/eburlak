'use client';

import { useTranslations } from 'next-intl';

import Section from '@/components/Section';
import ScrambleText from '@/components/ScrambleText';
import { experiences } from '@/data/experience';

import * as S from './style';

const Experience = () => {
  const t = useTranslations('section');
  const tExperience = useTranslations('experience');

  return (
    <Section id="experience" title={t('experience')}>
      <S.Wrapper>
        {experiences.map((experience) => (
          <S.Company key={experience.key}>
            <S.CompanyHeader>
              <S.CompanyName>
                {experience.href ? (
                  <a
                    href={experience.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ScrambleText text={experience.company} />
                  </a>
                ) : (
                  <ScrambleText text={experience.company} />
                )}
              </S.CompanyName>
              {experience.location && (
                <S.Meta>{tExperience(experience.location)}</S.Meta>
              )}
            </S.CompanyHeader>

            <S.Timeline>
              {experience.positions.map((position) => (
                <S.Position key={position.key}>
                  <S.PositionHeader>
                    <S.PositionTitle>
                      {tExperience(`${position.key}.title`)}
                    </S.PositionTitle>
                    <S.Meta>
                      {position.start} -{' '}
                      {position.end ?? tExperience('present')}
                    </S.Meta>
                  </S.PositionHeader>

                  <S.Description>
                    {tExperience
                      .raw(`${position.key}.points`)
                      .map((point: string) => (
                        <li key={point}>
                          <span>{point}</span>
                        </li>
                      ))}
                  </S.Description>

                  {position.skills && (
                    <S.Skills>
                      {position.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </S.Skills>
                  )}
                </S.Position>
              ))}
            </S.Timeline>
          </S.Company>
        ))}
      </S.Wrapper>
    </Section>
  );
};

export default Experience;
