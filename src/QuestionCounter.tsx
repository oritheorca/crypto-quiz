import React from "react";
import styled from "styled-components/macro";
import magnet1 from "./content/images/illos/magnet/Magnet1.png";
import magnet2 from "./content/images/illos/magnet/Magnet2.png";
import magnet3 from "./content/images/illos/magnet/Magnet3.png";
import magnet4 from "./content/images/illos/magnet/Magnet4.png";
import magnet5 from "./content/images/illos/magnet/Magnet5.png";
import questions from "./content/questions";

const StyledQuestionCounter = styled.h2`
  display: flex;
`;

const StyledMagnet = styled.img`
  margin-right: 8px;
  filter: saturate(
    ${(props: { isFilled: boolean }) => (props.isFilled ? "100%" : 0)}
  );
`;

export default function QuestionCounter({
  questionIndex,
}: {
  questionIndex: number;
}) {
  let magnetImages = [magnet1, magnet2, magnet3, magnet4, magnet5];
  magnetImages = magnetImages.concat(magnetImages);

  return (
    <StyledQuestionCounter>
      {magnetImages.slice(0, questions.length).map((src, idx) => (
        <StyledMagnet src={src} alt="" isFilled={questionIndex >= idx} />
      ))}
    </StyledQuestionCounter>
  );
}
