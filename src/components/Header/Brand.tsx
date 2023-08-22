import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const Brand = () => {
  const { isMobile, isTablet } = useMediaQuery();
  return (
    <Link to={"/home"} className="flex items-center justify-center gap-2">
      <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-lg border-black border-1">
        <img src={Logo} width="64" height="74" className="object-fit" />
      </div>
      {!isMobile && !isTablet ? (
        <span className="text-2xl text-purple-700 tracking-[-1px] font-medium">
          All In One Mart
        </span>
      ) : null}
    </Link>
  );
};

export default Brand;
