"use client";

import styled from "styled-components";

import { color } from "@/styles/theme";

export const SectionBody = styled.div`
  padding: 16px;
  font-size: 14px;
  color: ${color.mutedForeground};

  p + p {
    margin-top: 12px;
  }
`;
