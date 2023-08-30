import OrderProvider from "../../context/OrderContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <OrderProvider>
      <div className="flex flex-col w-full relative min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </OrderProvider>
  );
};

export default Layout;
