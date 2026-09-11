"use client";

import type { ComponentProps, ComponentType } from "react";
import styled from "styled-components";

import { duration } from "@/styles/motion";

/** An SVG imported from src/assets/icons - svgr turns each file into a component. */
export type SvgIcon = ComponentType<ComponentProps<"svg">>;

/** Base sizing for every icon; use as `<Icon as={ArrowLeftIcon} />`. */
export const Icon = styled.svg<{ $rotate?: boolean }>`
  width: 16px;
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
  rotate: ${({ $rotate }) => ($rotate ? "180deg" : "0deg")};
  transition:
    color ${duration.base}ms ease,
    rotate ${duration.base}ms ease;
`;
