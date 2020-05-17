import React from "react";
import Coins from "./Progress";
import QuestionCounter from "./QuestionCounter";
import questions from "./content/questions";

export default function Quiz({
  questionIndex,
  nextQuestion,
}: {
  questionIndex: number;
  nextQuestion: (points: any) => void;
}) {
  const question = questions[questionIndex];
  return (
    <section>
      <QuestionCounter />
      <h1>{question.title}</h1>
      {(question.answers as Array<any>).map((answer, idx) => (
        <button
          key={`quiz-idx-${idx}`}
          onClick={() => nextQuestion(answer.points)}
        >
          {answer.answer}
        </button>
      ))}
      <Coins />
    </section>
  );
}
