import { Link } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";

const LoginAlternatives = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex w-full items-center justify-center">
        <hr className="flex-[0.4] bg-slate-800 " />
        <span className="text-md text-black font-normal">OR</span>
        <hr className="flex-[0.4] bg-slate-800" />
      </div>

      <GoogleLoginButton />
      <div className="flex mt-8 gap-2">
        <p className="text-lg text-[rgba(255,255,255,.8)] sm:text-slate-900 font-medium">
          Not Registered?
        </p>
        <Link to="/register" className="flex justify-center items-center">
          <span className=" text-purple-700  ease-linear transition-all hover:scale-[1.2]">
            Register
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LoginAlternatives;
