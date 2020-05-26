import questions from "../content/questions";
import coins from "../content/coins";
import { Points } from "../types";

const distribution: Points = coins.reduce<Points>((result, coin) => {
  result[coin] = 0;
  return result;
}, {});

questions.forEach((question: any) => {
  const numAnswers = question.answers.length;
  question.answers.forEach((answer: any) => {
    Object.keys(answer.points).forEach((coin: any) => {
      const points = answer.points[coin];
      distribution[coin] += points / numAnswers;
    });
  });
});

console.log(distribution);
