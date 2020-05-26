import React from "react";
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
  return (
    <section>
      <Question questionIndex={questionIndex} onAnswer={onAnswer} />
      <Progress score={score} />
    </section>
  );
}
