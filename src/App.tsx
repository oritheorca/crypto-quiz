import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Home from "./Home";
import Quiz from "./Quiz";
import Results from "./Results";
import questions from "./content/questions";
import coins from "./content/coins";
import { Points } from "./types";

export default function App() {
  const [questionIndex, setIndex] = useState<number | undefined>(0);

  const initialScore = coins.reduce(
    (score: { [index: string]: number }, coin) => {
      score[coin] = 0;
      return score;
    },
    {}
  );

  const [score, setScore] = useState<Points>(initialScore);

  const startGame = () => setIndex(0);
  const nextQuestion = (points: Points) => {
    Object.keys(points).forEach((coin) => {
      score[coin] = score[coin] + points[coin];
    }, {});
    setScore(score);
    setIndex(questionIndex === undefined ? 0 : questionIndex + 1);
  };

  const getContents = () => {
    if (questionIndex === undefined) {
      return <Home startGame={startGame} />;
    } else if (questionIndex === questions.length) {
      return <Results />;
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {getContents()}
      </header>
    </div>
  );
}
