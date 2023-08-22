import React, { createContext, useState } from "react";
import { CartContextType, CartItem } from "../Types/InterfaceTypes";

import { productExistsInCart } from "../utils/helpers";

export const CartContext = createContext<CartContextType>({
  count: 0,
  items: [],
  total: 0.0,
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItem: () => {},
  emptyCart: () => {},
});

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0.0);

  const addToCart = (item: CartItem) => {
    const { product } = item;
    const duplicateProduct = productExistsInCart(items, item);
    if (duplicateProduct !== undefined) {
      updateCartItem(duplicateProduct, 1, true);
      updateCartCountAndTotal("ADD", 1, item.quantity * item.product.price);
    } else {
      setItems((prevItems) => [...prevItems, item]);
      updateCartCountAndTotal("ADD", 1, product.price);
    }
  };

  const removeFromCart = (item: CartItem) => {
    setItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );
    const prevItemCount = item.quantity;
    const prevItemAmount = item.amount;
    updateCartCountAndTotal("REMOVE", prevItemCount, prevItemAmount);
  };

  const updateCartItem = (
    item: CartItem,
    itemCount: number,
    isIncrementalUpdate?: boolean
  ) => {
    setItems((prevItems) =>
      prevItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          let newCount: number = 0;
          let newTotal: number = 0;
          if (isIncrementalUpdate) {
            newCount = cartItem.quantity + itemCount;
            newTotal = cartItem.amount + itemCount * item.product.price;

            return {
              ...cartItem,
              amount: parseFloat(newTotal.toFixed(2)),
              quantity: newCount,
            };
          } else {
            newCount = itemCount;
            newTotal = itemCount * item.product.price;
            updateCartCountAndTotal(
              "ADD",
              newCount - cartItem.quantity,
              newTotal - cartItem.amount
            );
            return {
              ...cartItem,
              amount: parseFloat(newTotal.toFixed(2)),
              quantity: newCount,
            };
          }
        }
        return cartItem;
      })
    );
  };
  const updateCartCountAndTotal = (
    type: string,
    itemCount: number,
    total: number
  ) => {
    switch (type) {
      case "ADD":
        setCount((prevCount) => prevCount + itemCount);
        setTotal((prevTotal) => parseFloat((prevTotal + total).toFixed(2)));
        break;
      case "REMOVE":
        setCount((prevCount) => prevCount - itemCount);
        setTotal((prevTotal) => parseFloat((prevTotal - total).toFixed(2)));
        break;
      default:
    }
  };
  const emptyCart = () => {
    setItems([]);
    setCount(0);
    setTotal(0.0);
  };
  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        addToCart,
        removeFromCart,
        updateCartItem,
        emptyCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
