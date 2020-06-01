/** @format */

import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components/macro";
import Question from "./Question";
import { Points } from "./types";

const StyledQuiz = styled.section`
  height: 640px;
  width: 100%;
`;

export default function Quiz({
  score,
  questionIndex,
  onAnswer,
}: {
  score: Points;
  questionIndex: number;
  onAnswer: (points: any) => void;
}) {
  ReactGA.pageview(`/quiz/${questionIndex}`);

  return (
    <StyledQuiz>
      <Question questionIndex={questionIndex} onAnswer={onAnswer} />
    </StyledQuiz>
  );
}
