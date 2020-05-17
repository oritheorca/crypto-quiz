import React from "react";
import styled from "styled-components/macro";

const StyledWelcome = styled.h3`
  text-transform: uppercase;
`;

export default function Home({ startGame }: { startGame: () => void }) {
  return (
    <section>
      <StyledWelcome>Welcome to Crypto High!</StyledWelcome>
      <div>If you were a cryptocurrency, which one would you be?</div>
      <button onClick={startGame}>Let's find out!</button>
    </section>
  );
}
