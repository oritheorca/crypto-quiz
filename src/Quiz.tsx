import React from "react";
import Progress from "./Progress";
import Question from "./Question";
import { Points } from "./types";

export default function Quiz({
  score,
  questionIndex,
  nextQuestion,
}: {
  score: Points;
  questionIndex: number;
  nextQuestion: (points: any) => void;
}) {
  return (
    <section>
      <Question questionIndex={questionIndex} nextQuestion={nextQuestion} />
      <Progress score={score} />
    </section>
  );
}
