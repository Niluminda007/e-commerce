import { Outlet } from "react-router-dom";
import SideBar from "../Account/SideBar";

const MyProfileLayout = () => {
  return (
    <div className="xl:w-[1280px] w-full px-4 md:px-10  my-[7rem] mx-auto flex flex-col gap-4 md:max-w-[1280px] md:pt-20">
      <div>
        <h1 className="text-[1.4rem] text-black font-semibold">
          Account Overview
        </h1>
      </div>

      <div className="flex md:flex-row flex-col gap-16 w-full pb-[12.5rem]">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MyProfileLayout;
