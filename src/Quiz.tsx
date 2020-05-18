import React from "react";
import Progress from "./Progress";
import Question from "./Question";
import QuestionCounter from "./QuestionCounter";
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
      <QuestionCounter questionIndex={questionIndex} />
      <Question questionIndex={questionIndex} nextQuestion={nextQuestion} />
      <Progress score={score} />
    </section>
  );
}
