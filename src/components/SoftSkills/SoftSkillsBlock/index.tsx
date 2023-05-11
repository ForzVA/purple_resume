// import { motion } from "framer-motion";
// import ArrowDown from "../../../assets/svg/ArrowDown";
// import ArrowUp from "../../../assets/svg/ArrowUp";
import s from "./softSkillBlock.module.scss";
import React, { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import ArrowDown from "../../../icons/ArrowDown";
import ArrowUp from "../../../icons/ArrowUp";
import { motion } from "framer-motion";

const blockAnimation = {
  hidden: {
    x: "-15%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

type SoftSkillTypes = {
  title: string;
  text: string;
  setOpenedSkill: Dispatch<SetStateAction<string>>;
  openedSkill: string;
};

const SoftSkillBlock: React.FC<SoftSkillTypes> = ({
  title,
  text,
  setOpenedSkill,
  openedSkill,
}) => {
  const handlerSkillOpened = (title: string) => {
    if (title !== openedSkill) {
      return setOpenedSkill(title);
    }
    setOpenedSkill("");
  };

  const skillIsOpened = title === openedSkill;

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={blockAnimation}
    >
      <div className={s.block} onClick={() => handlerSkillOpened(title)}>
        <div className={s.block_title}>
          <div className={s.block_title_text}>{title}</div>
          <div className={s.block_title_dropdown}>
            <div
              className={s.dropdown_strokeDown}
              style={{
                display: skillIsOpened ? "none" : "block",
              }}
            >
              <ArrowDown />
            </div>
            <div
              className={s.dropdown_strokeUp}
              style={{
                display: skillIsOpened ? "block" : "none",
              }}
            >
              <ArrowUp />
            </div>
          </div>
        </div>
        <div
          className={clsx(s.block_text, [
            skillIsOpened ? s.block_text_open : s.block_text_close,
          ])}
        >
          {text}
        </div>
      </div>
    </motion.div>
  );
};

export default SoftSkillBlock;
