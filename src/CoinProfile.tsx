/** @format */

import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components/macro";
import { coinIllos, coinLogos } from "./content/coinImages";
import { descriptions, nicknames } from "./content/coins";
import MatchScore from "./MatchScore";
import { Block } from "./QuestionCounter";
import { Points } from "./types";
import { colors } from "./ui";

const StyledResults = styled.section`
  text-align: center;
  padding: 4rem 2rem 8rem 2rem;
`;

const StyledResultsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  justify-content: center;
`;

const StyledLogoRetake = styled.div`
  display: flex;
  justify-content: flex-start;
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
  max-height: 380px;
  margin-bottom: 2rem;
`;

const StyledDescription = styled.p`
  text-align: left;
  font-size: 1.6rem;
  line-height: 3.2rem;
  max-width: 600px;
  margin-bottom: 3rem;
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
  height: 50px;
  object-fit: contain;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 800px) {
    margin: inherit;
  }
`;

const StyledNickname = styled.h2`
  font-size: 3rem;
  text-align: center;
  font-family: "Gochi Hand";

  @media (min-width: 800px) {
    text-align: left;
  }
`;

const StyledSecondRow = styled.section`
  @media (min-width: 800px) {
    display: flex;
  }
`;

const StyledBlocks = styled.section`
  display: flex;
  justify-content: center;

  > * {
    margin: 0 2rem;
  }
`;

export default function CoinProfile({
  displayedCoin,
  score,
}: {
  displayedCoin: string;
  score: Points;
}) {
  ReactGA.pageview(`/results`);

  return (
    <StyledResults>
      <StyledResultsBox>
        <StyledSecondRow>
          <StyledIlloContainer>
            <StyledIllo src={coinIllos[displayedCoin]} alt="" />
          </StyledIlloContainer>
          <StyledIlloDesc>
            <StyledLogoRetake>
              <StyledLogo src={coinLogos[displayedCoin]} alt="" />
            </StyledLogoRetake>
            <StyledNickname>
              {nicknames[displayedCoin].toUpperCase()}
            </StyledNickname>
            <MatchScore score={score[displayedCoin]} />
            <StyledDescription>{descriptions[displayedCoin]}</StyledDescription>
          </StyledIlloDesc>
        </StyledSecondRow>
      </StyledResultsBox>
      <StyledBlocks>
        {[...Array(4)].map((el, idx) => (
          <Block key={idx} fill={Object.values(colors)[idx % 4]} />
        ))}
      </StyledBlocks>
    </StyledResults>
  );
}
