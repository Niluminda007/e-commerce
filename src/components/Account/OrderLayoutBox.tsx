import { OrderType } from "../../Types/InterfaceTypes";
import OrderItemArea from "./OrderItemArea";
import OrderLayoutBoxFooter from "./OrderLayoutBoxFooter";
import OrderLayoutBoxHead from "./OrderLayoutBoxHead";

type OrderLayoutBoxProps = {
  order: OrderType;
};
const OrderLayoutBox = ({ order }: OrderLayoutBoxProps) => {
  const { orderDate, total, orderItems } = order;
  const orderId = "23548232";
  return (
    <div className="flex flex-col items-start  p-4 shadow-2xl">
      <OrderLayoutBoxHead id={orderId} orderDate={orderDate} />
      <OrderItemArea orderItems={orderItems} />
      <OrderLayoutBoxFooter total={total} />
    </div>
  );
};

export default OrderLayoutBox;
