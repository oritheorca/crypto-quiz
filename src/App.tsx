import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Home from "./Home";
import Question from "./Question";
import Results from "./Results";

export default function App() {
  const questions = [];
  const [questionIndex, setIndex] = useState<number | undefined>(undefined);

  const startGame = () => setIndex(0);
  const getContents = () => {
    if (questionIndex === undefined) {
      return <Home startGame={startGame} />;
    } else if (questionIndex === questions.length) {
      return <Results />;
    } else {
      return <Question />;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {getContents()}
      </header>
    </div>
  );
}