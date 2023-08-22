import { useState, useEffect } from "react";
import { transformImageUrl } from "../../utils/helpers";
import { ImageType } from "../../Types/InterfaceTypes";
import MiniImageCarousel from "./MiniImageCarousel";
import useMediaQuery from "../../hooks/useMediaQuery";

interface ImageCarouselProps {
  imageList: ImageType[];
  mouseOver: boolean;
}

const ImageCarousel = ({ imageList, mouseOver }: ImageCarouselProps) => {
  const { isMobile, isTablet } = useMediaQuery();
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const miniImageCarouselCompatible: boolean = imageList.length > 2;

  useEffect(() => {
    if (mouseOver && imageList.length > 1) setActiveImageIndex(1);
    else setActiveImageIndex(0);
  }, [mouseOver]);

  const handleImageChange = (imgIndex: number) => {
    setActiveImageIndex(imgIndex);
  };

  if (!imageList || imageList.length === 0) {
    return null;
  }

  if (activeImageIndex < 0 || activeImageIndex >= imageList.length) {
    return null;
  }

  const imageURL = transformImageUrl(imageList[activeImageIndex].url, isMobile);
  return (
    <div>
      <div className="w-[200px] sm:w-[386px] object-cover sm:min-h-[386px]">
        <img
          className="w-[12.5rem] sm:w-[386px] object-contain transition-all ease-linear delay-200 max-h-[386px]"
          src={imageURL}
          width={!isMobile ? "386" : "200"}
          height="auto"
          alt={`product_img_${activeImageIndex}`}
        />
      </div>
      {!isMobile && !isTablet && miniImageCarouselCompatible && (
        <MiniImageCarousel
          imageList={imageList}
          mouseOver={mouseOver}
          handleImageChange={handleImageChange}
          activeImageIndex={activeImageIndex}
        />
      )}
    </div>
  );
};

export default ImageCarousel;
