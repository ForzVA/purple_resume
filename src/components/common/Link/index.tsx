import React from "react";
import clsx from "clsx";
import styles from "./link.module.scss";

type LinkProps = {
  readonly text?: string;
  readonly icon?: React.ReactNode;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly disabled?: boolean;
  readonly iconLeft?: boolean;
  readonly link?: string;
  readonly onClick?: () => void;
};

const Link: React.FC<LinkProps> = ({
  text = "кукуха",
  icon,
  disabled = false,
  iconLeft = true,
  link = "",
  className,
  onClick,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        styles.root,
        className,
        !link ? styles.root__disabled : ""
      )}
    >
      {icon && iconLeft && <div className={styles.root__icon}>{icon}</div>}
      {text && text}
      {icon && !iconLeft && <div className={styles.root__icon}>{icon}</div>}
    </a>
  );
};

export default Link;
