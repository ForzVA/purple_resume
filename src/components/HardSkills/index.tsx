import React, { useState } from "react";
import Title from "../common/Title";
import styles from "./hard-skills.module.scss";
import HardPropertiesAll from "./HardPropertiesAll";
import HardPropertyWindow from "./HardPropertyWindow";
import { useTranslation, withTranslation } from "react-i18next";

const HardSkills: React.FC = () => {
  const [currentPropertyId, setCurrentPropertyId] = useState<number>(0);
  const [fakeLoader, setFakeLoader] = useState(true);
  const { t } = useTranslation();

  const hardSkills: Array<any> = t("hardSkills", { returnObjects: true });

  React.useEffect(() => {
    if (fakeLoader) {
      const timer = setTimeout(() => {
        setFakeLoader(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [fakeLoader]);

  return (
    <div className={styles.root}>
      <Title text={t("titles.hardSkills")} />
      <HardPropertiesAll
        setCurrentPropertyId={setCurrentPropertyId}
        allProperties={hardSkills}
        currentPropertyId={currentPropertyId}
        setFakeLoader={setFakeLoader}
      />
      <HardPropertyWindow
        currentProperty={hardSkills[currentPropertyId]}
        fakeLoader={fakeLoader}
      />
    </div>
  );
};

export default withTranslation()(HardSkills);
