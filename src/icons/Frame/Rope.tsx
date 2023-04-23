import React from "react";

type RopeTypes = {
  className?: string;
  width?: string;
  height?: string;
};

const Rope: React.FC<RopeTypes> = ({
  className,
  width = "205",
  height = "100",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 283 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 136.642C147.321 -29.2018 150.566 -34.5916 281.017 136.642"
        stroke="white"
        stroke-width="3"
      />
      <ellipse
        cx="151.014"
        cy="9.58229"
        rx="9"
        ry="8.5"
        transform="rotate(-7.35537 151.014 9.58229)"
        fill="white"
      />
    </svg>
  );
};

export default Rope;
