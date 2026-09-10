"use client";

import styled, { keyframes } from "styled-components";

import { color } from "@/styles/theme";

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

/** Hugs its bars when they have a fixed width, fills the row otherwise. */
const Wrapper = styled.span<{ $fixed: boolean }>`
  display: inline-flex;
  flex-wrap: wrap;
  width: ${({ $fixed }) => ($fixed ? "auto" : "100%")};
  align-items: center;
  gap: 10px;
  vertical-align: middle;
`;

const Item = styled.span`
  flex: 1;
  display: block;
  background: ${color.muted};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      color-mix(in oklab, var(--foreground) 14%, transparent),
      transparent
    );
    animation: ${shimmer} ease-in infinite 1s;
  }
`;

type TProps = {
  columns?: number;
  height?: string;
  borderRadius?: string;
  width?: string;
  className?: string;
};

const Skeleton = ({
  columns = 1,
  height = "36px",
  borderRadius = "4px",
  width = "",
  className = "",
}: TProps) => {
  return (
    <Wrapper className={className} $fixed={!!width}>
      {Array.from({ length: columns }, (_, index) => (
        <Item
          key={index}
          style={{
            height,
            borderRadius,
            ...(width
              ? {
                  minWidth: width,
                  maxWidth: width,
                }
              : {}),
          }}
        />
      ))}
    </Wrapper>
  );
};

export default Skeleton;
