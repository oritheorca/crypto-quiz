/** @format */

import React from "react";
import styled from "styled-components/macro";
import coinImages from "./content/coinImages";

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
  max-width: 80px;
  height: auto;
  margin-right: 1.6rem;
  margin-bottom: 2rem;
`;

export default function Results({
  restartGame,
  winner,
}: {
  restartGame: () => void;
  winner: string;
}) {
  return (
    <section>
      <StyledMatch>You are:</StyledMatch>
      <StyledFlexbox>
        <StyledCoinImage src={coinImages[winner]} alt={winner} />
        <StyledWinner>{winner}</StyledWinner>
      </StyledFlexbox>
      <StyledButton onClick={restartGame}>Replay</StyledButton>
    </section>
  );
}
