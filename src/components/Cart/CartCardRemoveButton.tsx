import { GrFormClose } from "react-icons/gr";
import { CartItem } from "../../Types/InterfaceTypes";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

type CartCardRemoveButtonProps = {
  cartItem: CartItem;
};

const CartCardRemoveButton = (props: CartCardRemoveButtonProps) => {
  const { cartItem } = props;
  const { removeFromCart } = useContext(CartContext);
  const handleItemRemove = () => {
    removeFromCart(cartItem);
  };
  return (
    <div className="flex sm:pr-4">
      <button
        className="w-8 h-8 text-xl flex justify-center items-start text-black  transition-all rounded-full bg-transparent ease-linear hover:scale-110 hover:bg-[rgba(0,0,0,0.3)]"
        onClick={handleItemRemove}>
        <GrFormClose />
      </button>
    </div>
  );
};

export default CartCardRemoveButton;
