/** @format */

import React, { useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import questions, { QuestionType } from "./content/questions";
import QuestionCounter from "./QuestionCounter";
import { buttonBoxShadow, buttonWithHover, colors } from "./ui";

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

type StyledAnswerProps = {
  fill: string;
  hoverFill: string;
  isSelected: boolean;
  isNotSelected: boolean;
};

const StyledAnswer = styled.button`
  width: 100%;
  max-width: 550px;
  text-align: left;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  padding: 2rem 3.6rem;
  margin-bottom: 2rem;
  background: ${(props: StyledAnswerProps) =>
    props.isSelected ? "white" : props.fill};
  opacity: ${(props: StyledAnswerProps) => (props.isNotSelected ? 0 : 1)};
  ${buttonBoxShadow}
  ${buttonWithHover}
  transition: box-shadow .25s ease, transform .25s ease, background-color 0.3s ease-in, opacity 0.5s ease-out;

  &:hover,
  &:active {
    color: ${(props: StyledAnswerProps) =>
      props.isSelected ? props.hoverFill : "white"};
  }
`;

const StyledQNA = styled.section`
  padding: 0 2rem;
  position: relative;
  animation: ${slide} 0.4s ease-in forwards;
`;

const StyledLetter = styled.p`
  font-weight: bold;
  font-family: "Arvo";
  font-size: 2.8rem;
  margin: 0 3rem 0 0;
  color: ${(props: { isSelected: boolean; fill: string }) =>
    props.isSelected ? props.fill : "white"};
  padding: 0;
`;

type AnswerContentProps = {
  isSelected: boolean;
  fill: string;
};

const StyledAnswerContent = styled.p`
  color: ${(props: AnswerContentProps) =>
    props.isSelected ? props.fill : "white"};
  font-family: "Gochi Hand";
  font-size: 2.2rem;
  margin: 0;
`;

export function QNA({
  question,
  onAnswer,
}: {
  question: QuestionType;
  onAnswer: (points: number) => void;
}) {
  const [selectedIdx, setSelectedIdx] = useState<undefined | number>(undefined);

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

  function onClickAnswer(idx: number, points: number) {
    // Do nothing if an index is already selected,
    // so the user cannot select an answer twice
    // during the resulting animation
    if (!selectedIdx) {
      setSelectedIdx(idx);
      setTimeout(() => {
        onAnswer(points);
        setSelectedIdx(undefined);
      }, 800);
    }
  }

  return (
    <StyledQNA key={`question-${question.title}`}>
      <StyledQuestion>{question.title}</StyledQuestion>
      {(question.answers as Array<any>).map((answer, idx) => (
        <StyledAnswer
          key={`quiz-idx-${question.title}-${idx}`}
          onClick={() => onClickAnswer(idx, answer.points)}
          fill={Object.values(colors)[idx]}
          hoverFill={Object.values(colors)[idx + 4]}
          isSelected={idx === selectedIdx}
          disabled={selectedIdx !== undefined}
          isNotSelected={selectedIdx !== undefined && idx !== selectedIdx}
        >
          <StyledLetter
            fill={Object.values(colors)[idx]}
            isSelected={idx === selectedIdx}
          >
            {getLetter(idx)}
          </StyledLetter>
          <StyledAnswerContent
            fill={Object.values(colors)[idx]}
            isSelected={idx === selectedIdx}
          >
            {answer.answer}
          </StyledAnswerContent>
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
