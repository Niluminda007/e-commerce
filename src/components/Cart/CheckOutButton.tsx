import { useContext } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { OrderContext } from "../../context/OrderContext";

const CheckOutButton = () => {
  const { items, total, emptyCart } = useContext(CartContext);
  const { placeOrder } = useContext(OrderContext);
  const handleCheckOut = async () => {
    await placeOrder(items, total);
    emptyCart();
  };
  return (
    <button
      className="relative z-10 w-full h-16 bg-black flex text-xl font-medium items-center justify-between px-4 py-2 text-white transition-all ease-linear hover:text-[rgba(255,255,255,0.6)]"
      onClick={handleCheckOut}>
      CHECKOUT
      <FaLongArrowAltRight className="text-[1.8rem]" />
      <span className="absolute z-[-10] inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 border-black border border-solid"></span>
    </button>
  );
};

export default CheckOutButton;
