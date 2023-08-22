import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import OrderProvider from "../../context/OrderContext";
import CartProvider from "../../context/CartContext";

const Layout = () => {
  return (
    <CartProvider>
      <OrderProvider>
        <div className="flex flex-col w-[100vw] h-[100vh] relative">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </OrderProvider>
    </CartProvider>
  );
};

export default Layout;
