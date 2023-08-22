import { useState } from "react";
import ImageCarousel from "../ImageCarousels/ImageCarousel";
import { ProductType } from "../../Types/InterfaceTypes";
import ProductCardBody from "./ProductCardBody";
import { Link } from "react-router-dom";

const productCardBaseStyle =
  "sm:w-[400px] relative z-[0]  aspect-[11/12] bg-[rgba(248,248,248,0.1)] shadow-md hover:shadow-xl flex flex-col justify-between cursor-pointer transition ease-linear delay-75 my-10 border-2 border-transparent hover:border-[rgba(0,0,0,0.1)]";

const ProductCard = (product: ProductType) => {
  const { id, name, imageList, price } = product;
  const [mouseOver, setMouseMover] = useState<boolean>(false);
  const handleMouseOver = () => {
    setMouseMover(true);
  };
  const handleMouseLeave = () => {
    setMouseMover(false);
  };

  return (
    <Link to={`/product/${id}`}>
      <div
        className={productCardBaseStyle}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}>
        <ImageCarousel imageList={imageList} mouseOver={mouseOver} />
        <ProductCardBody name={name} price={price} mouseOver={mouseOver} />
      </div>
    </Link>
  );
};

export default ProductCard;
