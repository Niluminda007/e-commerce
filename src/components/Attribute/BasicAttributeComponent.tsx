import { useContext, useState } from "react";
import {
  AttributeKeyType,
  ProductAttributeType,
} from "../../Types/InterfaceTypes";
import { AttributeContext } from "../../context/AttributeContext";

const BasicAttributeComponent = ({
  attributes,
  type,
}: {
  attributes: ProductAttributeType[];
  type: keyof typeof AttributeKeyType;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const { handleSelectedAttributes } = useContext(AttributeContext);
  const handleBasicAttributeSelect = (
    index: number,
    attr: ProductAttributeType
  ) => {
    setActiveIndex(index);
    handleSelectedAttributes(attr.attributeId, attr.value);
  };

  const attributeTitle = type;
  const isActive = (index: number) => activeIndex === index;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-md text-slate-500 text-2rem font-normal">
        {attributeTitle}:
      </h3>

      <div className="flex gap-4">
        {attributes.map((attr, index) => (
          <div
            key={index}
            style={{ backgroundColor: attr.value }}
            className={`flex justify-center min-w-[3rem] min-h-[3rem] items-center p-2 text-lg border-2 transition-all ease-linear border-solid border-black cursor-pointer ${
              isActive(index) ? "selected" : ""
            } hover:scale-[1.1]`}
            onClick={() => handleBasicAttributeSelect(index, attr)}>
            {attr.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicAttributeComponent;
