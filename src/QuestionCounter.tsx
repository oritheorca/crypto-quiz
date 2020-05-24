import React from "react";
import styled from "styled-components/macro";
import magnetImages from "./content/images/illos/magnets/magnetImages";
import questions from "./content/questions";

const StyledQuestionCounter = styled.h2`
  display: flex;
  margin-left: -8px;
`;

const StyledMagnet = styled.img`
  margin-right: 8px;
  filter: saturate(
    ${(props: { isFilled: boolean }) => (props.isFilled ? "100%" : 0)}
  );
  opacity: ${(props: { isFilled: boolean }) => (props.isFilled ? 1 : 0.5)};
  width: 24px;
  height: 24px;

  @media (min-width: 600px) {
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
