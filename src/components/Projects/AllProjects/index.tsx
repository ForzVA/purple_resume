import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import OneProject from "../OneProject";
import PromptProject from "../PromptProject";
import styles from "./all-projects.module.scss";

const AllProjects: React.FC = () => {
  const [openTabId, setOpenTabId] = useState(1);
  const { t } = useTranslation();

  const projects: Array<any> = t("projects", { returnObjects: true });

  return (
    <div className={styles.root}>
      {projects.map((project) => {
        return (
          <OneProject
            setOpenTabId={setOpenTabId}
            project={project}
            openTabId={openTabId}
          />
        );
      })}
      <PromptProject />
    </div>
  );
};

export default AllProjects;
