import React, { useState } from "react";
import styles from "./header.module.scss";
import { Link } from "react-scroll";
import Switcher from "../common/Switcher";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const Header: React.FC = () => {
  const navElements: any = {
    main: "main",
    hard_skills: "hardSkills",
    soft_skills: "softSkills",
    courses: "courses",
    projects: "projects",
  };

  const [toggle, setToggle] = useState<boolean>(false);
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
    <header className={clsx(styles.root, toggle ? styles.root_menuOpen : null)}>
      <div
        className={clsx(
          styles.root__menuBtnContain,
          toggle ? styles.root__menuBtnContain_active : null
        )}
      >
        <div
          className={clsx(styles.root__menuBtnContain__menuBtn, [
            toggle ? styles.root__menuBtnContain__menuBtn_active : null,
          ])}
          onClick={() => setToggle(!toggle)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={styles.root__switcher}
        onClick={() => {
          changeLanguage();
        }}
      >
        <Switcher disabled={language} activeText="RU" disabledText="EN" />
      </div>
      <nav
        className={clsx(
          styles.root__nav,
          toggle ? styles.root__nav_active : null
        )}
      >
        <ul className={styles.root__nav__items}>
          {Object.keys(navElements).map((navElement) => {
            return (
              <li className={styles.root__nav__items__item}>
                <Link
                  className={styles.root__nav__items__item__link}
                  activeClass={styles.root__nav__items__item__link__active}
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
      </nav>
    </header>
  );
};

export default Header;
