import React from "react";

export default function Progress({ score }: { score: object }) {
  return (
    <svg viewBox="0 0 150 100">
      {Object.keys(score).map((score, idx) => {
        const x = idx * 20;
        return (
          <rect
            color="white"
            x={x}
            width="10"
            height={score}
            fill="currentcolor"
          />
        );
      })}
    </svg>
  );
}
