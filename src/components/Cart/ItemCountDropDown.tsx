import { useContext, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../../Types/InterfaceTypes";
type ItemCountDropDownProps = {
  initialItemCount: number;
  cartItem: CartItem;
};
const ItemCountDropDown = (props: ItemCountDropDownProps) => {
  const { initialItemCount, cartItem } = props;
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  const [activeCount, setActiveCount] = useState<number>(initialItemCount);
  const { updateCartItem } = useContext(CartContext);
  const handleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleChangeCount = (count: number) => {
    setActiveCount(count);
    setDropdownActive(!dropdownActive);
    updateCartItem(cartItem, count);
  };

  return (
    <div className="flex flex-col relative">
      <div
        className="text-xl cursor-pointer w-[6rem] xl:w-[8rem] h-[10px] xl:h-[20px] text-black py-4 xl:py-8 px-4 bg-transparent border border-solid border-[rgba(0,0,0,0.5)] flex items-center justify-between"
        onClick={handleDropdown}>
        <span>{activeCount}</span>
        <button
          className={`w-6 h-6  transition-all ease-linear ${
            dropdownActive ? "scale-y-[-1] bg-red" : ""
          }`}>
          <RiArrowDropDownLine className={"text-[2rem]"} />
        </button>
      </div>
      <ul
        className={` ${
          dropdownActive ? "opacity-100 z-[10000] " : "opacity-0 z-[-1]"
        } list-none border-x border-solid border-[rgba(0,0,0,0.5)] w-[6rem] xl:w-[8rem]  bg-white relative `}>
        {[...Array(6).keys()].slice(1).map((count, index) => (
          <li
            key={index}
            value={count}
            onClick={() => handleChangeCount(count)}
            className="text-black px-4 py-1 xl:py-4 flex border-b border-solid border-[rgba(0,0,0,0.5)] transition ease-linear  items-center cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
            {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemCountDropDown;
