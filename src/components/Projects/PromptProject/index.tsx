import { useTranslation } from "react-i18next";
import Smile from "../../../icons/Emoji/Smile";
import styles from "./prompt-project.module.scss";

const PromptProject = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.root}>
      <p className={styles.root__title}>{t("promptProject.title")}</p>
      <Smile className={styles.root__smile} />
    </div>
  );
};

export default PromptProject;
