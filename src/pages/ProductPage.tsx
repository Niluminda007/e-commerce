import { useParams } from "react-router-dom";
import ProductImageLayout from "../components/Product/ProductImageLayout";
import ProductProvider from "../context/ProductContext";
import ProductPropertyArea from "../components/Product/ProductPropertyArea";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <ProductProvider productId={id!}>
      <div className="w-[100vw] px:4 sm:px-20 py-4 mt-4  text-black text-xl absolute top-[7rem] flex flex-col lg:flex-row items-center">
        <ProductImageLayout />
        <ProductPropertyArea />
      </div>
    </ProductProvider>
  );
};

export default ProductPage;
