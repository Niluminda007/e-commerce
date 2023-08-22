import { useFormContext } from "react-hook-form";
import { UserRegisterModel } from "../../Types/InterfaceTypes";

import FormSubmitButton from "../Login/FormSubmitButton";
import RegisterInputField from "./RegisterInputField";
import { UserAuth } from "../../context/AuthContext";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const { handleSubmit } = useFormContext<UserRegisterModel>();
  const { registerUser, isLoading } = UserAuth();
  const navigate = useNavigate();
  const OnValid = async (data: UserRegisterModel) => {
    await registerUser(data);
    alert("User Registerd successfully");
    navigate("/");
  };
  return (
    <div className="flex  bg-[rgba(19,19,19,0.9)] felx-col justify-center rounded-lg">
      <div className="flex flex-col gap-2 ">
        <form
          autoComplete="off"
          onSubmit={handleSubmit(OnValid)}
          className="flex flex-col items-center px-4 py-4  sm:px-6 sm:py-8">
          <h1 className="text-white text-2xl font-medium mt-2">Register</h1>
          <RegisterInputField name="name" type="text" />
          <RegisterInputField name="userName" type="text" />
          <RegisterInputField name="password" type="password" />
          <RegisterInputField name="confirmPassword" type="password" />
          <RegisterInputField name="email" type="text" />
          <RegisterInputField name="address" type="text" />
          <Spinner
            color={"white"}
            type={"REGISTER"}
            loadingText={"registering user..."}
            isLoading={isLoading}
            textColor="white"
          />
          <div
            className={`${
              isLoading ? "opacity-0" : "opacity-100"
            } ease-linear transition-all flex justify-center flex-col items-center gap-4`}>
            <FormSubmitButton displayValue="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
