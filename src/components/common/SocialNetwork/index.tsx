import React from "react";

type SocialNetworkType = {
  link: string;
  target?: string;
  className?: string;
  Component: React.ElementType;
};

const SocialNetwork: React.FC<SocialNetworkType> = ({
  link,
  target = "_blank",
  Component,
  className,
}) => {
  return (
    <a href={link} target={target} rel="noreferrer">
      <Component className={className} />
    </a>
  );
};

export default SocialNetwork;
