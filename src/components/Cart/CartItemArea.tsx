import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
const CartItemArea = () => {
  return (
    <div className="flex flex-[0.6] flex-col  justify-between">
      <CartHeader />
      <CartBody />
    </div>
  );
};

export default CartItemArea;
