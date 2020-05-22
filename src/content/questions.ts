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

const questions = [
  {
    title: "If you went back to high school, you would be...",
    answers: [
      {
        answer: "One of the popular kids.",
        points: {
          Libra: 3,
          "Binance Coin": 3,
          Bitcoin: 3,
        },
      },
      {
        answer: "Always hanging out in the computer lab.",
        points: {
          Ethereum: 3,
          Zcash: 4,
          "Bitcoin Cash": 2,
        },
      },
      {
        answer: "Making everyone laugh as the class clown.",
        points: {
          Dogecoin: 4,
        },
      },
      {
        answer: "Bullying the nerds at recess.",
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
        answer: "Become the CEO of a Fortune 500 company.",
        points: {
          "Binance Coin": 4,
          Libra: 3,
        },
      },
      {
        answer: "Found a successful startup.",
        points: {
          Ethereum: 3,
          "Binance Coin": 3,
          Ripple: 3,
        },
      },
      {
        answer: "Become a famous YouTuber.",
        points: {
          Dogecoin: 4,
        },
      },
      {
        answer: "Live on a farm and grow your own food.",
        points: {
          Bitcoin: 4,
          "Bitcoin Cash": 4,
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
          Dogecoin: 5,
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
    title:
      "Bomb threat! Should the police be able to read students' private messages?",
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
];

export default questions;
