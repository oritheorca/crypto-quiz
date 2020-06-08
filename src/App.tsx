/** @format */

import React, { useState } from "react";
import ReactGA from "react-ga";
import styled from "styled-components/macro";
import "./App.css";
import coins from "./content/coins";
import questions from "./content/questions";
import Home from "./Home";
import Quiz from "./Quiz";
import Results from "./Results";
import { Points } from "./types";
import VectorShapes from "./VectorShapes";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  text-align: left;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  overflow: hidden;
`;

const gaTracking =
  process.env.NODE_ENV === "production" ? "UA-167874833-1" : "UA-167874833-2";

ReactGA.initialize(gaTracking, {
  debug: true,
  titleCase: false,
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});

export default function App() {
  const [questionIndex, setIndex] = useState<number | undefined>(undefined);

  const initialScore = coins.reduce((score: Points, coin) => {
    score[coin] = 0;
    return score;
  }, {});

  const [score, setScore] = useState<Points>(initialScore);

  const startGame = () => setIndex(0);
  const onAnswer = (points: Points) => {
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

  if (questionIndex === questions.length) {
    return <Results restartGame={restartGame} score={score} />;
  }

  const getContents = () => {
    if (questionIndex === undefined) {
      return <Home startGame={startGame} />;
    } else {
      return (
        <Quiz score={score} questionIndex={questionIndex} onAnswer={onAnswer} />
      );
    }
  };

  return (
    <StyledApp>
      <VectorShapes />
      {getContents()}
    </StyledApp>
  );
}
