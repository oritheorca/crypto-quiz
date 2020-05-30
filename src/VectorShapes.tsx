import React from "react";
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
  padding: 2rem;
  position: relative;
  left: ${() => Math.random() * 100 - 100}px;
  top: ${() => Math.random() * 100 - 100}px;
`;

const Shape1 = () => (
  <StyledSvg fill="none" height="92" viewBox="0 0 92 92" width="92">
    <circle cx="46" cy="46" fill="#e8d5c3" r="46" />
  </StyledSvg>
);

const Shape2 = () => (
  <StyledSvg width="153" height="137" viewBox="0 0 153 137" fill="none">
    <path
      d="M3.4202 84.5723L67.6579 118.595L121.352 127.496L72.7294 14.0228L78.6025 88.5245L3.4202 84.5723Z"
      fill="#009139"
      fill-opacity="0.15"
    />
  </StyledSvg>
);

const Shape3 = () => (
  <StyledSvg width="150" height="191" viewBox="0 0 150 191" fill="none">
    <path
      d="M26.9274 107.444L109.427 171.788L122.427 83.7877L87.2916 1.68838L60.4268 57.3601L26.9274 107.444Z"
      fill="#E7E2CB"
    />
  </StyledSvg>
);

const Shape4 = () => (
  <StyledSvg width="134" height="122" viewBox="0 0 134 122" fill="none">
    <path
      d="M81.0397 115.806L124.04 76.3061L112.461 23.097L56.5005 6.80612L9.15555 49.5971L19.0398 100.806L81.0397 115.806Z"
      fill="#E7C3C8"
    />
  </StyledSvg>
);

const Shape5 = () => (
  <StyledSvg width="116" height="120" viewBox="0 0 116 120" fill="none">
    <path
      d="M2.57504 75.8974L48.7686 119.888L82.017 13.2213L2.57504 75.8974Z"
      fill="#C3D9CC"
    />
  </StyledSvg>
);

const Shape6 = () => (
  <StyledSvg fill="none" height="137" viewBox="0 0 116 137" width="116">
    <path
      d="m26 11-26 50.5 26 75 90-84.5-22.5-52z"
      fill="#f00021"
      fill-opacity=".15"
    />
  </StyledSvg>
);

const StyledShapes = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

export default function VectorShapes() {
  return (
    <StyledShapes>
      <Shape1 />
      <Shape2 />
      <Shape3 />
      <Shape4 />
      <Shape5 />
      <Shape6 />
    </StyledShapes>
  );
}
