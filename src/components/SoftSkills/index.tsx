import React, { useState } from "react";
import styles from "./softSkills.module.scss";
import SoftSkillBlock from "./SoftSkillsBlock";
import Title from "../common/Title";
import { useTranslation } from "react-i18next";

const SoftSkills: React.FC = () => {
  const [openedBlockIndex, setOpenedBlockIndex] = useState<number>(0);
  const { t } = useTranslation();

  const softSkills: Array<any> = t("softSkills", { returnObjects: true });

  return (
    <div className={styles.root} id="aboutMe">
      <Title text={t("titles.softSkills")} />
      {softSkills.map(({ skillTitle, textTitle }: any, index: any) => {
        return (
          <SoftSkillBlock
            title={skillTitle}
            text={textTitle}
            key={index}
            indx={index}
            setOpenedBlockIndex={setOpenedBlockIndex}
            openedBlockIndex={openedBlockIndex}
          />
        );
      })}
    </div>
  );
};

export default SoftSkills;
