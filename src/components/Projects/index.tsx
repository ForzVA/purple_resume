import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import AllProjects from "./AllProjects";
import styles from "./projects.module.scss";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <Title text={t("titles.projects")} />
      <AllProjects />
    </div>
  );
};

export default Projects;
