import React from "react";
import Progress from "./Progress";
import QuestionCounter from "./QuestionCounter";
import questions from "./content/questions";

export default function Quiz({
  score,
  questionIndex,
  nextQuestion,
}: {
  score: object;
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
      <Progress score={score} />
    </section>
  );
}
