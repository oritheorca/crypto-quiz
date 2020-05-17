/** @format */

import React from "react";
import styled from "styled-components/macro";
import questions from "./content/questions";

const StyledQuestion = styled.h1`
  font-size: 1.6rem;
  text-transform: uppercase;
`;

const StyledAnswer = styled.button`
  width: 100%;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default function Question({
  questionIndex,
  nextQuestion,
}: {
  questionIndex: number;
  nextQuestion: (points: number) => void;
}) {
  const question = questions[questionIndex];
  return (
    <React.Fragment>
      <StyledQuestion>{question.title}</StyledQuestion>
      {(question.answers as Array<any>).map((answer, idx) => (
        <StyledAnswer
          key={`quiz-idx-${idx}`}
          onClick={() => nextQuestion(answer.points)}
        >
          {answer.answer}
        </StyledAnswer>
      ))}
    </React.Fragment>
  );
}
