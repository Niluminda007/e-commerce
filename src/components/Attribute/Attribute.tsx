import { ProductAttributeType } from "../../Types/InterfaceTypes";
import { AttributeKeyType } from "../../Types/InterfaceTypes";
import ColorAttributeComponent from "./ColorAttributeComponent";
import BasicAttributeComponent from "./BasicAttributeComponent";

type AttributeComponentProps = {
  type: keyof typeof AttributeKeyType;
  attributes: ProductAttributeType[];
};

const AttributeComponent = ({ type, attributes }: AttributeComponentProps) => {
  switch (type) {
    case AttributeKeyType.SIZE:
    case AttributeKeyType.REFRESH_RATE:
    case AttributeKeyType.CAPACITY:
    case AttributeKeyType.RAM:
      return <BasicAttributeComponent attributes={attributes} type={type} />;
    case AttributeKeyType.COLOR:
      return <ColorAttributeComponent attributes={attributes} />;
    default:
      return null;
  }
};

export default AttributeComponent;
