import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const sliderArrowBaseClass =
  "absolute -translate-y-[50%] bg-[rgba(176,25,246,0.7)] top-[50%] text-[rgba(255,255,255,255.7)]  cursor-pointer rounded-full h-10 w-10 text-[1.5rem] flex justify-center items-center transition hover:scale-[1.2] hover:shadow-md";

const SliderArrows = () => {
  const { activeImageIndex, product, setActiveImage, handleSliderDirection } =
    useContext(ProductContext);
  const imageListLength = product?.imageList.length;
  const handleSlideLeft = () => {
    if (imageListLength !== undefined) {
      if (activeImageIndex === 0) {
        setActiveImage(imageListLength - 1);
      } else {
        setActiveImage(activeImageIndex - 1);
      }
      handleSliderDirection("left");
    }
  };
  const handleSlideRight = () => {
    if (imageListLength !== undefined) {
      if (activeImageIndex === imageListLength - 1) {
        setActiveImage(0);
      } else {
        setActiveImage(activeImageIndex + 1);
      }
      handleSliderDirection("right");
    }
  };
  return (
    <>
      <button
        className={`${sliderArrowBaseClass} -left-4 md:-left-16 `}
        onClick={handleSlideLeft}>
        &#8666;
      </button>
      <button
        className={`${sliderArrowBaseClass} -right-4 md:-right-16`}
        onClick={handleSlideRight}>
        &#8667;
      </button>
    </>
  );
};

export default SliderArrows;
