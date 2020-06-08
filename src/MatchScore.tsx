/** @format */

import React from "react";
import styled, { keyframes } from "styled-components/macro";
import { getMaxScore } from "./content/questions";

const StyledProgressContainer = styled.div`
  width: 100%;
  height: 20px;
  background: #ffefdc;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
`;

const fillBar = (width: number) => keyframes`
  from {
    width: 0%;
  }
  to {
    width: ${width}%;
  }
`;

const StyledProgressFill = styled.div`
  background: linear-gradient(180deg, #f2cd38 0%, #f6e9b4 100%);
  animation: ${(props: { fraction: number }) =>
      fillBar(Math.floor(props.fraction * 100))}
    0.5s ease-in forwards;
  height: 100%;
  border-radius: 10px;
`;

const StyledMatchScore = styled.p`
  font-size: 2.4rem;
  font-family: "Gochi Hand";
  margin: 1.2rem 0 3rem 0;
`;

export default function MatchScore({ score }: { score: number }) {
  const fraction = score / getMaxScore();
  return (
    <div>
      <StyledProgressContainer>
        <StyledProgressFill fraction={fraction} />
      </StyledProgressContainer>
      <StyledMatchScore>{Math.round(fraction * 100)}% match</StyledMatchScore>
    </div>
  );
}
