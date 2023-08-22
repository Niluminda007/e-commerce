import React from "react";
import {
  CartItem,
  ProductAttributeType,
  ProductType,
  ProductTypeWithAttributes,
  UnionProductType,
} from "../Types/InterfaceTypes";
import AttributeComponent from "../components/Attribute/Attribute";
import { AttributeKeyType } from "../Types/InterfaceTypes";
import {
  IMAGE_FORMAT_DESKTOP,
  IMAGE_FORMAT_MOBILE,
  IMAGE_WIDTH_DESKTOP,
  IMAGE_WIDTH_MOBILE,
  attributeMap,
} from "../constants";

export const transformImageUrl = (url: string, isMobile: boolean) => {
  const width = isMobile ? IMAGE_WIDTH_MOBILE : IMAGE_WIDTH_DESKTOP;
  const format = isMobile ? IMAGE_FORMAT_MOBILE : IMAGE_FORMAT_DESKTOP;

  return url.replace("/upload/", `/upload/w_${width}/${format}/`);
};
export const convertProduct = (product: ProductType): UnionProductType => {
  if (product.productAttributes) {
    const productAttributeNodes: React.ReactNode[] = [];
    const processedTypes: Set<keyof typeof AttributeKeyType> = new Set();

    for (const attr of product.productAttributes) {
      const type: keyof typeof AttributeKeyType | undefined = attributeMap.get(
        attr.attributeId
      );
      if (type && !processedTypes.has(type)) {
        productAttributeNodes.push(
          <AttributeComponent
            key={attr.attributeId}
            type={type}
            attributes={product.productAttributes.filter(
              (a) => a.attributeId === attr.attributeId
            )}
          />
        );
        processedTypes.add(type);
      }
    }

    const modifiedProduct: ProductTypeWithAttributes = {
      ...product,
      productAttributeNodes,
    };
    return modifiedProduct;
  }

  return product;
};

export default convertProduct;

export const productExistsInCart = (items: CartItem[], item: CartItem) => {
  const duplicateProduct = items.find((targetItem) => {
    if (targetItem.product.id !== item.product.id) {
      return false;
    }
    if (item.product.productAttributes?.length === 0) return true;

    const oldAttributes: Map<keyof typeof AttributeKeyType, string> =
      mapAttributes(targetItem.selectedAttributes);
    const newAttributes: Map<keyof typeof AttributeKeyType, string> =
      mapAttributes(item.selectedAttributes);

    let duplicateAttributeCount = 0;

    for (let [key, value] of newAttributes) {
      if (oldAttributes.get(key) && value === oldAttributes.get(key)) {
        duplicateAttributeCount++;
      }
    }

    return duplicateAttributeCount === item.selectedAttributes.length;
  });
  return duplicateProduct;
};

export const mapAttributes = (attributes: ProductAttributeType[]) => {
  const newAttributeMap = new Map<keyof typeof AttributeKeyType, string>();

  for (const attr of attributes) {
    const attributeKey = attributeMap.get(attr.attributeId);
    if (attributeKey) newAttributeMap.set(attributeKey, attr.value);
  }
  return newAttributeMap;
};

export const formatDate = (date: Date) => {
  const orderDate = new Date(date);
  return orderDate.toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};
