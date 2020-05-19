/** @format */

import React from "react";
import styled from "styled-components/macro";
import coinImages from "./content/coinImages";
import { Points } from "./types";

const StyledCoinImage = styled.img`
  max-width: 24px;
  height: auto;
  margin: 0 0.4rem 2rem 0.4rem;
  margin-bottom: 2rem;
`;

const StyledFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledProgress = styled.div`
  display: flex;
`;

const StyledProgressBar = styled.rect`
  transition: height 0.2s ease-in-out;
`;

export default function Progress({ score }: { score: Points }) {
  return (
    <StyledProgress>
      {Object.keys(score).map((coin, idx) => {
        const coinScore = score[coin];
        return (
          <StyledFlexbox>
            <svg width={24} height={112} transform="scale(1,-1)">
              <StyledProgressBar
                key={`rect-${idx}`}
                x={7}
                y={10}
                width="10"
                height={coinScore}
                fill="black"
              />
            </svg>
            <StyledCoinImage
              key={`coin-img-${idx}`}
              src={coinImages[coin]}
              alt={coin}
            />
          </StyledFlexbox>
        );
      })}
    </StyledProgress>
  );
}
