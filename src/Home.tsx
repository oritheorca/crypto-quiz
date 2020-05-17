import React from "react";

export default function Home({ startGame }: { startGame: () => void }) {
  return (
    <div>
      <div className="Home">
        If you were a cryptocurrency, which one would you be?
      </div>
      <button onClick={startGame}>Start the questionnaire!</button>
    </div>
  );
}
