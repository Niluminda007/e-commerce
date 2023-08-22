import { useContext } from "react";
import ProductDeatail from "./ProductDeatail";
import { ProductContext } from "../../context/ProductContext";

const ProductDetailsArea = () => {
  const { product } = useContext(ProductContext);
  const description = product ? product.description : "";
  return (
    <div className="flex flex-col justify-center sm:w-[60%]  h-auto mt-8 mb-8">
      <ProductDeatail heading="Description">
        <p>{description}</p>
      </ProductDeatail>

      <ProductDeatail heading="Rating">
        <span>No Rating</span>
      </ProductDeatail>
    </div>
  );
};

export default ProductDetailsArea;
