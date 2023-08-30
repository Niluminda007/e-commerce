import React, { createContext, useEffect, useState } from "react";
import { UserAuth } from "./AuthContext";
import {
  CartItem,
  OrderContextType,
  OrderItemType,
  OrderType,
} from "../Types/InterfaceTypes";
import createAxiosInstance from "../utils/axiosInstance";

export const OrderContext = createContext<OrderContextType>({
  orders: [],
  placeOrder: async () => {},
});

type OrderProviderProps = {
  children: React.ReactNode;
};

const fetchOrdersData = async (userId: number, authHeader: any) => {
  const fetchOrdersURL = `/Order/Orders/GetOrders/${userId}`;
  const axiosInstance = createAxiosInstance(authHeader);
  const response = await axiosInstance.get(fetchOrdersURL);
  return response.data;
};

const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const { user, authHeader } = UserAuth();

  useEffect(() => {
    fetchOrders();
  }, [user, authHeader]);

  const fetchOrders: () => Promise<void> = async () => {
    if (user) {
      try {
        const ordersData = await fetchOrdersData(user.id, authHeader);
        setOrders(ordersData);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const placeOrder = async (items: CartItem[], total: number) => {
    if (items.length > 0 && user) {
      const placecOrderURL = "/Order/Orders/PlaceOrder";
      const axiosInstance = createAxiosInstance(authHeader);
      const orderItems: OrderItemType[] = items.map((item) => ({
        quantity: item.quantity,
        product: item.product,
        attributes: item.selectedAttributes,
      }));

      const newOrder: OrderType = {
        userId: user.id,
        total: total,
        orderItems: orderItems,
        orderDate: new Date(),
      };
      console.log(newOrder);
      try {
        const response = await axiosInstance.post(placecOrderURL, newOrder);
        console.log(response);
        fetchOrders();
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("No items are in the cart or user is not logged in.");
    }
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
