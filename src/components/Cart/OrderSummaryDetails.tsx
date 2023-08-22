import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const OrderSummaryDetails = () => {
  const { count, total } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-4  w-full">
      <h3 className="text-black text-2xl mb-8 font-semibold">ORDER SUMMARY</h3>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <span className="text-lg text-black font-light">{`${count} items`}</span>
          <span className="text-lg text-black font-light">{`$${total}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg text-black font-light">Sales Tax</span>
          <span className="text-lg text-black font-light">-</span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg text-black font-light">Delivery</span>
          <span className="text-lg text-black font-light">Free</span>
        </div>

        <div className="flex justify-between">
          <span className="text-lg text-black font-semibold">Total</span>
          <span className="text-lg text-black font-semibold">{`$${total}`}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
