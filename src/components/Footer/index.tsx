import Github from "../../icons/Github";
import LinkedIn from "../../icons/Linkedin";
import Telegram from "../../icons/Telegram";
import SocialNetwork from "../common/SocialNetwork";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.root__links}>
        <li>
          <SocialNetwork
            Component={Github}
            link="https://github.com/ForzVA"
            className={styles.root__links__icon}
          />
        </li>
        <li>
          <SocialNetwork
            Component={LinkedIn}
            link="https://www.linkedin.com/in/alexvasilevsky/"
            className={styles.root__links__icon}
          />
        </li>
        <li>
          <SocialNetwork
            Component={Telegram}
            link="https://t.me/alexxvass"
            className={styles.root__links__icon}
          />
        </li>
      </ul>
      <span className={styles.root__title}>Minsk, Belarus</span>
      <span className={styles.root__date}>©2023</span>
    </div>
  );
};

export default Footer;
