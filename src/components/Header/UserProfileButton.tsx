import { useEffect, useRef, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import defaultUserProfilePicture from "../../assets/defaultUser.png";
import UserProfileDropDown from "./UserProfileDropDown";

const UserProfileButton = () => {
  const { user } = UserAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isDropdownClicked, setIsDropdownClicked] = useState<boolean>(false);
  const userProfilePicture =
    user && user.photoURL !== null ? user.photoURL : defaultUserProfilePicture;
  const handleUserProfile = () => {
    setIsDropdownClicked(!isDropdownClicked);
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setIsDropdownClicked(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex flex-col relative w-10 h-10" ref={dropdownRef}>
      <button
        className="bg-[rgba(0,0,0,0.1)] rounded-full h-10 w-10 text-[1.2rem] flex justify-center items-center transition-all hover:scale-[1.1] hover:shadow-md "
        onClick={handleUserProfile}>
        <img
          className="h-10 w-10 object-contain rounded-full"
          src={userProfilePicture}
        />
      </button>
      <UserProfileDropDown
        IsDropdownClicked={isDropdownClicked}
        handleUserProfile={handleUserProfile}
      />
    </div>
  );
};

export default UserProfileButton;
