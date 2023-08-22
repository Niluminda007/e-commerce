import { ProductAttributeType } from "../../Types/InterfaceTypes";
import { attributeMap } from "../../constants";

type OrderItemAttributesProps = {
  attributes: ProductAttributeType[] | null;
};

const OrderItemAttributes = ({ attributes }: OrderItemAttributesProps) => {
  return attributes?.map((attr, index) => (
    <div key={index} className="flex gap-2">
      <span className="text-black text-sm font-semibold">
        {attributeMap.get(attr.attributeId)} :
      </span>
      <span className="text-sm text-black font-medium">{attr.value}</span>
    </div>
  ));
};

export default OrderItemAttributes;
