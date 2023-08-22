import { LuUser } from "react-icons/lu";
import { UserAuth } from "../../context/AuthContext";
<LuUser className="text-black text-[1.5rem]" />;

const MyDetails = () => {
  const { user } = UserAuth();

  return user ? (
    <div className="flex md:flex-[.7] w-full bg-transparent flex-col gap-8  md:max-h-screen ">
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col">
          <h1 className="text-[1.7rem] font-semibold text-black mb-8">
            DETAILS
          </h1>
          <div className="flex flex-col gap-6">
            <div className="w-32 h-32">
              {user.photoURL ? (
                <img
                  className="object-fit w-32 h-32 rounded-full bg-red-700"
                  src={user.photoURL}
                />
              ) : (
                <div className="bg-slate-200 rounded-full flex justify-center items-center w-[8rem] h-[8rem]">
                  <LuUser className="text-slate-800 text-[7rem] font-normal" />
                </div>
              )}
            </div>

            <h3 className="text-medium text-xl text-black">{user.fullName}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[1.7rem] font-semibold text-black mb-8">
            LOGIN DETAILS
          </h2>
          <div className="flex flex-col">
            <h2 className="text-lg text-black font-semibold">USERNAME</h2>
            <span className="text-sm text-black font-medium">
              {user.userName}
            </span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg text-black font-semibold">EMAIL</h2>
            <span className="text-sm text-black font-medium">{user.email}</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg text-black font-semibold">PASSWORD</h2>
            <span className="text-sm text-black font-medium">
              {Array.from({ length: user.userName.length }, () => "*")}
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default MyDetails;
