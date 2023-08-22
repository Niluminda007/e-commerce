import { useContext } from "react";
import CartCard from "./CartCard";
import { CartContext } from "../../context/CartContext";

const CartBody = () => {
  const { items } = useContext(CartContext);
  return items.length !== 0 ? (
    <div className="bg-transparent flex flex-col gap-4">
      {items.map((cartItem, index) => (
        <CartCard key={index} cartItem={cartItem} />
      ))}
    </div>
  ) : null;
};

export default CartBody;
