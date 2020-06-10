import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { coinIllos } from "./content/coinImages";

const StyledWrapper = styled.section`
  height: 230px;
  width: 100%;
  position: relative;
`;

type StyledImgProps = {
  height: number;
  showing: boolean;
};

const StyledImg = styled.img`
  object-fit: cover;
  height: ${(props: StyledImgProps) => props.height}px;
  filter: brightness(0%);
  transform: scale(0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props: StyledImgProps) => (props.showing ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;

  @media (min-width: 800px) {
    display: none;
  }
`;

export default function Crossfade() {
  const [coinIdx, setCoinIdx] = useState(0);

  const images = Object.values(coinIllos);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCoinIdx(coinIdx + 1);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  });

  const isEven = coinIdx % 2 === 0;

  return (
    <StyledWrapper>
      <StyledImg
        src={images[(isEven ? coinIdx : coinIdx - 1) % 8]}
        height={230}
        showing={isEven}
        alt=""
      />
      <StyledImg
        src={images[(!isEven ? coinIdx : coinIdx - 1) % 8]}
        height={230}
        showing={!isEven}
        alt=""
      />
    </StyledWrapper>
  );
}
