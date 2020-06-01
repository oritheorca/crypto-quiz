/** @format */

// Get the maximum score achievable across all coins.
export function getMaxScore() {
  const maxPerCoin: { [coin: string]: number } = {
    "Binance Coin": 0,
    Bitcoin: 0,
    "Bitcoin Cash": 0,
    Dogecoin: 0,
    Ethereum: 0,
    Libra: 0,
    Ripple: 0,
    Zcash: 0,
  };

  questions.forEach((q) => {
    q.answers.forEach((answer: any) => {
      const { points } = answer;
      Object.keys(points).forEach((coin) => (maxPerCoin[coin] += points[coin]));
    });
  });

  return Math.max(...Object.values(maxPerCoin));
}

export type AnswerType = {
  answer: string;
  points: { [coin: string]: number };
};

export type QuestionType = {
  title: string;
  answers: AnswerType[];
};

const questions: QuestionType[] = [
  {
    title: "If you went back to high school, you would be...",
    answers: [
      {
        answer: "One of the popular kids",
        points: {
          Libra: 3,
          "Binance Coin": 3,
          Bitcoin: 3,
        },
      },
      {
        answer: "Always hanging out in the computer lab",
        points: {
          Ethereum: 3,
          Zcash: 4,
          "Bitcoin Cash": 2,
        },
      },
      {
        answer: "Making everyone laugh as the class clown",
        points: {
          Dogecoin: 4,
        },
      },
      {
        answer: "Bullying the nerds at recess",
        points: {
          Ripple: 4,
        },
      },
    ],
  },
  {
    title: "In the yearbook, you were voted most likely to...",
    answers: [
      {
        answer: "Become the CEO of a Fortune 500 company",
        points: {
          "Binance Coin": 4,
          Libra: 3,
        },
      },
      {
        answer: "Found a successful startup",
        points: {
          Ethereum: 3,
          "Binance Coin": 3,
          Ripple: 3,
        },
      },
      {
        answer: "Become a famous YouTuber",
        points: {
          Dogecoin: 4,
        },
      },
      {
        answer: "Live on a farm and grow your own food",
        points: {
          Bitcoin: 4,
          "Bitcoin Cash": 4,
        },
      },
    ],
  },
  {
    title: "Where in the classroom do you like to sit?",
    answers: [
      {
        answer:
          "All the way in the back. I want to nap without getting caught...",
        points: {
          Dogecoin: 4,
        },
      },
      {
        answer: "I always sit in the front of the class.",
        points: {
          Libra: 3,
          "Binance Coin": 3,
        },
      },
      {
        answer: "Depends on where my friends are sitting.",
        points: {
          Ethereum: 3,
        },
      },
    ],
  },
  {
    title: "Bomb threat! Should the police be able to read students' texts?",
    answers: [
      {
        answer: "Yes. Safety trumps the individual right to privacy.",
        points: {
          "Binance Coin": 3,
          Ripple: 3,
        },
      },
      {
        answer: "Only if there's evidence beyond a reasonable doubt.",
        points: {
          Libra: 3,
        },
      },
      {
        answer: "No. That's a hard line that shouldn't be crossed.",
        points: {
          Zcash: 6,
          Ethereum: 3,
        },
      },
    ],
  },
  {
    title: "Time for a new phone! What would you go for?",
    answers: [
      {
        answer: "The latest iPhone. Can't live without iMessage!",
        points: {
          Bitcoin: 4,
          Libra: 3,
        },
      },
      {
        answer:
          "The new Google Pixel. The reviewers say the specs are better...",
        points: {
          Ethereum: 3,
          "Bitcoin Cash": 3,
        },
      },
      {
        answer: "No thanks. I'm not brainwashed by consumerism.",
        points: {
          Dogecoin: 4,
          Zcash: 5,
        },
      },
    ],
  },
  {
    title: "You're asked to organize a fundraiser. How do you go about it?",
    answers: [
      {
        answer: "Do it all myself. It's just easier that way.",
        points: {
          Ethereum: 2,
          Ripple: 4,
          "Binance Coin": 4,
        },
      },
      {
        answer: "Set up a committee and share responsibilities.",
        points: {
          Libra: 2,
          Bitcoin: 4,
          "Bitcoin Cash": 3,
        },
      },
      {
        answer: "Procrastinate and hope that everything turns out alright.",
        points: {
          Dogecoin: 3,
        },
      },
    ],
  },
  {
    title: "You have your final exams coming up. How do you prepare?",
    answers: [
      {
        answer: "Procrastinate until the night before",
        points: {
          Zcash: 3,
          "Bitcoin Cash": 4,
        },
      },
      {
        answer: "Create a study group and study together",
        points: {
          Ripple: 5,
        },
      },
      {
        answer: "Make a detailed study plan and study alone",
        points: {
          Libra: 2,
        },
      },
    ],
  },
  {
    title: "You would be most hurt if someone called you...",
    answers: [
      {
        answer: "Boring",
        points: {
          Dogecoin: 4,
          Ethereum: 2,
        },
      },
      {
        answer: "Unreliable",
        points: {
          Bitcoin: 4,
        },
      },
      {
        answer: "Immoral",
        points: {
          Zcash: 4,
        },
      },
      {
        answer: "A failure",
        points: {
          "Bitcoin Cash": 4,
        },
      },
    ],
  },
  {
    title: "What's your most visited website this week?",
    answers: [
      {
        answer: "Gmail",
        points: {
          Ripple: 3,
          "Binance Coin": 3,
        },
      },
      {
        answer: "Facebook",
        points: {
          Libra: 2,
        },
      },
      {
        answer: "YouTube",
        points: {
          Dogecoin: 3,
        },
      },
      {
        answer: "Twitter",
        points: {
          Ethereum: 2,
          Bitcoin: 2,
          "Bitcoin Cash": 4,
        },
      },
    ],
  },
  {
    title: "What's your favorite movie?",
    answers: [
      {
        answer: "The Matrix",
        points: {
          Bitcoin: 5,
          "Bitcoin Cash": 3,
          Ethereum: 3,
        },
      },
      {
        answer: "The Wolf of Wall Street",
        points: {
          Ripple: 4,
          Dogecoin: 1,
          "Binance Coin": 2,
        },
      },
      {
        answer: "Lord of the Rings",
        points: {
          Libra: 4,
          Zcash: 2,
        },
      },
    ],
  },
];

export default questions;
