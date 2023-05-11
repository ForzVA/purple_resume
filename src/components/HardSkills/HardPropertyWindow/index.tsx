import React, { useState } from "react";
import Spinner from "../../common/Spinner";
import styles from "./hard-property-window.module.scss";

type HardPropertyWindowTypes = {
  currentProperty: any;
  fakeLoader: boolean;
};

const HardPropertyWindow: React.FC<HardPropertyWindowTypes> = ({
  currentProperty,
  fakeLoader,
}) => {
  const { title, text } = currentProperty;
  return (
    <div className={styles.root}>
      <div className={styles.root__searchPanel}>
        <div className={styles.root__searchPanel__path}>
          alexandervasilesky/hardSkills/{title}
        </div>
        <div className={styles.root__searchPanel__time}>10:09 </div>
      </div>
      {fakeLoader ? (
        <div className={styles.root__spinner}>
          <Spinner />
        </div>
      ) : (
        <>
          <div className={styles.root__title}>{title}</div>
          <div className={styles.root__description}>{text}</div>
        </>
      )}
    </div>
  );
};

export default HardPropertyWindow;
