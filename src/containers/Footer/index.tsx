'use client';

import { profile } from '@/data/profile';

import Telemetry from './components/Telemetry';

import * as S from './style';

const Footer = () => (
  <S.Wrapper>
    <S.Gutter />
    <Telemetry />
    <S.Credits>
      <p>
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </S.Credits>
  </S.Wrapper>
);

export default Footer;
