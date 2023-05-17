import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-scroll";
import Switcher from "../common/Switcher";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const navElements: any = {
    main: "main",
    hard_skills: "hardSkills",
    soft_skills: "softSkills",
    courses: "courses",
    projects: "projects",
  };

  const [language, setLanguage] = useState<boolean>(true);
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (language === true) {
      i18n.changeLanguage("ru-RU");
    }
    if (language === false) {
      i18n.changeLanguage("en-US");
    }
  };

  console.log(i18n.language);

  React.useEffect(() => {
    i18n.language === "en-US" ? setLanguage(true) : setLanguage(false);
  });

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
        {Object.keys(navElements).map((navElement) => {
          return (
            <li className={styles.root__list__item}>
              <Link
                className={styles.root__list__item__link}
                activeClass={styles.root__list__item__link__active}
                duration={500}
                to={`${navElement}`}
                spy={true}
                smooth={true}
                offset={-50}
              >
                {t(`nav.${navElements[navElement]}`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
