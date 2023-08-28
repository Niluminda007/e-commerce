import { Link } from "react-router-dom";
import { BsFillBoxFill } from "react-icons/bs";
import { LuUser } from "react-icons/lu";

const SideBar = () => {
  return (
    <div className=" max-h-[200px]  flex md:flex-col bg-white shadow-md gap-4">
      <Link to="./">
        <div className="w-full flex gap-4  px-6 py-4 bg-white  items-center hover:bg-black ease-linear transition-all group">
          <LuUser className="text-purple-700 text-[1.5rem] ease-linear transition-all group-hover:text-white" />
          <span className="sm:text-lg text-sm font-medium text-black hover:bg-black ease-linear transition-all group-hover:text-white">
            My Information
          </span>
        </div>
      </Link>
      <Link to="orders">
        <div className="flex gap-4  px-6 py-4 bg-white   items-center hover:bg-black ease-linear transition-all group ">
          <BsFillBoxFill className="text-purple-700 text-[1.5rem] ease-linear transition-all group-hover:text-white" />
          <span className="sm:text-lg text-sm font-medium text-black hover:bg-black ease-linear transition-all group-hover:text-white">
            Orders
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
