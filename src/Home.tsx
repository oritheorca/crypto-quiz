/** @format */

import React from "react";
import styled from "styled-components/macro";
import bitcoinIllo from "./content/images/illos/coins/Bitcoin.png";
import dogecoinIllo from "./content/images/illos/coins/Dogecoin.png";
import ethereumIllo from "./content/images/illos/coins/Ethereum.png";
import zcashIllo from "./content/images/illos/coins/Zcash.png";
import curtainL from "./content/images/illos/Curtain-L.jpg";
import curtainR from "./content/images/illos/Curtain-R.jpg";
import eraser from "./content/images/illos/eraser.png";
import marker from "./content/images/illos/marker.png";
import { colors } from "./ui";

const StyledWelcomeContainer = styled.div`
  text-align: center;
`;

const StyledWelcome = styled.h3`
  font-size: 1rem;
  font-family: "Mali", sans-serif;

  @media (min-width: 1000px) {
    font-size: 1.6rem;
  }
`;

const StyledHeader = styled.h1`
  text-transform: uppercase;
  font-size: 2.4rem;
  color: ${colors.red};
  max-width: 550px;
  margin: 20px auto;

  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;

const StyledButton = styled.button`
  font-size: 1.2rem;
  background: ${colors.red};
  border: 0;
  color: white;
  font-weight: bold;
  border-radius: 0;
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translate(-50%);

  @media (min-width: 1000px) {
    font-size: 1.6rem;
  }
`;

const StyledLeftCurtain = styled.img`
  position: absolute;
  transform: rotate(-6deg);
  left: -30px;
  top: 200px;
  height: 370px;

  @media (min-width: 800px) {
    position: absolute;
    left: -50px;
    top: 0px;
    height: 710px;
  }
`;

const StyledRightCurtain = styled.img`
  position: absolute;
  right: -35px;
  top: 204px;
  height: 371px;

  @media (min-width: 800px) {
    right: -70px;
    top: -13px;
    height: 742px;
  }
`;

const StyledSilhouette = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 12rem;
  width: 140px;
  filter: brightness(-100%);
  display: none;

  @media (min-width: 800px) {
    display: block;
  }
`;

const StyledSilhouetteBitcoin = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8rem;
  width: 140px;
  filter: brightness(-100%);
  display: block;

  @media (min-width: 800px) {
    display: none;
  }
`;

const StyledMarker = styled.img`
  position: absolute;
  right: 200px;
  bottom: -52px;
  transform: rotate(-88deg);
  height: 120px;

  @media (min-width: 800px) {
    height: 180px;
  }
`;

const StyledEraser = styled.img`
  position: absolute;
  left: 170px;
  bottom: -8px;
  width: 120px;
  transform: rotate(10deg);

  @media (min-width: 800px) {
    width: 180px;
  }
`;

export default function Home({ startGame }: { startGame: () => void }) {
  return (
    <StyledWelcomeContainer>
      {/* <StyledWelcome>Crypto High Presents:</StyledWelcome> */}
      <StyledHeader>Which cryptocurrency are you?</StyledHeader>
      <StyledLeftCurtain src={curtainL} alt="" />
      <StyledRightCurtain src={curtainR} alt="" />
      <StyledSilhouette src={bitcoinIllo} style={{ left: "25%" }} />
      <StyledSilhouette src={ethereumIllo} style={{ left: "42%" }} />
      <StyledSilhouette src={zcashIllo} style={{ left: "58%" }} />
      <StyledSilhouette src={dogecoinIllo} style={{ left: "75%" }} />
      <StyledMarker src={marker} />
      <StyledEraser src={eraser} />
      <StyledSilhouetteBitcoin src={bitcoinIllo} />
      <StyledButton onClick={startGame}>Let's find out!</StyledButton>
    </StyledWelcomeContainer>
  );
}
