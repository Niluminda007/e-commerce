import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import OrderLayoutBox from "./OrderLayoutBox";

export const Orders = () => {
  const { orders } = useContext(OrderContext);
  return (
    <div className="flex md:flex-[.7] bg-[white] w-full bg-transparent flex-col gap-8 md:max-h-screen ">
      {orders.map((order) => (
        <OrderLayoutBox order={order} />
      ))}
    </div>
  );
};
