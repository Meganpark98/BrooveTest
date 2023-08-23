import React from "react";

interface Props {
  className: any;
}

export const BrooveButtonBlack = ({ className }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
    >
      <path
        d="M28.1061 0H6.89389C3.08716 0 0 3.08716 0 6.89389V28.1061C0 31.9128 3.08716 35 6.89389 35H28.1061C31.9128 35 35 31.9128 35 28.1061V6.89389C35.0033 3.08716 31.9161 0 28.1061 0ZM17.8233 34.4927C8.1838 34.6717 0.331596 26.8195 0.510658 17.18C0.676457 8.09427 8.09095 0.679773 17.1767 0.510658C26.8195 0.331596 34.6717 8.1838 34.4927 17.8266C34.3235 26.909 26.909 34.3235 17.8233 34.4927Z"
        fill="white"
      />
    </svg>
  );
};
