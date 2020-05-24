/** @format */

import React from "react";
import styled from "styled-components/macro";
import coinIllos from "./content/coinIllos";
import { coinLogos } from "./content/coinImages";
import { descriptions } from "./content/coins";
import Progress from "./Progress";
import { Points } from "./types";

const StyledResults = styled.section`
  text-align: center;
`;

const StyledMatch = styled.p`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Gochi Hand";
`;

const StyledWinner = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
`;

const StyledButton = styled.button`
  width: 100%;
  font-size: 1.2rem;
  cursor: pointer;
`;

const StyledFlexbox = styled.div`
  display: flex;
`;

const StyledCoinImage = styled.img`
  max-width: 120px;
  height: auto;
  margin: 0 0.8rem 2rem 0.8rem;
`;

const StyledIllo = styled.img`
  object-fit: cover;
  max-width: 300px;
  max-height: 450px;
`;

const StyledDescription = styled.p`
  text-align: left;
  font-size: 1.2rem;
`;
const StyledIlloDesc = styled.div`
  text-align: left;
  margin-top: 2rem;
  margin-left: 3rem;
`;

const StyledLogo = styled.img`
  height: 70px;
  margin-bottom: 20px;
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
    <StyledResults>
      <StyledMatch>You are...</StyledMatch>
      <Progress score={score} />
      <StyledFlexbox>
        <StyledIllo src={coinIllos[winner]} alt="" />
        <StyledIlloDesc>
          <StyledLogo src={coinLogos[winner]} alt="" />
          <StyledDescription>{descriptions[winner]}</StyledDescription>
        </StyledIlloDesc>
      </StyledFlexbox>
      <StyledButton onClick={restartGame}>Replay</StyledButton>
    </StyledResults>
  );
}
