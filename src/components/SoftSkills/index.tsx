import React, { useState } from "react";
import styles from "./softSkills.module.scss";
import softSkillsData from "../../assets/data/softSkills";
import SoftSkillBlock from "./SoftSkillsBlock";
import Title from "../common/Title";
import { useTranslation } from "react-i18next";

const SoftSkills: React.FC = () => {
  const [skillOpenedBlock, setSkillOpenedBlock] = useState<string>("");
  const { t } = useTranslation();

  const softSkills: Array<any> = t("softSkills", { returnObjects: true });
  console.log(softSkills);

  return (
    <div className={styles.root} id="aboutMe">
      <Title text={t("titles.softSkills")} />
      {softSkills.map(({ skillTitle, textTitle }: any, index: any) => {
        return (
          <SoftSkillBlock
            title={skillTitle}
            text={textTitle}
            key={index}
            setOpenedSkill={setSkillOpenedBlock}
            openedSkill={skillOpenedBlock}
          />
        );
      })}
    </div>
  );
};

export default SoftSkills;
