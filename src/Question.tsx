/** @format */

import React from "react";
import styled from "styled-components/macro";
import questions from "./content/questions";
import QuestionCounter from "./QuestionCounter";
import { colors } from "./ui";

const StyledQuestion = styled.h1`
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: ${colors.red};
  min-height: 92px;

  @media (min-width: 1000px) {
    margin-bottom: 3rem;
    font-size: 2.4rem;
  }
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
  margin-bottom: 2rem;

  @media (min-width: 1000px) {
    margin-bottom: 3rem;
    font-size: 1.6rem;
  }
`;

const StyledDot = styled.div`
  min-width: 1rem;
  min-height: 1rem;
  border-radius: 50%;
  background-color: ${colors.red};
  margin-right: 2rem;
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
      <QuestionCounter questionIndex={questionIndex} />
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
