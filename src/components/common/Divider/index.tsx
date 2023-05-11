import React from "react";
import styles from "./divider.module.scss";
import clsx from "clsx";

type DividerTypes = {
  className?: string;
};

const Divider: React.FC<DividerTypes> = ({ className }) => {
  return <div className={clsx(styles.root, className)} />;
};

export default Divider;
