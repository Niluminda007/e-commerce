import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { CartItem } from "../../Types/InterfaceTypes";
import { CartContext } from "../../context/CartContext";
import { AttributeContext } from "../../context/AttributeContext";
import ProductErrorMessage from "./ProductErrorMessage";

const AddToCartButton = () => {
  const { product } = useContext(ProductContext);
  const { count, addToCart } = useContext(CartContext);
  const { selectedAttributes, areAllAttributesSelected } =
    useContext(AttributeContext);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const handleAddToCart = () => {
    if (areAllAttributesSelected()) {
      const cartItemId = `Cart_Item_${count + 1}#${product.id}`;
      const cartItem: CartItem = {
        id: cartItemId,
        product: product,
        selectedAttributes: selectedAttributes,
        quantity: 1,
        amount: product.price,
      };
      addToCart(cartItem);
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        className="relative w-full sm:w-[250px] p-4 font-medium group mt-4"
        onClick={handleAddToCart}>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-purple-700 border-2  group-hover:bg-black group-hover:border-white"></span>
        <span className="relative text-white group-hover:text-white">
          Add to cart
        </span>
      </button>
      {showErrorMessage && <ProductErrorMessage />}
    </div>
  );
};

export default AddToCartButton;
