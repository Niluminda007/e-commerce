import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
type LogOutButtonProps = {
  handleUserProfile: () => void;
};

const LogOutButton = ({ handleUserProfile }: LogOutButtonProps) => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    try {
      handleUserProfile();
      logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="flex  items-center cursor-pointer gap-2 min-w-[100px]"
      onClick={handleLogOut}>
      <GrLogout />
      <span className="text-slate-700 text-sm font-normal">LogOut</span>
    </div>
  );
};

export default LogOutButton;
