import { useRef, useEffect } from "react";

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
