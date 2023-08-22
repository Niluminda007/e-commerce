import useMediaQuery from "../../hooks/useMediaQuery";
import Brand from "./Brand";
import ProductSearch from "./ProductSearch";
import UserActionsBar from "./UserActionsBar";

const Header = () => {
  const { isMobile } = useMediaQuery();

  return (
    <nav className="w-full h-[5rem] sm:h-[7rem]  bg-white fixed top-0 flex justify-between px-4 sm:px-20 py-6 items-center border-b-2 z-50">
      <Brand />
      {!isMobile ? <ProductSearch /> : null}
      <UserActionsBar />
    </nav>
  );
};

export default Header;
