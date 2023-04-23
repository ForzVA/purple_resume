import clsx from "clsx";
import React, { CSSProperties } from "react";
import styles from "./container.module.scss";

type ContainerTypes = {
  readonly component?: React.ElementType;
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly children: React.ReactNode;
};

const Container: React.FC<ContainerTypes> = ({
  children,
  className: classNameFromProps,
  style,
  component = "div",
}) => {
  const className = clsx(styles.root, classNameFromProps);

  return React.createElement(component, { style, className }, children);
};

export default Container;
