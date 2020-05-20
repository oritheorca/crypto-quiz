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
    border: 4px solid ${colors.gray};
    box-sizing: border-box;
    overflow-y: scroll;
  }
`;

const StyledApp = styled.div`
  border: 8px solid ${colors.lightGray};
  text-align: left;
  max-width: 800px;
  height: 100%;
  min-height: calc(100vh - 8px);
  box-sizing: border-box;
  padding: 2rem;
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
    setIndex(0);
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
      <WhiteboardBorder />
      {getContents()}
    </StyledApp>
  );
}
