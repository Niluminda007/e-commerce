import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const AttributeArea = () => {
  const { product } = useContext(ProductContext);
  const hasAttributes: boolean = Array.isArray(product.productAttributeNodes);

  return (
    hasAttributes &&
    (product.productAttributeNodes as React.ReactNode[]).map(
      (component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      )
    )
  );
};

export default AttributeArea;
