import React from "react";

type LoupTypes = {
  className: string;
};

const Loupe: React.FC<LoupTypes> = ({ className }) => {
  return (
    <svg
      className={className}
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32.9732 0C14.7981 0 2.26616e-05 14.7923 0 32.9673C2.26616e-05 51.1424 14.7981 65.9405 32.9732 65.9405C40.9887 65.9405 48.3399 63.0587 54.0615 58.2827L84.8158 89.0428C87.6481 91.8751 91.8986 87.6247 89.0662 84.7923L58.3061 54.0322C63.0679 48.3147 65.9405 40.9696 65.9405 32.9673C65.9405 14.7923 51.1482 0 32.9732 0ZM32.9732 5.99512C47.9082 5.99524 59.9454 18.0323 59.9454 32.9673C59.9454 47.9025 47.9082 59.9454 32.9732 59.9454C18.0381 59.9454 5.99514 47.9025 5.99512 32.9673C5.99514 18.0323 18.0381 5.99524 32.9732 5.99512Z" />
    </svg>
  );
};

export default Loupe;
