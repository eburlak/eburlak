'use client';

import * as S from './style';

const slices = [
  { top: 2, height: 10, shift: '-0.16em', duration: 3.1, delay: 0 },
  { top: 15, height: 6, shift: '0.24em', duration: 2.3, delay: 0.45 },
  { top: 26, height: 4, shift: '-0.3em', duration: 4.2, delay: 1.1 },
  { top: 38, height: 11, shift: '0.12em', duration: 2.7, delay: 0.2 },
  { top: 52, height: 5, shift: '-0.22em', duration: 3.6, delay: 1.8 },
  { top: 63, height: 8, shift: '0.28em', duration: 2.9, delay: 0.9 },
  { top: 76, height: 4, shift: '-0.1em', duration: 4.7, delay: 2.4 },
  { top: 86, height: 9, shift: '0.18em', duration: 3.3, delay: 1.5 },
];

type TProps = {
  text: string;
};

const Glitch = ({ text }: TProps) => (
  <S.Wrapper>
    <S.Text>
      {text}

      {slices.map((slice) => (
        <S.Slice
          key={slice.top}
          aria-hidden="true"
          $top={slice.top}
          $height={slice.height}
          $shift={slice.shift}
          $duration={slice.duration}
          $delay={slice.delay}
        >
          {text}
        </S.Slice>
      ))}
    </S.Text>
  </S.Wrapper>
);

export default Glitch;
