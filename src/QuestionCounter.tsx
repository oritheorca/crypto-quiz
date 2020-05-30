/** @format */

import React from "react";
import styled from "styled-components/macro";
import magnetImages from "./content/images/illos/magnets/magnetImages";
import questions from "./content/questions";

const StyledQuestionCounter = styled.h2`
  display: flex;
  margin: 0 0 0 -0.8rem;
  padding: 0 2rem 0 2rem;
`;

const StyledMagnet = styled.img`
  margin-right: 8px;
  filter: saturate(
    ${(props: { isFilled: boolean }) => (props.isFilled ? "100%" : 0)}
  );
  opacity: ${(props: { isFilled: boolean }) => (props.isFilled ? 1 : 0.5)};
  width: 24px;
  height: 24px;

  @media (min-width: 1100px) {
    width: 48px;
    height: 48px;
  }
`;

export default function QuestionCounter({
  questionIndex,
}: {
  questionIndex: number;
}) {
  const magnets = magnetImages.concat(magnetImages);

  return (
    <StyledQuestionCounter>
      {magnets.slice(0, questions.length).map((src, idx) => (
        <StyledMagnet src={src} alt="" isFilled={questionIndex >= idx} />
      ))}
    </StyledQuestionCounter>
  );
}
