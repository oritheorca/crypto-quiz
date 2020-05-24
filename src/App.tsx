/** @format */

import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";
import "./App.css";
import coins from "./content/coins";
import questions from "./content/questions";
import Home from "./Home";
import Quiz from "./Quiz";
import Results from "./Results";
import { Points } from "./types";
import { colors } from "./ui";

const WhiteboardBorder = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0;
    box-sizing: border-box;
    overflow-y: scroll;
    background-color: ${colors.blue};
  }
`;

const StyledApp = styled.div`
  border: 8px solid ${colors.gray};
  background-color: white;
  border-radius: 12px;
  text-align: left;
  max-width: 1000px;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;

  @media (min-width: 1000px) {
    min-height: 0;
    height: 760px;
    max-height: 760px;
    margin-top: 2rem;
  }
`;

const StyledBorder = styled.div`
  border: 8px solid ${colors.lightGray};
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 16px);
  box-sizing: border-box;
  padding: 1.2rem;
  @media (min-width: 1000px) {
    min-height: 0;
    padding: 2rem 4rem;
  }
  position: relative;
  overflow: hidden;
`;

export default function App() {
  const [questionIndex, setIndex] = useState<number | undefined>(undefined);

  const initialScore = coins.reduce((score: Points, coin) => {
    score[coin] = 0;
    return score;
  }, {});

  const [score, setScore] = useState<Points>(initialScore);

  const startGame = () => setIndex(0);
  const nextQuestion = (points: Points) => {
    Object.keys(points).forEach((coin) => {
      score[coin] = score[coin] + points[coin];
    });
    setScore(score);
    setIndex(questionIndex === undefined ? 0 : questionIndex + 1);
  };

  function restartGame() {
    setIndex(undefined);
    setScore(initialScore);
  }

  function getWinningCoin() {
    let winner = coins[0];
    let winningScore = score[coins[0]];
    coins.forEach((coin) => {
      if (score[coin] > winningScore) {
        winner = coin;
        winningScore = score[coin];
      }
    });
    return winner;
  }

  const getContents = () => {
    if (questionIndex === undefined) {
      return <Home startGame={startGame} />;
    } else if (questionIndex === questions.length) {
      return (
        <Results
          restartGame={restartGame}
          winner={getWinningCoin()}
          score={score}
        />
      );
    } else {
      return (
        <Quiz
          score={score}
          questionIndex={questionIndex}
          nextQuestion={nextQuestion}
        />
      );
    }
  };

  return (
    <StyledApp>
      <StyledBorder>
        <WhiteboardBorder />
        {getContents()}
      </StyledBorder>
    </StyledApp>
  );
}
