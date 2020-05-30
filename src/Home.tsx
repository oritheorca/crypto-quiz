/** @format */

import React, { useEffect, useState } from "react";
import CrossfadeImage from "react-crossfade-image";
import ReactGA from "react-ga";
import styled from "styled-components/macro";
import { coinIllos } from "./content/coinImages";
import { colors } from "./ui";
import VectorShapes from "./VectorShapes";

const StyledWelcomeContainer = styled.div`
  text-align: center;
`;

const StyledWelcome = styled.h2`
  font-size: 2.2rem;
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
  box-shadow: 0px 3px 14px rgba(20, 20, 20, 0.25);
`;

const StyledImage = styled.section`
  display: flex;
  height: 200px;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;

export default function Home({ startGame }: { startGame: () => void }) {
  const [imageIdx, setImageIdx] = useState(0);

  ReactGA.pageview("/home");

  useEffect(() => {
    // Preload images
    Object.values(coinIllos).forEach((picture) => {
      const img = new Image();
      img.src = picture;
    });

    // const intervalId = setInterval(() => {
    //   setImageIdx(
    //     imageIdx === Object.keys(coinIllos).length ? 0 : imageIdx + 1
    //   );
    // }, 4000);

    // return () => clearInterval(intervalId);
  }, [imageIdx]);

  const imageSrc = Object.values(coinIllos)[imageIdx];

  return (
    <StyledWelcomeContainer>
      <VectorShapes />
      <StyledWelcome>Crypto High Presents...</StyledWelcome>
      <StyledHeader>Which cryptocurrency are you?</StyledHeader>
      <StyledImage>
        <CrossfadeImage
          src={imageSrc}
          delay={0}
          duration={1000}
          style={{
            maxHeight: 200,
            margin: "0 auto 48px auto",
            filter: "brightness(0%)",
          }}
        />
      </StyledImage>

      <StyledButton onClick={startGame}>Take the quiz</StyledButton>
    </StyledWelcomeContainer>
  );
}
