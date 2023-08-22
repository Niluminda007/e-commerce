import React, { useContext, useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import SliderArrows from "./SliderArrows";
import { ProductContext } from "../../context/ProductContext";

const MainProductImage = () => {
  const { product, activeImageIndex, sliderDirection } =
    useContext(ProductContext);
  const { isMobile, isTablet } = useMediaQuery();
  const shouldDisplayImageCarousel =
    (isMobile || isTablet) && product?.imageList.length > 2;
  const activeImage = product?.imageList[activeImageIndex];
  const [imageChanged, setImageChanged] = useState(false);

  const animationFrameRef = React.useRef<number | null>(null);

  useEffect(() => {
    if (sliderDirection !== "none") {
      setImageChanged(true);

      const animationDuration = 500;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < animationDuration) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setImageChanged(false);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationFrameRef.current !== null) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [activeImage]);

  const imageAnimation =
    !imageChanged && sliderDirection === "none"
      ? "fade-in"
      : imageChanged &&
        (sliderDirection === "right" ? "fade-in-right" : "fade-in-left");

  return (
    <div className="flex items-start relative min-h-[20rem] sm:min-h-[40rem] max-h-[40rem]">
      <img
        draggable={false}
        className={`w-[100%] h-auto object-contain transition ease-linear ${imageAnimation} min-h-[20rem] sm:min-h-[40rem] max-h-[40rem]`}
        src={activeImage?.url}
        alt="Product"
      />
      {shouldDisplayImageCarousel ? <SliderArrows /> : null}
    </div>
  );
};

export default MainProductImage;
