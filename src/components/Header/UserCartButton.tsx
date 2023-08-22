import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const UserCartButton = () => {
  const { count } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <button
      className="relative bg-transparent rounded-full h-10 w-10 text-[1.8rem] flex justify-center items-center  transition-all hover:scale-[1.1] hover:shadow-md text-black hover:bg-[rgba(0,0,0,0.1)]"
      onClick={handleCart}>
      <span className="absolute w-8 h-8  flex items-center justify-center text-white text-lg bg-purple-700 rounded-full bottom-6 left-5">
        {count}
      </span>
      <BsCart4 />
    </button>
  );
};

export default UserCartButton;
