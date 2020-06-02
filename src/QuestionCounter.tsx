/** @format */

import React from "react";
import styled from "styled-components/macro";
import { colors } from "./ui";

const StyledQuestionCounter = styled.h2`
  display: flex;
  margin: 3.2rem 2rem;
  justify-content: space-between;
`;

const StyledBlock = styled.svg`
  fill: ${({ fill }: { fill: string }) => fill};
  width: 18px;
  object-fit: cover;
  transition: fill 0.3s linear;

  @media (min-width: 550px) {
    width: 32px;
  }
`;

export function Block({ fill = colors.gray }: { fill: string }) {
  return (
    <StyledBlock viewBox="0 0 18 23" fill={fill}>
      <path d="M0.25 10L8.25 14.5V23L0.25 18V10Z" />
      <path d="M17.75 10L9.75 14.5V23L17.75 18V10Z" />
      <path d="M0.5 8.75L8.91656 4.1126L17.5 8.5L8.91656 13.3874L0.5 8.75Z" />
    </StyledBlock>
  );
}

export default function QuestionCounter({
  questionIndex,
}: {
  questionIndex: number;
}) {
  return (
    <StyledQuestionCounter>
      {[...Array(10)].map((src, idx) => (
        <Block
          fill={
            questionIndex >= idx
              ? Object.values(colors)[idx % 4]
              : colors.lightGray
          }
          key={idx}
        />
      ))}
    </StyledQuestionCounter>
  );
}
