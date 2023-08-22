import { LuUser } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
type MyProfileButtonProps = {
  handleUserProfile: () => void;
};

const MyProfileButton = ({ handleUserProfile }: MyProfileButtonProps) => {
  const navigate = useNavigate();
  const handleMyProfile = () => {
    handleUserProfile();
    navigate("/myProfile");
  };
  return (
    <div
      className="flex  cursor-pointer gap-2 min-w-[100px]"
      onClick={handleMyProfile}>
      <LuUser className="text-black " />
      <span className="text-slate-700 text-sm font-normal">My Proflie</span>
    </div>
  );
};

export default MyProfileButton;
