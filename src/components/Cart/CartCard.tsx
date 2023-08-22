import CartCardHead from "./CartCardHead";
import CartCardBody from "./CartCardBody";
import { CartItem } from "../../Types/InterfaceTypes";

type CartCardProps = {
  cartItem: CartItem;
};

const CartCard = (props: CartCardProps) => {
  const { cartItem } = props;
  const image = cartItem.product.imageList[0].url;
  return (
    <div className="w-full h-[12rem] sm:h-[15.125rem] bg-transparent border border-solid border-[rgba(0,0,0,0.3)] flex gap-2 sm:gap-8 relative">
      <CartCardHead image={image} />
      <CartCardBody cartItem={cartItem} />
    </div>
  );
};

export default CartCard;
