import { ImageType } from "../../Types/InterfaceTypes";
import { transformImageUrl } from "../../utils/helpers";

type MiniImageCarouselProps = {
  imageList: ImageType[];
  mouseOver: boolean;
  activeImageIndex: number;
  handleImageChange: (index: number) => void;
};
const MiniImageCarousel = (props: MiniImageCarouselProps) => {
  const { imageList, mouseOver, handleImageChange, activeImageIndex } = props;
  const handleMouseOver = (index: number) => {
    handleImageChange(index);
  };
  const handleMouseLeave = () => {
    handleImageChange(0);
  };
  const unwantedImageIndex = 1;
  const filteredImages = imageList.filter(
    (_, index) => index !== unwantedImageIndex
  );
  return (
    <div
      className={`w-[386px] flex gap-2 transition ease-linear px-[10px] pt-[10px] pb-[20px] ${
        mouseOver ? "opacity-100" : "opacity-0"
      }`}>
      {filteredImages.map((image, index) => {
        return (
          <div
            key={index}
            className={`${
              activeImageIndex === index ? "carousel_active__img" : ""
            } relative w-[50px] object-cover text-xl text-[rgba(0,0,0,0.5)] font-medium transition`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={handleMouseLeave}>
            <img
              className={`w-full`}
              src={transformImageUrl(image.url, "200")}
              width="10"
              height="10"
              alt={`thumbinal_image_${index}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MiniImageCarousel;
