import React from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

type ButtonProps = {
  readonly text?: string;
  readonly icon?: React.ReactNode;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly disabled?: boolean;
  readonly iconLeft?: boolean;
  readonly onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text = "кукуха",
  icon,
  disabled = false,
  iconLeft = true,
  className,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(styles.root, className)}
      onClick={onClick}
    >
      {icon && iconLeft && <div className={styles.root__icon}>{icon}</div>}
      {text && text}
      {icon && !iconLeft && <div className={styles.root__icon}>{icon}</div>}
    </button>
  );
};

export default Button;
