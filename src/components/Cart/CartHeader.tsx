import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartHeader = () => {
  const { count, total } = useContext(CartContext);
  return (
    <div className="flex flex-col mb-8 sm:mb-16 gap-4">
      <div className="bg-[#eceff1] relative w-full text-black font-semibold text-lg sm:text-xl h-20 rounded-md flex justify-start items-center px-10 py-2 mb-4 sm:mb-10">
        Hello User XXX
        <div className="triangle absolute left-20 top-20"></div>
      </div>
      <h2 className="text-[2.5rem] text-black font-semibold">Your Bag</h2>
      <p className="text-black text-lg">
        TOTAL: {`[ ${count} items ]`}{" "}
        <span className="text-black text-lg">
          <strong>${total}</strong>
        </span>
      </p>
    </div>
  );
};

export default CartHeader;
