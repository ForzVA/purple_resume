import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-scroll";
import Switcher from "../common/Switcher";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const [language, setLanguage] = useState<boolean>(true);
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    setLanguage(!language);
  };

  React.useEffect(() => {
    if (language === true) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  }, [language]);

  const changeLanguageHandler = () => {};

  return (
    <div className={styles.root}>
      <div
        className={styles.root__switcher}
        onClick={() => {
          changeLanguage();
        }}
      >
        <Switcher disabled={language} activeText="RU" disabledText="EN" />
      </div>
      <ul className={styles.root__list}>
        <li className={styles.root__list__item}>
          <Link
            className={styles.root__list__item__link}
            activeClass={styles.root__list__item__link__active}
            duration={500}
            to="main"
            spy={true}
            smooth={true}
            offset={-50}
          >
            {t("nav.main")}
          </Link>
        </li>
        <li className={styles.root__list__item}>
          <Link
            className={styles.root__list__item__link}
            activeClass={styles.root__list__item__link__active}
            duration={500}
            to="hard_skills"
            spy={true}
            smooth={true}
            offset={-50}
          >
            {t("nav.hardSkills")}
          </Link>
        </li>
        <li className={styles.root__list__item}>
          <Link
            className={styles.root__list__item__link}
            activeClass={styles.root__list__item__link__active}
            duration={500}
            to="soft_skills"
            spy={true}
            smooth={true}
            offset={-50}
            onClick={() => {
              changeLanguageHandler();
            }}
          >
            {t("nav.softSkills")}
          </Link>
        </li>
        <li className={styles.root__list__item}>
          <Link
            className={styles.root__list__item__link}
            activeClass={styles.root__list__item__link__active}
            duration={500}
            to="courses"
            spy={true}
            smooth={true}
            offset={-50}
          >
            {t("nav.courses")}
          </Link>
        </li>
        <li className={styles.root__list__item}>
          <Link
            className={styles.root__list__item__link}
            activeClass={styles.root__list__item__link__active}
            duration={500}
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
          >
            {t("nav.projects")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
