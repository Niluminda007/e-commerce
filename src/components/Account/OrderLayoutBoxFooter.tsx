type OrderLayoutBoxFooterProps = {
  total: number;
};

const OrderLayoutBoxFooter = ({ total }: OrderLayoutBoxFooterProps) => {
  return (
    <>
      <hr className="w-full h-[0.1px] border border-slate-200 " />
      <div className="text-slate-700 text-lg font-semibold w-full flex justify-end">
        {`Total: $${total}`}
      </div>
    </>
  );
};

export default OrderLayoutBoxFooter;
