/** @format */

import React from "react";
import styled from "styled-components/macro";
import { colors } from "./ui";

type PropTypes = {
  width: number;
  fill: string;
};

const StyledBlock = styled.svg`
  fill: ${({ fill }: PropTypes) => fill};
  width: ${({ width }: PropTypes) => width}px;
  object-fit: cover;
  transition: fill 0.3s linear;

  @media (min-width: 550px) {
    width: 32px;
  }
`;

export default function Block({
  width = 18,
  fill = colors.gray,
}: {
  width: number;
  fill: string;
}) {
  return (
    <StyledBlock viewBox="0 0 18 23" fill={fill} width={width}>
      <path d="M0.25 10L8.25 14.5V23L0.25 18V10Z" />
      <path d="M17.75 10L9.75 14.5V23L17.75 18V10Z" />
      <path d="M0.5 8.75L8.91656 4.1126L17.5 8.5L8.91656 13.3874L0.5 8.75Z" />
    </StyledBlock>
  );
}
