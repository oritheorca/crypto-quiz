/** @format */

import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components/macro";
import { coinIllos, coinLogos } from "./content/coinImages";
import { descriptions, nicknames } from "./content/coins";
import MatchScore from "./MatchScore";
import ResultsHeader from "./ResultsHeader";
import ShareButtons from "./ShareButtons";
import { Points } from "./types";

const StyledResults = styled.section`
  text-align: center;
  padding: 0 2rem;
  margin-bottom: 8rem;
`;

const StyledMatch = styled.h2`
  font-size: 2.4rem;
  margin-top: 0;
  margin-bottom: 0;
  margin-bottom: 2rem;

  @media (min-width: 1100px) {
    margin-bottom: 0;
  }
`;

const StyledResultsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0rem;
  padding-bottom: 2rem;
  justify-content: center;
`;

const StyledLogoRetake = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const StyledIlloContainer = styled.div`
  width: 100%;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0;
`;

const StyledIllo = styled.img`
  object-fit: contain;
  max-width: 300px;
  max-height: 360px;
  margin-bottom: 2rem;
`;

const StyledDescription = styled.p`
  text-align: left;
  font-size: 1.6rem;
  line-height: 3.2rem;
  max-width: 600px;
  margin-bottom: 3rem;
  white-space: pre-line;
`;
const StyledIlloDesc = styled.div`
  text-align: left;
  margin-top: 2rem;
  max-width: 100%;

  @media (min-width: 800px) {
    margin-left: 3rem;
    max-width: 665px;
  }
`;

const StyledLogo = styled.img`
  height: 70px;
  object-fit: contain;
  max-width: 100%;
  margin: 0 auto;
`;

const StyledNickname = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-family: "Gochi Hand";
`;

const StyledTopResult = styled.section`
  width: 100%;
  max-width: 600px;
`;

const StyledSecondRow = styled.section`
  @media (min-width: 800px) {
    display: flex;
  }
`;

export default function WinningCoin({
  restartGame,
  coin,
  score,
}: {
  restartGame: () => void;
  coin: string;
  score: Points;
}) {
  ReactGA.pageview(`/results`);

  ReactGA.event({
    category: "Quiz",
    action: "Results",
    label: coin,
  });

  return (
    <StyledResults>
      <ResultsHeader>You are...</ResultsHeader>
      <StyledResultsBox>
        <StyledTopResult>
          <StyledLogoRetake>
            <StyledLogo src={coinLogos[coin]} alt="" />
          </StyledLogoRetake>
          <StyledNickname>{nicknames[coin].toUpperCase()}</StyledNickname>
          <MatchScore score={score[coin]} />
        </StyledTopResult>
        <StyledSecondRow>
          <StyledIlloContainer>
            <StyledIllo src={coinIllos[coin]} alt="" />
          </StyledIlloContainer>
          <StyledIlloDesc>
            <StyledDescription>{descriptions[coin]}</StyledDescription>
          </StyledIlloDesc>
        </StyledSecondRow>
        <ShareButtons displayedCoin={coin} restartGame={restartGame} />
      </StyledResultsBox>
    </StyledResults>
  );
}
