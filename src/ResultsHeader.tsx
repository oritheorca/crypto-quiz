import React, { ReactNode } from "react";
import styled from "styled-components/macro";

const StyledText = styled.h2`
  font-weight: bold;
  font-size: 3.2rem;
  margin: 8rem auto 4rem auto;
  padding: 0 2rem;
  max-width: 600px;
  text-align: center;
`;

export default function ResultsHeader({ children }: { children: ReactNode }) {
  return <StyledText>{children}</StyledText>;
}
