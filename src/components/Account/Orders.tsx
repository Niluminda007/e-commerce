import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import OrderLayoutBox from "./OrderLayoutBox";
import MyProfileAnimatedRoute from "../HOC/MyProfileAnimatedRoute";

export const Orders = () => {
  const { orders } = useContext(OrderContext);
  console.log(orders);
  return (
    <MyProfileAnimatedRoute>
      <div className="flex md:flex-[.7] bg-[white] w-full bg-transparent flex-col gap-8 ">
        {orders.map((order, index) => (
          <OrderLayoutBox key={index} order={order} />
        ))}
      </div>
    </MyProfileAnimatedRoute>
  );
};
