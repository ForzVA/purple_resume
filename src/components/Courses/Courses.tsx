import s from "./courses.module.scss";
import Fancybox from "../common/Fancybox";
import Course from "./Course/Course";
import React from "react";
import Title from "../common/Title";
import { useTranslation } from "react-i18next";

const Courses: React.FC = () => {
  const { t } = useTranslation();

  const courses: Array<any> = t("courses", { returnObjects: true });

  return (
    <div className={s.root}>
      <Title text={t("titles.courses")} />
      <div className={s.root__courses}>
        <div className={s.root__courses__block}>
          <Fancybox>
            {courses.map((course, index): any => {
              return <Course course={course} key={index} />;
            })}
          </Fancybox>
        </div>
      </div>
    </div>
  );
};

export default Courses;
