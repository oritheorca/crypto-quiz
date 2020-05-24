/** @format */

import React from "react";
import styled from "styled-components/macro";
import magnetImages from "./content/images/illos/magnets/magnetImages";
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

const StyledMagnet = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1rem;
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
          <StyledMagnet src={magnetImages[idx % magnetImages.length]} />
          <div>{answer.answer}</div>
        </StyledAnswer>
      ))}
    </React.Fragment>
  );
}
