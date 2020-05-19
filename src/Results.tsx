/** @format */

import React from "react";
import styled from "styled-components/macro";
import coinImages from "./content/coinImages";
import Progress from "./Progress";
import { Points } from "./types";

const StyledMatch = styled.p`
  font-size: 2rem;
  margin-bottom: 0;
`;

const StyledWinner = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledButton = styled.button`
  width: 100%;
  font-size: 1.2rem;
  cursor: pointer;
`;

const StyledFlexbox = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCoinImage = styled.img`
  max-width: 24px;
  height: auto;
  margin: 0 0.8rem 2rem 0.8rem;
`;

export default function Results({
  restartGame,
  winner,
  score,
}: {
  restartGame: () => void;
  winner: string;
  score: Points;
}) {
  return (
    <section>
      <StyledMatch>You are:</StyledMatch>
      <StyledFlexbox>
        <StyledCoinImage src={coinImages[winner]} alt={winner} />
        <StyledWinner>{winner}</StyledWinner>
      </StyledFlexbox>
      <StyledButton onClick={restartGame}>Replay</StyledButton>
      <Progress score={score} />
    </section>
  );
}
