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
  const { id, images, title, tools, links } = project;

  const { t, i18n } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.root__tab} onClick={() => setOpenTabId(id)}>
        <p className={styles.root__tab__title}>{title}</p>
        <p className={styles.root__tab__number}>{id}</p>
      </div>
      <div
        className={clsx(
          styles.root__content,
          id === openTabId && styles.root__content__active
        )}
      >
        <div className={styles.root__content__info}>
          <div className={styles.root__content__info__title}>{title}</div>
          <div className={styles.root__content__info__picture}>
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <Carousel className={styles.carousel}>
                {images.map((image) => (
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
                ))}
              </Carousel>
            </Fancybox>
          </div>

          <div className={styles.root__content__info__buttons}>
            <Link
              icon={<Www />}
              text={t("projectLink.site")}
              link={links.site}
            />
            <Link
              icon={<Github className={styles.github} />}
              text={t("projectLink.git")}
              link={links.git}
            />
          </div>
        </div>
        <div className={styles.root__content__tools}>
          {tools.map((tool) => {
            return (
              <div className={styles.root__content__tools__tool}>{tool}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OneProject;
