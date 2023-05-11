import s from "./course.module.scss";
import Loupe from "../../../icons/Loupe";
import Divider from "../../common/Divider";
import { useTranslation } from "react-i18next";

type oneCourseTypes = {
  image: string;
  cerfUrl: string;
  title: string;
  bgcolor: string;
  completed: string;
  time: string;
  subject: string;
};

type CourseTypes = {
  course: oneCourseTypes;
};

const Course: React.FC<CourseTypes> = ({ course }) => {
  const { cerfUrl, image, title, completed, time, subject } = course;
  const { t } = useTranslation();

  return (
    <div className={s.root}>
      <div className={s.root__photo}>
        <div data-fancybox="gallery" data-src={image}>
          <img src={image} alt="certificate" />
          <Loupe className={s.zoom} />
        </div>
      </div>
      <div className={s.root__description}>
        <div className={s.root__description__titleBlock}>
          <Divider className={s.root__divider} />
          <div className={s.root__description__titleBlock__title}>{title}</div>
        </div>
        <div className={s.root__description__text}>
          <p>
            {t("coursesDescription.duration")}: <span>{time}</span>
          </p>
          <p>
            {t("coursesDescription.technologies")}: <span>{subject}</span>
          </p>
          <p>
            {t("coursesDescription.completed")}: <span>{completed}</span>
          </p>
          <p>
            {t("coursesDescription.certificate")}: &zwj;
            <a href={cerfUrl} target="_blank" rel="noreferrer">
              {t("coursesDescription.link")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Course;
