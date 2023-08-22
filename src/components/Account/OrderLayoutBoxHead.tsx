import { formatDate } from "../../utils/helpers";

type OrderLayoutBoxHeadProps = {
  id: string;
  orderDate: Date;
};

const OrderLayoutBoxHead = ({ id, orderDate }: OrderLayoutBoxHeadProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-7">
        <div className="w-32 h-6 p-4 rounded-xl text-white bg-black flex justify-center items-center">
          <span className="text-purple-700">#</span>
          {id}
        </div>
        <span className=" text-sm sm:text-lg font-light text-[rgba(0,0,0,.5)]">
          {`Order Placed: ${formatDate(orderDate)}`}
        </span>
      </div>
      <span className="text-purple-700 text-xl font-bold ">In-transit</span>
    </div>
  );
};

export default OrderLayoutBoxHead;
