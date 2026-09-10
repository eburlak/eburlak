"use client";

import styled, { css } from "styled-components";

import { duration } from "@/styles/motion";

export type TEffect = { visible?: boolean; delay?: number };

export const fadeIn = ({ visible, delay }: TEffect) => css`
  opacity: 0;
  transition: ${duration.base}ms;
  ${visible &&
  css`
    opacity: 1;
  `}
  ${!!delay &&
  css`
    transition-delay: ${delay}ms;
  `}
`;

export const fadeInUp = (props: TEffect) => css`
  ${fadeIn(props)}
  transform: translateY(20px);
  ${props.visible &&
  css`
    transform: translateY(0);
  `}
`;

export const fadeInLeft = (props: TEffect) => css`
  ${fadeIn(props)}
  transform: translateX(20px);
  ${props.visible &&
  css`
    transform: translateX(0);
  `}
`;

export const fadeInRight = (props: TEffect) => css`
  ${fadeIn(props)}
  transform: translateX(-20px);
  ${props.visible &&
  css`
    transform: translateX(0);
  `}
`;

export const fadeInZoom = (props: TEffect) => css`
  ${fadeIn(props)}
  transform: scale(0.8);
  ${props.visible &&
  css`
    transform: scale(1);
  `}
`;

export const FadeInUp = styled.div<TEffect>`
  ${({ visible }) => css`
    ${fadeInUp({ visible })}
  `}
`;
