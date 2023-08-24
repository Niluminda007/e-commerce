import { useParams } from "react-router-dom";
import ProductImageLayout from "../components/Product/ProductImageLayout";
import ProductProvider from "../context/ProductContext";
import ProductPropertyArea from "../components/Product/ProductPropertyArea";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <ProductProvider productId={id!}>
      <div className="w-[100vw] px:4 sm:px-20 py-4 mt-[5rem] sm:mt-[7rem]  text-black text-xl relative h-full  flex flex-col lg:flex-row items-center">
        <ProductImageLayout />
        <ProductPropertyArea />
      </div>
    </ProductProvider>
  );
};

export default ProductPage;
