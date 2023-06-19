import React from "react";
import { useTranslation } from "react-i18next";
import Github from "../../icons/Github";
import LinkedIn from "../../icons/Linkedin";
import Telegram from "../../icons/Telegram";
import styles from "./main.module.scss";
import Duck from "../../icons/Frame/Duck";
import Rope from "../../icons/Frame/Rope";
import Divider from "../common/Divider";
import SocialNetwork from "../common/SocialNetwork";
import Circle from "../../icons/Circle";
import clsx from "clsx";

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
            <SocialNetwork
              Component={Github}
              link="https://github.com/ForzVA"
              className={clsx(
                styles.root__info__links__github,
                styles.root__info__links__icon
              )}
            />
          </li>
          <li>
            <SocialNetwork
              Component={LinkedIn}
              link="https://www.linkedin.com/in/alexvasilevsky/"
              className={clsx(
                styles.root__info__links__linkedIn,
                styles.root__info__links__icon
              )}
            />
          </li>
          <li>
            <SocialNetwork
              Component={Telegram}
              link="https://t.me/alexxvass"
              className={clsx(
                styles.root__info__links__telegram,
                styles.root__info__links__icon
              )}
            />
          </li>
        </ul>
      </div>
      <div className={styles.root__portrait}>
        <Circle className={clsx(styles.circle, styles.circle__up)} />
        <Circle className={clsx(styles.circle, styles.circle__middle)} />
        <Circle className={clsx(styles.circle, styles.circle__down)} />
        <Circle className={clsx(styles.circle, styles.circle__right)} />
        <div className={styles.root__photo}>
          <Duck className={styles.root__photo__duck} />
          <Rope className={styles.root__photo__rope} />
          <img
            className={styles.root__photo__img}
            src={process.env.PUBLIC_URL + "/images/my-photo.png"}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
