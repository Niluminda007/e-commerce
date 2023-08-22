import React, { createContext, useState } from "react";
import { useFetchProduct } from "../hooks/useProducts";
import { ProductContextType } from "../Types/InterfaceTypes";
import { productDefaultValues } from "../constants";
import { UserAuth } from "./AuthContext";

export const ProductContext = createContext<ProductContextType>({
  product: productDefaultValues,
  loading: true,
  error: null,
  activeImageIndex: 0,
  setActiveImage: () => {},
  handleSliderDirection: () => {},
  sliderDirection: "none",
  colorAttributes: [],
  sizeAttributes: [],
});

type ProductProviderProps = {
  productId: string;
  children: React.ReactNode;
};

const ProductProvider: React.FC<ProductProviderProps> = ({
  productId,
  children,
}) => {
  const { auhtHeader } = UserAuth();
  const { product, loading, error } = useFetchProduct(productId, auhtHeader);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [sliderDirection, setsliderDirection] = useState<string>("none");

  const setActiveImage = (index: number) => {
    setActiveImageIndex(index);
  };
  const handleSliderDirection = (direction: string) => {
    setsliderDirection(direction);
  };
  return (
    <ProductContext.Provider
      value={{
        product,
        loading,
        error,
        activeImageIndex,
        setActiveImage,
        handleSliderDirection,
        sliderDirection,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
