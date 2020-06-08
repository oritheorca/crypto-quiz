/** @format */

import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components/macro";
import About from "./About";
import CoinProfile from "./CoinProfile";
import coins from "./content/coins";
import ResultsHeader from "./ResultsHeader";
import ShareButtons from "./ShareButtons";
import { Points } from "./types";
import VectorShapes from "./VectorShapes";
import WinningCoin from "./WinningCoin";

const StyledResultsContainer = styled.div`
  text-align: left;
  max-width: 800px;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto 2rem auto;
  position: relative;
`;

export default function Results({
  restartGame,
  score,
}: {
  restartGame: () => void;
  score: Points;
}) {
  ReactGA.pageview(`/results`);

  const coinsByScore = coins.sort((a, b) => score[b] - score[a]);
  const winningCoin = coinsByScore[0];

  ReactGA.event({
    category: "Quiz",
    action: "Results",
    label: winningCoin,
  });

  return (
    <StyledResultsContainer>
      <VectorShapes />
      <WinningCoin coin={winningCoin} restartGame={restartGame} score={score} />
      <About />

      <ResultsHeader>Meet the rest of the class</ResultsHeader>
      {coinsByScore.slice(1, coinsByScore.length).map((c) => (
        <CoinProfile displayedCoin={c} score={score} key={c} />
      ))}

      <footer>
        <ResultsHeader>Thanks for playing!</ResultsHeader>
        <ShareButtons displayedCoin={winningCoin} restartGame={restartGame} />
      </footer>
    </StyledResultsContainer>
  );
}
