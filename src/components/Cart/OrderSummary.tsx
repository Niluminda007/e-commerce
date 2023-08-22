import CheckOutButton from "./CheckOutButton";
import OrderSummaryDetails from "./OrderSummaryDetails";

const OrderSummary = () => {
  return (
    <div className="flex flex-[0.4] bg-transparent flex-col gap-8 pb-20 sm:pb-0">
      <CheckOutButton />
      <OrderSummaryDetails />
    </div>
  );
};

export default OrderSummary;
