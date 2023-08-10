import React from "react";

interface Props {
  className: any;
}

export const Vector = ({ className }: Props): JSX.Element => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="40" viewBox="0 0 10 40" fill="none">
  <g filter="url(#filter0_d_62_1127)">
    <path d="M5 4L5 36" stroke="white"/>
  </g>
  <defs>
    <filter id="filter0_d_62_1127" x="0.5" y="0" width="9" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_1127"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_1127" result="shape"/>
    </filter>
  </defs>
</svg>
  );
};
