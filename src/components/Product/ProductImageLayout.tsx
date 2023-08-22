import MainProductImage from "./MainProductImage";
import ProductDetailsArea from "./ProductDetailsArea";
import ProductImageCarousel from "./ProductImageCarousel";

const ImageSlider = () => {
  return (
    <div className="relative flex px-8 sm:px-0 sm:flex-[.7] flex-col gap-3 mb-4 items-center">
      <MainProductImage />
      <ProductImageCarousel />
      <ProductDetailsArea />
    </div>
  );
};

export default ImageSlider;
