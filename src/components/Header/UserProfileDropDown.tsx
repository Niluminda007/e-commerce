import LogOutButton from "./LogOutButton";
import MyProfileButton from "./MyProfileButton";

type UserProfileDropDownProps = {
  IsDropdownClicked: boolean;
  handleUserProfile: () => void;
};

const UserProfileDropDown = ({
  IsDropdownClicked,
  handleUserProfile,
}: UserProfileDropDownProps) => {
  return (
    <div
      className={`absolute top-[110%] -left-[100%] p-4 bg-[rgba(0,0,0,.1)]  ${
        IsDropdownClicked
          ? "opacity-100 z-10"
          : "opacity-0 -z-[100] pointer-events-none"
      } flex flex-col   rounded-md gap-4 transition-all ease-linear`}>
      <MyProfileButton handleUserProfile={handleUserProfile} />
      <LogOutButton handleUserProfile={handleUserProfile} />
    </div>
  );
};

export default UserProfileDropDown;
