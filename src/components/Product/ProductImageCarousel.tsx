import { useContext } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import SliderArrows from "./SliderArrows";
import { ProductContext } from "../../context/ProductContext";

const ProductImageCarousel = () => {
  const { isMobile, isTablet } = useMediaQuery();
  const { activeImageIndex, setActiveImage, product } =
    useContext(ProductContext);
  const shouldDisplayImageCarousel =
    !(isMobile || isTablet) && product.imageList.length > 2;
  const imageList = product?.imageList;
  return shouldDisplayImageCarousel ? (
    <div className="flex justify-center max-h-[8rem] gap-2">
      <div className="flex relative gap-4">
        {imageList?.map((img, index) => (
          <img
            key={index}
            draggable={false}
            className={`${
              activeImageIndex === index
                ? "border-2 border-[rgba(161,31,161,0.5)] border-solid scale-[1.2]"
                : ""
            } w-[6rem] h-auto object-contain cursor-pointer transition-all duration-[0.2s]`}
            src={img.url}
            onClick={() => setActiveImage(index)}
          />
        ))}
        <SliderArrows />
      </div>
    </div>
  ) : null;
};

export default ProductImageCarousel;
