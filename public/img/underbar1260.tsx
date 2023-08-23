import React from "react";

interface Props {
  className: any;
}

export const UnderBar1260 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1960 2" /* viewBox 속성을 이용하여 이미지의 비율을 유지 */
      fill="none"
      style={{ width: "100%" }} /* 스타일 속성으로 이미지 크기 설정 */
    >
      <path d="M0 1H1960" stroke="black" />
    </svg>
  );
};

// 실제 길이를 1960px로 설정한 뒤 부모 요소의 100%만 나타나게 하는 것으로 길이 조절
// 문제가 생기면 수정할 것