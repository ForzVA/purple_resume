import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import Github from "../../../icons/Github";
import Www from "../../../icons/Www";
import { ProjectType } from "../../../types/ProjectType";
import Carousel from "../../common/Carousel";
import Fancybox from "../../common/Fancybox";
import Link from "../../common/Link";
import Button from "../Button";
import styles from "./one-project.module.scss";
import noPhoto from "../../../assets/images/noPhoto.png";
import addZeroForNumber from "../../../helpers/addZeroForNumber";

type OneProjectTypes = {
  setOpenTabId: Dispatch<SetStateAction<number>>;
  project: ProjectType;
  openTabId: number;
};

const OneProject: React.FC<OneProjectTypes> = ({
  setOpenTabId,
  project,
  openTabId,
}) => {
  const { id, images, title, tools, links, description } = project;
  console.log(project.images);

  const { t, i18n } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.root__title}>
        <span className={styles.root__title__text}>{title}</span>
        <span className={styles.root__title__number}>
          {addZeroForNumber(id)}
        </span>
      </div>
      <div className={styles.root__main}>
        <div className={styles.root__main__carousel}>
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <Carousel
              className={styles.carousel}
              options={{
                Dots: {
                  classes: {
                    list: clsx(styles.carousel__dots, "f-carousel__dots"),
                    isCurrent: clsx(
                      styles.carousel__dots_current,
                      "is-current"
                    ),
                  },
                },
                Navigation: {
                  classes: {
                    button: clsx(styles.carousel__nav, "f-button"),
                  },
                },
              }}
            >
              {images.length ? (
                images.map((image) => (
                  <div
                    className={clsx(
                      "f-carousel__slide",
                      styles.carousel__slide
                    )}
                    data-fancybox={`gallery-${id}`}
                    data-src={image}
                  >
                    <img alt="project_img" src={image} />
                  </div>
                ))
              ) : (
                <div
                  className={clsx("f-carousel__slide", styles.carousel__slide)}
                  data-fancybox={`gallery-0`}
                  data-src={t("projectAdditions.noPhoto")}
                >
                  <img
                    alt="project_img"
                    src={`${t("projectAdditions.noPhoto")}`}
                  />
                </div>
              )}
            </Carousel>
          </Fancybox>
        </div>
        <div className={styles.root__main__info}>
          <div className={styles.root__main__info__links}>
            <Link
              icon={<Www />}
              text={t("projectLink.site")}
              link={links.site}
              className={styles.root__main__info__links__link}
            />
            <Link
              icon={<Github className={styles.github} />}
              text={t("projectLink.git")}
              link={links.git}
              className={styles.root__main__info__links__link}
            />
          </div>
          <span className={styles.root__main__info__techTitle}>
            {t("projectAdditions.technologies")}:
          </span>
          <div className={styles.toolsWrapper}>
            <div className={styles.root__main__info__tools}>
              {tools.map((tool) => {
                return (
                  <div className={styles.root__main__info__tools__tool}>
                    {tool}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className={styles.root__description}>
        <span className={styles.root__description__title}>
          {t("projectAdditions.description")}:
        </span>
        {description}
      </p>
    </div>
  );
};

export default OneProject;
