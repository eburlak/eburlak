'use client';

import { useTranslations } from 'next-intl';

import Section from '@/components/Section';
import ScrambleText from '@/components/ScrambleText';
import { education } from '@/data/experience';

import * as S from './style';

const Education = () => {
  const t = useTranslations('section');
  const tEducation = useTranslations('education');

  return (
    <Section id="education" title={t('education')}>
      <S.Wrapper>
        {education.map((item) => (
          <S.Item key={item.key}>
            <div>
              <S.School>
                <ScrambleText text={tEducation(`${item.key}.school`)} />
              </S.School>
              <S.Degree>{tEducation(`${item.key}.degree`)}</S.Degree>
            </div>
            <S.Period>
              {item.start} - {item.end}
            </S.Period>
          </S.Item>
        ))}
      </S.Wrapper>
    </Section>
  );
};

export default Education;
