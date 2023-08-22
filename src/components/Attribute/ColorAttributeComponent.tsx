import { useContext, useState } from "react";
import { ProductAttributeType } from "../../Types/InterfaceTypes";
import { AttributeContext } from "../../context/AttributeContext";

const ColorAttributeComponent = ({
  attributes,
}: {
  attributes: ProductAttributeType[];
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const { handleSelectedAttributes } = useContext(AttributeContext);
  const handleColorSelect = (index: number, attr: ProductAttributeType) => {
    setActiveIndex(index);
    handleSelectedAttributes(attr.attributeId, attr.value);
  };

  const attributeTitle = "Colors";
  const outlineClass = "outline-white";
  const borderClass = "border-slate-400";
  const activeOutlineClass = "outline-slate-600 pulsate-border border-white";

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-md text-slate-500 text-2rem font-normal">
        {attributeTitle}:
      </h3>

      <div className="flex gap-4">
        {attributes.map((attr, index) => {
          const isActive = activeIndex === index;
          const style = { backgroundColor: attr.value };

          return (
            <div
              key={index}
              style={style}
              className={`w-8 h-8 ${
                isActive ? activeOutlineClass : `${outlineClass} ${borderClass}`
              } transition-all ease-in-out outline outline-offset-2 outline-2 border border-solid  cursor-pointer hover:scale-[1.1]`}
              onClick={() => handleColorSelect(index, attr)}></div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorAttributeComponent;
