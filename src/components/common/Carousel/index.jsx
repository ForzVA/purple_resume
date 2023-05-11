// import React, { useState } from "react";
// import styles from "./carousel.module.scss";
// import clsx from "clsx";
// import photo from "../../../assets/images/event-photo1.jpg";
// import Fancybox from "../Fancybox";
// import { SlideStates } from "@fancyapps/ui/types/Fancybox/consts";

// type CarouselTypes = {
//   className?: string;
//   slides?: string[];
// };

// const Carousel: React.FC<CarouselTypes> = ({ className, slides = [] }) => {
//   const [slideIndex, setSlideIndex] = useState<number>(0);

//   const goToPrevious = () => {
//     const isFirstSlide = slideIndex === 0;
//     const nextIndex = isFirstSlide ? slides.length - 1 : slideIndex - 1;
//     setSlideIndex(nextIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = slideIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : slideIndex + 1;
//     setSlideIndex(newIndex);
//   };

//   return (
//     <div className={clsx(styles.root, className ? className : "")}>
//       <div className={styles.root__leftArrow} onClick={goToPrevious}>{`<`}</div>
//       <img
//         // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         // style={{ backgroundImage: `url(${photo})` }}
//         src={photo}
//         className={styles.root__inner}
//       />
//       <div className={styles.root__rightArrow} onClick={goToNext}>{`>`}</div>
//     </div>
//   );
// };

// export default Carousel;

import React, { useRef, useEffect } from "react";

import { Carousel as NativeCarousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";

function Carousel(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const options = props.options || {};

    const instance = new NativeCarousel(container, options);

    return () => {
      instance.destroy();
    };
  });

  return (
    <div ref={containerRef} className={props.className}>
      {props.children}
    </div>
  );
}

export default Carousel;
