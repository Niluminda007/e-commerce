import InputField from "./InputField";
import FormSubmitButton from "./FormSubmitButton";
import { useFormContext } from "react-hook-form";
import { UserLogin } from "../../Types/InterfaceTypes";
import { UserAuth } from "../../context/AuthContext";
import LoginAlternatives from "./LoginAlternatives";
import Spinner from "../Spinner/Spinner";
import useMediaQuery from "../../hooks/useMediaQuery";

const LoginForm = () => {
  const { handleSubmit } = useFormContext<UserLogin>();
  const { logIn, isLoading } = UserAuth();
  const isRedirecting =
    localStorage.getItem("isRedirecting") === "true" || false;
  const loading = isRedirecting || isLoading;

  const OnValid = async (data: UserLogin) => {
    await logIn(data);
    localStorage.setItem("isRedirecting", "false");
  };
  const { isMobile } = useMediaQuery();
  console.log(isRedirecting);
  return (
    <div
      className={` ${
        isMobile ? "h-screen w-screen items-center justify-center" : ""
      } flex flex-col gap-2 `}>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(OnValid)}
        className="sm:static z-10   bg-cold_white sm:bg-transparent  flex flex-col items-center px-4 py-4 rounded-sm sm:rounded-none sm:px-6 sm:py-8">
        <h1 className="text-dark_black text-[3rem] mb-8">Login</h1>
        <InputField name="userName" type="text" />
        <InputField name="password" type="password" />
        <Spinner
          type="LOGIN"
          color="black"
          loadingText="loging in......"
          isLoading={loading}
        />
        <div
          className={`${
            loading ? "opacity-0" : "opacity-100"
          } ease-linear transition-all flex justify-center flex-col items-center gap-4`}>
          <FormSubmitButton displayValue="Login" />
          <LoginAlternatives />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
