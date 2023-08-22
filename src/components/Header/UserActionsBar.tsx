import UserCartButton from "./UserCartButton";
import UserProfileButton from "./UserProfileButton";

const UserActionsBar = () => {
  return (
    <div className="flex gap-4">
      <UserCartButton />
      <UserProfileButton />
    </div>
  );
};

export default UserActionsBar;
