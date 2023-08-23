import React from "react";

interface Props {
  className: any;
}

export const UnderLine = ({ className }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1260"
      height="2"
      viewBox="0 0 1260 2"
      fill="none"
    >
      <path
        d="M0 1H1260"
        stroke="white"
        stroke-opacity="0.4"
        stroke-width="0.5"
      />
    </svg>
  );
};
