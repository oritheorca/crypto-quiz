/** @format */

import React from "react";
import styled, { keyframes } from "styled-components/macro";
import questions, { QuestionType } from "./content/questions";
import QuestionCounter from "./QuestionCounter";
import { buttonBoxShadow, colors } from "./ui";

const slide = keyframes`
  from {
    bottom: -1.6rem;
    opacity: 0;
  }

  to {
    bottom: 0;
    opacity: 1;
  }
`;

const StyledQuestionContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledQuestion = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 3rem;
  margin-top: 0;
  min-height: 60px;

  @media (min-width: 800px) {
    margin-bottom: 4rem;
  }
`;

const StyledAnswer = styled.button`
  width: 100%;
  max-width: 550px;
  text-align: left;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  background: ${(props: { fill: string }) => props.fill};
  ${buttonBoxShadow}
`;

const StyledQNA = styled.section`
  padding: 0 2rem;
  width: 100%;
  position: relative;
  animation: ${slide} 0.4s ease-in forwards;
`;

const StyledLetter = styled.p`
  font-weight: bold;
  font-family: "Arvo";
  font-size: 2.8rem;
  margin: 0 3rem 0 0;
  color: white;
  padding: 0;
`;

const StyledAnswerContent = styled.p`
  color: white;
  font-family: "Gochi Hand";
  font-size: 2rem;
  margin: 0;
`;

export function QNA({
  question,
  onAnswer,
}: {
  question: QuestionType;
  onAnswer: (points: number) => void;
}) {
  function getLetter(idx: number) {
    switch (idx) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
    }
  }
  return (
    <StyledQNA key={`question-${question.title}`}>
      <StyledQuestion>{question.title}</StyledQuestion>
      {(question.answers as Array<any>).map((answer, idx) => (
        <StyledAnswer
          key={`quiz-idx-${question.title}-${idx}`}
          onClick={() => onAnswer(answer.points)}
          fill={Object.values(colors)[idx]}
        >
          <StyledLetter>{getLetter(idx)}</StyledLetter>
          <StyledAnswerContent>{answer.answer}</StyledAnswerContent>
        </StyledAnswer>
      ))}
    </StyledQNA>
  );
}

export default function Question({
  questionIndex,
  onAnswer,
}: {
  questionIndex: number;
  onAnswer: (points: number) => void;
}) {
  const question = questions[questionIndex];
  return (
    <StyledQuestionContainer>
      <QuestionCounter questionIndex={questionIndex} />
      <QNA question={question} onAnswer={onAnswer} />
    </StyledQuestionContainer>
  );
}
