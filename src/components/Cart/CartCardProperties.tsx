import { ProductAttributeType } from "../../Types/InterfaceTypes";
import { attributeMap } from "../../constants";

type CartCardProperties = {
  selectedAttributes: ProductAttributeType[];
};
const CartCardProperties = (props: CartCardProperties) => {
  const { selectedAttributes } = props;

  return selectedAttributes
    ? selectedAttributes.map((attr, index) => {
        const attibuteKey = attributeMap.get(attr.attributeId);
        return (
          <div key={index}>
            <div className="text-black font-[300]  text-sm sm:text-lg flex items-center justify-items-center">
              {`${attributeMap.get(attr.attributeId)?.toLocaleLowerCase()} :`}
              {attibuteKey === "COLOR" ? (
                <div
                  key={index}
                  className="ml-4 w-4 h-4 font-[300] border border-solid border-black"
                  style={{ backgroundColor: `${attr.value}` }}></div>
              ) : (
                <span className="sm:ml-4 font-[300] text-black text-sm sm:text-lg">
                  {attr.value}{" "}
                </span>
              )}
            </div>
          </div>
        );
      })
    : null;
};

export default CartCardProperties;
