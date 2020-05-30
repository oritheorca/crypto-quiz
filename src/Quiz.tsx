import React from "react";
import ReactGA from "react-ga";
import Progress from "./Progress";
import Question from "./Question";
import { Points } from "./types";

export default function Quiz({
  score,
  questionIndex,
  onAnswer,
}: {
  score: Points;
  questionIndex: number;
  onAnswer: (points: any) => void;
}) {
  ReactGA.pageview(`/quiz/${questionIndex}`);

  return (
    <section>
      <Question questionIndex={questionIndex} onAnswer={onAnswer} />
      <Progress score={score} />
    </section>
  );
}
