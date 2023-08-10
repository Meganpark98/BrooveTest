import React from "react";

interface Props {
  className: any;
}

export const Magnifying = ({ className }: Props): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M25.4286 23.572L20.2344 18.3756C21.7918 16.3461 22.5189 13.8002 22.2682 11.2543C22.0175 8.70846 20.8078 6.35327 18.8845 4.66651C16.9612 2.97975 14.4683 2.08773 11.9115 2.17141C9.35468 2.25509 6.92543 3.3082 5.11652 5.1171C3.30762 6.92601 2.25451 9.35526 2.17083 11.9121C2.08715 14.4689 2.97917 16.9618 4.66593 18.8851C6.35269 20.8084 8.70788 22.0181 11.2538 22.2688C13.7996 22.5195 16.3455 21.7924 18.375 20.235L23.5736 25.4346C23.6957 25.5567 23.8406 25.6536 24.0001 25.7197C24.1597 25.7857 24.3306 25.8197 24.5033 25.8197C24.6759 25.8197 24.8469 25.7857 25.0064 25.7197C25.1659 25.6536 25.3109 25.5567 25.433 25.4346C25.5551 25.3126 25.6519 25.1676 25.718 25.0081C25.7841 24.8486 25.8181 24.6776 25.8181 24.505C25.8181 24.3323 25.7841 24.1613 25.718 24.0018C25.6519 23.8423 25.5551 23.6974 25.433 23.5753L25.4286 23.572ZM4.8125 12.2506C4.8125 10.7796 5.2487 9.34162 6.06595 8.11853C6.88319 6.89544 8.04477 5.94216 9.4038 5.37923C10.7628 4.8163 12.2583 4.66901 13.701 4.95599C15.1437 5.24297 16.469 5.95132 17.5091 6.99148C18.5493 8.03163 19.2576 9.35687 19.5446 10.7996C19.8316 12.2423 19.6843 13.7378 19.1214 15.0968C18.5584 16.4558 17.6051 17.6174 16.3821 18.4346C15.159 19.2519 13.721 19.6881 12.25 19.6881C10.2781 19.6861 8.3875 18.9018 6.99313 17.5075C5.59877 16.1131 4.81453 14.2225 4.8125 12.2506Z"
        fill="black"
      />
    </svg>
  );
};
