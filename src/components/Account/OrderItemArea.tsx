import { OrderItemType } from "../../Types/InterfaceTypes";
import OrderItemCard from "./OrderItemCard";

type OrderItemAreaProps = {
  orderItems: OrderItemType[];
};

const OrderItemArea = ({ orderItems }: OrderItemAreaProps) => {
  return orderItems.map((orderItem, index) => (
    <OrderItemCard orderItem={orderItem} key={index} />
  ));
};

export default OrderItemArea;
