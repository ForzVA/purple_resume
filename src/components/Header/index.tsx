import React from "react";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.root__list}>
        <li className={styles.root__list__item}>
          <a className={styles.root__list__item__link} href="#">
            MAIN
          </a>
        </li>
        <li className={styles.root__list__item}>
          <a className={styles.root__list__item__link} href="#">
            ABOUT ME
          </a>
        </li>
        <li className={styles.root__list__item}>
          <a className={styles.root__list__item__link} href="#">
            SKILLS
          </a>
        </li>
        <li className={styles.root__list__item}>
          <a className={styles.root__list__item__link} href="#">
            COURSES
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
