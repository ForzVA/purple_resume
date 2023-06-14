import React, { useState } from "react";
import Clock from "../../common/Clock";
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
          alexandervasilevsky/hardSkills/{title}
        </div>
        <div className={styles.root__searchPanel__shortPath}>
          .../hardSkills/{title}
        </div>
        <Clock className={styles.root__searchPanel__time} />
      </div>
      {fakeLoader ? (
        <div className={styles.root__spinner}>
          <Spinner />
        </div>
      ) : (
        <>
          <div className={styles.root__title}>{title}</div>
          <div className={styles.root__description}>
            {text.map((paragraph: string) => {
              return <p>{paragraph}</p>;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default HardPropertyWindow;
