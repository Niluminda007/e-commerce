import CartItemArea from "../components/Cart/CartItemArea";
import OrderSummary from "../components/Cart/OrderSummary";
import AnimatedRoute from "../components/HOC/AnimatedRoute";

const CartPage = () => {
  return (
    <AnimatedRoute>
      <div className="xl:w-[1280px] px-10  my-[7rem] mx-auto flex flex-col sm:flex-row gap-16 sm:max-w-[1280px] sm:pt-20 ">
        <CartItemArea />
        <OrderSummary />
      </div>
    </AnimatedRoute>
  );
};

export default CartPage;
