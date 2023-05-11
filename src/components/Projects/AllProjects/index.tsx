import React, { useState } from "react";
import OneProject from "../OneProject";
import styles from "./all-projects.module.scss";
import { projects } from "./data";

const AllProjects: React.FC = () => {
  const [openTabId, setOpenTabId] = useState(1);

  return (
    <div className={styles.root}>
      {projects.map((project) => {
        return <OneProject setOpenTabId={setOpenTabId} project={project} openTabId={openTabId}/>;
      })}
    </div>
  );
};

export default AllProjects;
