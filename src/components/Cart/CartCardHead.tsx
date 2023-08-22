type CartCardHeadProps = {
  image: string;
};

const CartCardHead = (props: CartCardHeadProps) => {
  const { image } = props;
  return (
    <img
      className="w-[9rem] sm:w-[15rem] object-cover"
      width="240"
      height="240"
      src={image}
    />
  );
};

export default CartCardHead;
