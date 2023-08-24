import AddToCartButton from "./AddToCartButton";
import ProductPropertyHeader from "./ProductPropertyHeader";
import AttributeArea from "./AttributeArea";
import AttributeProvider from "../../context/AttributeContext";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const ProductPropertyArea = () => {
  const { product } = useContext(ProductContext);
  const attributes = product.productAttributes ? product.productAttributes : [];
  return (
    <div className="w-[100%] pb-16 sm:py-0 px-8 sm:px-0 lg:w-[30%] bg-transparent lg:fixed top-[8.625rem] right-0 flex flex-col gap-4">
      <AttributeProvider attributes={attributes}>
        <ProductPropertyHeader />
        <AttributeArea />
        <AddToCartButton />
      </AttributeProvider>
    </div>
  );
};

export default ProductPropertyArea;
