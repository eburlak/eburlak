"use client";

import styled from "styled-components";

import { color } from "@/styles/theme";

export const SectionBody = styled.div`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${color.mutedForeground};

  p + p {
    margin-top: 0.75rem;
  }
`;
