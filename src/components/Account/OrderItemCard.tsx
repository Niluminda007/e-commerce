import { OrderItemType } from "../../Types/InterfaceTypes";
import OrderItemAttributes from "./OrderItemAttributes";

type OrderItemCardProps = {
  orderItem: OrderItemType;
};
const OrderItemCard = ({ orderItem }: OrderItemCardProps) => {
  const { attributes } = orderItem;
  const price = orderItem.product.price * orderItem.quantity;
  return (
    <div className="w-full flex py-2 sm:py-5 gap-4 border-slate-200 border-t-[1px] border-solid">
      <img
        className="w-[9rem] sm:w-[15rem] object-cover"
        width="240"
        height="240"
        src={orderItem.product.imageList[0].url}
      />

      <div className="px-2 flex flex-col gap-2 pt-5">
        <h3 className="text-lg text-black font-medium">
          {orderItem.product.name}
        </h3>
        <OrderItemAttributes attributes={attributes} />
        <span className="text-black text-sm font-semibold">{`$${price}`}</span>
      </div>
    </div>
  );
};

export default OrderItemCard;
