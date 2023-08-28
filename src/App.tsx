import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/HOC/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage";
import { Orders } from "./components/Account/Orders";
import MyDetails from "./components/Account/MyDetails";
import MyProfileLayout from "./components/Layout/MyProfileLayout";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
            <Route path="/home" element={<ProductList />} />
            <Route path="myProfile" element={<MyProfileLayout />}>
              <Route index element={<MyDetails />} />
              <Route path="orders" element={<Orders />} />
            </Route>

            <Route path="/products" element={<ProductList />} />
            <Route path="/category/:categoryName" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
};

export default App;
