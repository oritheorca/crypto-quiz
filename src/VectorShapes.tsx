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

const fadeIn = keyframes`
  from {
    opacity: 0;
    margin-bottom: -2%;
  }

  to {
    opacity: 1;
    margin-bottom: 0;
  }
`;

const StyledShapes = styled.section`
  width: 140%;
  height: 140%;
  position: fixed;
  left: -20%;
  top: -20%;
  z-index: -1;
`;

const StyledSvg = styled.svg`
  animation: ${spin} 20s infinite linear, ${fadeIn} 0.5s linear;
  padding: 4rem;
  position: relative;
  left: ${() => Math.random() * 200 - 100}px;
  top: ${() => Math.random() * 200 - 100}px;
  overflow: visible;
`;

const StyledGroup = styled.g`
  transform: rotate(${(props: { rotation: number }) => props.rotation}deg);
  transform-origin: center;
`;

const StyledPath = styled.path`
  opacity: 0.15;
  transform: scale(${(props: { scaleFactor: number }) => props.scaleFactor});
  transform-origin: center;
  overflow: visible;
`;

export function ShapePath({ d, fill }: { d: string; fill: string }) {
  return <StyledPath d={d} fill={fill} scaleFactor={Math.random() + 0.5} />;
}

const Shape1 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="150" height="143" viewBox="0 0 150 143" fill="none">
    <ShapePath
      d="M24.1528 107.43L11.2254 36.9869L41.5 68.7077L77 36.9869L88 79.284L135.225 61.4869L98.7246 120.487L61.4387 113.959L24.1528 107.43Z"
      fill={useColor ? "#f00021" : "gray"}
    />
  </StyledSvg>
);

const Shape2 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="153" height="137" viewBox="0 0 153 137" fill="none">
    <ShapePath
      d="M3.4202 84.5723L67.6579 118.595L121.352 127.496L72.7294 14.0228L78.6025 88.5245L3.4202 84.5723Z"
      fill={useColor ? "#009139" : "gray"}
    />
  </StyledSvg>
);

const Shape3 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="150" height="191" viewBox="0 0 150 191" fill="none">
    <ShapePath
      d="M26.9274 107.444L109.427 171.788L122.427 83.7877L87.2916 1.68838L60.4268 57.3601L26.9274 107.444Z"
      fill={useColor ? "#E7E2CB" : "gray"}
    />
  </StyledSvg>
);

const Shape4 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="134" height="122" viewBox="0 0 134 122" fill="none">
    <ShapePath
      d="M81.0397 115.806L124.04 76.3061L112.461 23.097L56.5005 6.80612L9.15555 49.5971L19.0398 100.806L81.0397 115.806Z"
      fill={useColor ? "#E7C3C8" : "gray"}
    />
  </StyledSvg>
);

const Shape5 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="116" height="120" viewBox="0 0 116 120" fill="none">
    <ShapePath
      d="M2.57504 75.8974L48.7686 119.888L82.017 13.2213L2.57504 75.8974Z"
      fill={useColor ? "#C3D9CC" : "gray"}
    />
  </StyledSvg>
);

const Shape6 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg fill="none" height="137" viewBox="0 0 116 137" width="116">
    <ShapePath
      d="m26 11-26 50.5 26 75 90-84.5-22.5-52z"
      fill={useColor ? "#f00021" : "gray"}
    />
  </StyledSvg>
);

const Shape7 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg fill="none" width="153" height="151" viewBox="0 0 153 151">
    <ShapePath
      d="M26.9282 115.444L101.5 128.5L138.001 69.5001L87.2923 9.68849L14.0007 45.0001L26.9282 115.444Z"
      fill={useColor ? "#f00021" : "gray"}
    />
  </StyledSvg>
);

const Shape8 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg fill="none" width="190" height="155" viewBox="0 0 190 155">
    <ShapePath
      d="M0.500293 56.5L61.5 110.5L189.999 98.4999L120.501 35.9999L0.500293 56.5Z"
      fill={useColor ? "#f00021" : "gray"}
    />
  </StyledSvg>
);

const Shape9 = ({ useColor }: { useColor: boolean }) => (
  <StyledSvg width="125" height="110" viewBox="0 0 125 110" fill="none">
    <ShapePath
      d="M0.225063 0.986813L38 109.5L124.225 25.4868L59.5 25.4868L0.225063 0.986813Z"
      fill={useColor ? "#f00021" : "gray"}
    />
  </StyledSvg>
);

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
    drawShapes();

    window.addEventListener("resize", drawShapes);
    return () => window.removeEventListener("resize", drawShapes);
  }, []);

  const shapes = [
    Shape1,
    Shape2,
    Shape3,
    Shape4,
    Shape5,
    Shape6,
    Shape7,
    Shape8,
    Shape9,
  ];

  return (
    <StyledShapes>
      {[...Array(numShapes)].map((shape, idx) => {
        const Shape = shapes[Math.floor(Math.random() * shapes.length)];
        return <Shape key={idx} useColor={useColor} />;
      })}
    </StyledShapes>
  );
}
