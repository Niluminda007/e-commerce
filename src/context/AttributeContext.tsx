import { createContext, useEffect, useState } from "react";
import {
  AttributeContextType,
  ProductAttributeType,
} from "../Types/InterfaceTypes";

export const AttributeContext = createContext<AttributeContextType>({
  selectedAttributes: [],
  handleSelectedAttributes: () => {},
  areAllAttributesSelected: () => true,
  setInitialAttributes: () => {},
});

type AttributeProviderProps = {
  children: React.ReactNode;
  attributes: ProductAttributeType[];
};

const AttributeProvider: React.FC<AttributeProviderProps> = ({
  children,
  attributes,
}) => {
  const [selectedAttributes, setSelectedAttributes] = useState<
    ProductAttributeType[]
  >([]);
  useEffect(() => {
    setInitialAttributes();
  }, [attributes]);
  const handleSelectedAttributes = (id: number, value: string) => {
    setSelectedAttributes((prevState) => {
      return prevState.map((attr) => {
        if (attr.attributeId === id) {
          return { ...attr, value: value };
        }
        return { ...attr };
      });
    });
  };
  const areAllAttributesSelected = () => {
    if (selectedAttributes.length === 0) {
      return true;
    }
    return selectedAttributes.every((attr) => attr.value !== "");
  };
  const setInitialAttributes = () => {
    const uniqueAttributesMap = new Map<number, ProductAttributeType>();

    attributes.forEach((attr) => {
      if (!uniqueAttributesMap.has(attr.attributeId)) {
        uniqueAttributesMap.set(attr.attributeId, { ...attr, value: "" });
      }
    });
    const initialAttributes = Array.from(uniqueAttributesMap.values());
    setSelectedAttributes(initialAttributes);
  };
  return (
    <AttributeContext.Provider
      value={{
        selectedAttributes,
        handleSelectedAttributes,
        areAllAttributesSelected,
        setInitialAttributes,
      }}>
      {children}
    </AttributeContext.Provider>
  );
};

export default AttributeProvider;
