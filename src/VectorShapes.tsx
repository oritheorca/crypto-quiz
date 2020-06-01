/** @format */

import React, { useLayoutEffect, useState } from "react";
import styled, { keyframes } from "styled-components/macro";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSvg = styled.svg`
  animation: ${spin} 20s infinite linear;
  padding: 4rem;
  position: relative;
  left: ${() => Math.random() * 200 - 200}px;
  top: ${() => Math.random() * 200 - 200}px;
`;

const StyledPath = styled.path`
  opacity: 0.15;
  transform: scale(${Math.random() * 0.5 + 0.75});
`;

const Shape2 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="153" height="137" viewBox="0 0 153 137" fill="none">
    <StyledPath
      d="M3.4202 84.5723L67.6579 118.595L121.352 127.496L72.7294 14.0228L78.6025 88.5245L3.4202 84.5723Z"
      fill={useColor ? "#009139" : "gray"}
    />
  </StyledSvg>
);

const Shape3 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="150" height="191" viewBox="0 0 150 191" fill="none">
    <StyledPath
      d="M26.9274 107.444L109.427 171.788L122.427 83.7877L87.2916 1.68838L60.4268 57.3601L26.9274 107.444Z"
      fill={useColor ? "#E7E2CB" : "gray"}
    />
  </StyledSvg>
);

const Shape4 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="134" height="122" viewBox="0 0 134 122" fill="none">
    <StyledPath
      d="M81.0397 115.806L124.04 76.3061L112.461 23.097L56.5005 6.80612L9.15555 49.5971L19.0398 100.806L81.0397 115.806Z"
      fill={useColor ? "#E7C3C8" : "gray"}
    />
  </StyledSvg>
);

const Shape5 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="116" height="120" viewBox="0 0 116 120" fill="none">
    <StyledPath
      d="M2.57504 75.8974L48.7686 119.888L82.017 13.2213L2.57504 75.8974Z"
      fill={useColor ? "#C3D9CC" : "gray"}
    />
  </StyledSvg>
);

const Shape6 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg fill="none" height="137" viewBox="0 0 116 137" width="116">
    <StyledPath
      d="m26 11-26 50.5 26 75 90-84.5-22.5-52z"
      fill={useColor ? "#f00021" : "gray"}
    />
  </StyledSvg>
);

const StyledShapes = styled.section`
  width: 140%;
  height: 140%;
  position: fixed;
  left: -20%;
  top: -20%;
  z-index: -1;
`;

export default function VectorShapes({
  useColor = false,
}: {
  useColor?: boolean;
}) {
  const [numShapes, setNumShapes] = useState(5);

  function drawShapes() {
    setNumShapes(
      Math.round(
        Math.max(
          5,
          (window.innerWidth * window.innerHeight * 1.5) / (200 * 200)
        )
      )
    );
  }

  useLayoutEffect(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    drawShapes();

    window.addEventListener("resize", drawShapes);
    return () => window.removeEventListener("resize", drawShapes);
  }, []);

  console.log("numShapes: ", numShapes);

  const shapes = [Shape2, Shape3, Shape4, Shape5, Shape6];

  return (
    <StyledShapes>
      {[...Array(numShapes)].map((shape, idx) => {
        const Shape = shapes[Math.floor(Math.random() * shapes.length)];
        return <Shape useColor={useColor} />;
      })}
    </StyledShapes>
  );
}
