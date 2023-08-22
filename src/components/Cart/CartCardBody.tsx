import ItemCountDropDown from "./ItemCountDropDown";
import { CartItem } from "../../Types/InterfaceTypes";
import CartCardProperties from "./CartCardProperties";
import CartCardRemoveButton from "./CartCardRemoveButton";

type CartCardBodyProps = {
  cartItem: CartItem;
};

const CartCardBody = (props: CartCardBodyProps) => {
  const { cartItem } = props;
  const { product, amount, quantity, selectedAttributes } = cartItem;

  return (
    <div className="flex flex-col xl:gap-4 w-full ">
      <div className="w-full flex py-2 sm:py-5 justify-between">
        <div className="flex w-full flex-col sm:pr-4">
          <div className="flex flex-col sm:flex-row justify-between">
            <p className="text-sm sm:text-xl text-black">{product.name}</p>
            <span className="text-sm sm:text-lg text-black">${amount}</span>
          </div>
          <CartCardProperties selectedAttributes={selectedAttributes} />
        </div>
        <CartCardRemoveButton cartItem={cartItem} />
      </div>

      <ItemCountDropDown initialItemCount={quantity} cartItem={cartItem} />
    </div>
  );
};

export default CartCardBody;
