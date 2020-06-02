/** @format */

import React from "react";
import ReactGA from "react-ga";
import styled from "styled-components/macro";
import { coinIllos } from "./content/coinImages";
import { buttonBoxShadow, colors } from "./ui";

const StyledWelcomeContainer = styled.div`
  text-align: center;
`;

const StyledWelcome = styled.h2`
  font-size: 2.8rem;
  padding: 0 2rem;
  margin-bottom: 4rem;
  font-family: "Gochi Hand";
  text-transform: uppercase;
`;

const StyledHeader = styled.h1`
  font-size: 3.2rem;
  font-weight: bold;
  margin: 0 4rem 6rem 4rem;
`;

const StyledButton = styled.button`
  margin-bottom: 4rem;
  background: ${colors.blue};
  color: ${colors.white};
  ${buttonBoxShadow};
  border: none;

  &:hover,
  &:active {
    background: ${colors.darkBlue};
  }
`;

const StyledImages = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 6rem;
`;

const StyledImg = styled.img`
  object-fit: cover;
  height: ${(props: { height: number }) => props.height};
  filter: brightness(0%);
  margin: 0 2.4rem;
  transform: scale(0.9);
  display: none;

  &:first-child {
    display: block;
  }

  @media (min-width: 800px) {
    display: block;
  }
`;

export function Silhouette({ coin, height }: { coin: string; height: number }) {
  return <StyledImg src={coinIllos[coin]} height={height} alt="" />;
}

export default function Home({ startGame }: { startGame: () => void }) {
  ReactGA.pageview("/home");

  return (
    <StyledWelcomeContainer>
      <StyledWelcome>Crypto High Presents...</StyledWelcome>
      <StyledHeader>Which cryptocurrency are you?</StyledHeader>
      <StyledImages>
        <Silhouette coin="Binance Coin" height={215} />
        <Silhouette coin="Ethereum" height={227} />
        <Silhouette coin="Dogecoin" height={250} />
        <Silhouette coin="Zcash" height={172} />
      </StyledImages>

      <StyledButton onClick={startGame}>Take the quiz</StyledButton>
    </StyledWelcomeContainer>
  );
}
