import React from "react";

interface Props {
  className: any;
}

export const AddArtwork = ({ className }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="174"
      height="174"
      viewBox="0 0 174 174"
      fill="none"
    >
      <path d="M87 0V174" stroke="black" />
      <path d="M0 87L174 87" stroke="black" />
    </svg>
  );
};
