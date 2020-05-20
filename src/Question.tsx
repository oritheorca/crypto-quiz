/** @format */

import React from "react";
import styled from "styled-components/macro";
import questions from "./content/questions";
import { colors } from "./ui";

const StyledQuestion = styled.h1`
  font-size: 1.6rem;
  text-transform: uppercase;
`;

const StyledAnswer = styled.button`
  width: 100%;
  font-size: 1.2rem;
  text-align: left;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 1.6rem;
`;

const StyledDot = styled.div`
  min-width: 1rem;
  min-height: 1rem;
  border-radius: 50%;
  background-color: ${colors.red};
  margin-right: 1.2rem;
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
          <StyledDot />
          <div>{answer.answer}</div>
        </StyledAnswer>
      ))}
    </React.Fragment>
  );
}
