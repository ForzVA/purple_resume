import React from "react";
import styles from "./title.module.scss";

type TitleTypes = {
  text: string;
};

const Title: React.FC<TitleTypes> = ({ text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__text}>{text}</div>
    </div>
  );
};

export default Title;
