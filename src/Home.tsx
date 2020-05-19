/** @format */

import React from "react";
import styled from "styled-components/macro";

const StyledWelcomeContainer = styled.div`
  text-align: center;
`;

const StyledWelcome = styled.h3`
  font-size: 1.6rem;
`;

const StyledHeader = styled.h1`
  text-transform: uppercase;
  font-size: 2.4rem;
`;

const StyledButton = styled.button`
  font-size: 1.6rem;
`;

export default function Home({ startGame }: { startGame: () => void }) {
  return (
    <StyledWelcomeContainer>
      <StyledWelcome>Crypto High Presents:</StyledWelcome>
      <StyledHeader>Which cryptocurrency are you?</StyledHeader>
      <StyledButton onClick={startGame}>Take the quiz!</StyledButton>
    </StyledWelcomeContainer>
  );
}
