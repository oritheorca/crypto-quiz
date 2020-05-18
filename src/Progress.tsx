import React from "react";
import styled from "styled-components/macro";
import { Points } from "./types";
import coinImages from "./content/coinImages";

const StyledCoinImage = styled.img`
  max-width: 40px;
  height: auto;
  margin-right: 1.6rem;
  margin-bottom: 2rem;
`;

export default function Progress({ score }: { score: Points }) {
  return (
    <section>
      <svg height="100px" width="100%">
        {Object.keys(score).map((coin, idx) => {
          const x = idx * 20;
          return (
            <rect
              key={`rect-${idx}`}
              color="black"
              x={x}
              width="10"
              // height={score[coin]}
              height={idx * 10}
              fill="currentcolor"
            />
          );
        })}
      </svg>
      {Object.keys(score).map((coin, idx) => {
        return (
          <StyledCoinImage
            key={`coin-img-${idx}`}
            src={coinImages[coin]}
            alt={coin}
          />
        );
      })}
    </section>
  );
}
