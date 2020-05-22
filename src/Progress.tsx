/** @format */

import React from "react";
import styled from "styled-components/macro";
import coinImages from "./content/coinImages";
import { getMaxScore } from "./content/questions";
import { Points } from "./types";
import { colors } from "./ui";

const StyledProgress = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 800px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
  }
`;

const StyledCoinImage = styled.img`
  max-width: 24px;
  height: auto;
  margin: 0 0.4rem 2rem 0.4rem;
  margin-bottom: 1.6rem;
`;

const StyledFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledProgressBar = styled.rect`
  transition: height 0.2s ease-in-out;
`;

export default function Progress({ score }: { score: Points }) {
  const height = 76;

  return (
    <StyledProgress>
      {Object.keys(score).map((coin, idx) => {
        const coinScore = score[coin];
        return (
          <StyledFlexbox>
            <svg width={24} height={height} transform="scale(1,-1)">
              <StyledProgressBar
                key={`rect-${idx}`}
                x={0}
                y={10}
                width="24"
                height={(coinScore / getMaxScore()) * height}
                fill={colors.red}
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
