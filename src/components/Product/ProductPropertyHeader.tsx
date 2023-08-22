import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
const ProductPropertyHeader = () => {
  const { product } = useContext(ProductContext);
  return (
    <>
      <h1 className="text-[1.8rem] sm:text-[2.2rem] font-semibold text-black">
        {product.name}
      </h1>
      <p className="text-2xl text-black font-normal">${product.price}</p>
    </>
  );
};

export default ProductPropertyHeader;
