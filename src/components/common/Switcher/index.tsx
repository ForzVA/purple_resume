import React from "react";
import clsx from "clsx";

import styles from "./switcher.module.scss";

type SwitcherProps = {
  disabled: boolean;
  activeText?: string;
  disabledText?: string;
};

const Switcher: React.FC<SwitcherProps> = ({
  disabled,
  activeText,
  disabledText,
}) => {
  return (
    <div className={clsx(styles.root, !disabled && styles.active)}>
      {activeText && disabledText && (
        <div className={styles.root__text}>
          <span>{activeText}</span>
          <span>{disabledText}</span>
        </div>
      )}

      <div className={clsx(styles.root__slider, !disabled && styles.active)} />
    </div>
  );
};

export default Switcher;
