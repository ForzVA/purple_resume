import React from "react";

type circleType = {
  className: string;
  strokeWidth?: string;
};

const Circle: React.FC<circleType> = ({ className }) => {
  return (
    <svg
      className={className}
      width="406"
      height="406"
      viewBox="0 0 406 406"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="203" cy="203" r="193" stroke="black" stroke-opacity="0.23" />
    </svg>
  );
};

export default Circle;
