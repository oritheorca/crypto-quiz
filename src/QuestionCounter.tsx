/** @format */

import React from "react";
import styled, { css, keyframes } from "styled-components/macro";
import { colors } from "./ui";

const StyledQuestionCounter = styled.h2`
  display: flex;
  margin: 3.2rem 2rem;
  justify-content: space-between;
`;

const fadeIn = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

type StyledBlockProps = {
  fill: string;
  hasChanged: boolean;
};

const animationRule = css`
  ${fadeIn} 0.4s ease-in forwards;
`;

const StyledBlock = styled.svg`
  fill: ${({ fill }: StyledBlockProps) => fill};
  width: 18px;
  object-fit: cover;
  transition: fill 0.3s linear;
  animation: ${(props: StyledBlockProps) =>
    props.hasChanged ? animationRule : "none"};

  @media (min-width: 550px) {
    width: 32px;
  }
`;

export function Block({
  fill = colors.gray,
  hasChanged = false,
}: {
  fill: string;
  hasChanged?: boolean;
}) {
  return (
    <StyledBlock viewBox="0 0 18 23" fill={fill} hasChanged={hasChanged}>
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
          hasChanged={questionIndex === idx}
          key={idx}
        />
      ))}
    </StyledQuestionCounter>
  );
}
