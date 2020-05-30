/** @format */

import React, { useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import questions from "./content/questions";
import QuestionCounter from "./QuestionCounter";
import { colors } from "./ui";

const dotSize = 16;

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

const StyledSvg = styled.svg`
  margin-right: 1rem;
  min-width: ${dotSize}px;
`;

const StyledMagnet = styled.circle`
  border-radius: 50%;
`;

const StyledQNA = styled.section`
  position: relative;
  width: 100%;
  padding: 0 2rem;
`;

const slide = keyframes`
  from {
    margin-left: 0;
  }

  to {
    margin-left: -100%;
  }
`;

const StyledQuestionContainer = styled.section`
  width: 200%;
  display: flex;
  position: relative;
  animation: ${(props: { isAdvancing: boolean }) =>
      props.isAdvancing ? slide : "none"}
    0.25s ease-in forwards;
`;

const StyledPlaceholder = styled.section`
  position: relative;
  width: 100%;
  padding: 0 2rem;
`;

export function QNA({
  question,
  onAnswer,
}: {
  question: any;
  onAnswer: (points: number) => void;
}) {
  return (
    <StyledQNA>
      <StyledQuestion>{question.title}</StyledQuestion>
      {(question.answers as Array<any>).map((answer, idx) => (
        <StyledAnswer
          key={`quiz-idx-${idx}`}
          onClick={() => onAnswer(answer.points)}
        >
          <StyledSvg width={dotSize} height={dotSize}>
            <StyledMagnet
              fill={colors.red}
              r={dotSize / 2}
              cx={dotSize / 2}
              cy={dotSize / 2}
            />
          </StyledSvg>
          <div>{answer.answer}</div>
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
  const nextQuestion =
    questionIndex < questions.length - 1
      ? questions[questionIndex + 1]
      : questions[0];
  const [isAdvancing, setAdvancing] = useState(false);

  function advanceQuestion(points: number) {
    setAdvancing(true);
    setTimeout(() => {
      setAdvancing(false);
      onAnswer(points);
    }, 250);
  }

  return (
    <React.Fragment>
      <QuestionCounter questionIndex={questionIndex} />
      <StyledQuestionContainer isAdvancing={isAdvancing}>
        <QNA question={question} onAnswer={advanceQuestion} />
        {nextQuestion && (
          <QNA question={nextQuestion} onAnswer={advanceQuestion} />
        )}
        {!nextQuestion && <StyledPlaceholder />}
      </StyledQuestionContainer>
    </React.Fragment>
  );
}
