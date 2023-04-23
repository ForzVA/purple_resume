import React from "react";
import Github from "../../icons/Github";
import LinkedIn from "../../icons/Linkedin";
import Telegram from "../../icons/Telegram";
import styles from "./main.module.scss";
import myPhoto from "../../assets/images/my-photo.png";
import Duck from "../../icons/Frame/Duck";
import Rope from "../../icons/Frame/Rope";

const Main: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__info}>
        <div className={styles.root__info__text}>
          <span className={styles.root__info__text__name}>
            ALEXANDER VASILEVSKY
          </span>
          <span className={styles.root__info__text__position}>
            Front-end developer(React)
          </span>
        </div>
        <ul className={styles.root__info__links}>
          <li>
            <Github />
          </li>
          <li>
            <LinkedIn />
          </li>
          <li>
            <Telegram />
          </li>
        </ul>
      </div>
      <div className={styles.root__photo}>
        <Duck className={styles.root__photo__duck} />
        <Rope className={styles.root__photo__rope} />
        <img className={styles.root__photo__img} src={myPhoto} alt="avatar" />
      </div>
    </div>
  );
};

export default Main;
