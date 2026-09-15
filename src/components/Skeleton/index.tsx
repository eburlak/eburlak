'use client';

import type { TProps } from './types';

import * as S from './style';

const Skeleton = ({
  columns = 1,
  height = '36px',
  borderRadius = '4px',
  width = '',
  className = '',
}: TProps) => (
  <S.Wrapper className={className} $fixed={!!width}>
    {Array.from({ length: columns }, (_, index) => (
      <S.Item
        key={index}
        style={{
          height,
          borderRadius,
          ...(width ? { minWidth: width, maxWidth: width } : {}),
        }}
      />
    ))}
  </S.Wrapper>
);

export default Skeleton;
