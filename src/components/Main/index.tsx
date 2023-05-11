import React from "react";
import { useTranslation } from "react-i18next";
import Github from "../../icons/Github";
import LinkedIn from "../../icons/Linkedin";
import Telegram from "../../icons/Telegram";
import styles from "./main.module.scss";
import myPhoto from "../../assets/images/my-photo.png";
import Duck from "../../icons/Frame/Duck";
import Rope from "../../icons/Frame/Rope";
import Divider from "../common/Divider";

const Main: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.root__info}>
        <div className={styles.root__info__text}>
          <Divider />
          <span className={styles.root__info__text__name}>
            {t("mainInfo.name")}
          </span>
          <span className={styles.root__info__text__position}>
            {t("mainInfo.position")}
          </span>
          <Divider />
        </div>
        <ul className={styles.root__info__links}>
          <li>
            <Github className={styles.root__info__links__github} />
          </li>
          <li>
            <LinkedIn className={styles.root__info__links__linkedIn} />
          </li>
          <li>
            <Telegram className={styles.root__info__links__telegram} />
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
