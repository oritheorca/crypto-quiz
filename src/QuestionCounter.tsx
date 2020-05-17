import React from "react";
import styled from "styled-components/macro";

const StyledQuestionCounter = styled.h2`
  font-size: 1.2rem;
  font-family: "Mali";
  text-align: left;
  font-weight: 500;
`;

export default function QuestionCounter({
  questionIndex,
}: {
  questionIndex: number;
}) {
  return (
    <StyledQuestionCounter>
      Question {questionIndex + 1} of 10
    </StyledQuestionCounter>
  );
}
