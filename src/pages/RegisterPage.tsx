import RegisterForm from "../components/Register/RegisterForm";
import { useForm, FormProvider, Resolver } from "react-hook-form";
import { UserRegisterModel } from "../Types/InterfaceTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterValidationSchema } from "../schemas/userRegisterSchema";
import RegisterBackground from "../assets/bg_reg_3.png";
import AnimatedRoute from "../components/HOC/AnimatedRoute";

const RegisterPage = () => {
  const registerForm = useForm<UserRegisterModel>({
    resolver: yupResolver(userRegisterValidationSchema) as Resolver<
      UserRegisterModel,
      object
    >,
    mode: "onTouched",
  });
  return (
    <AnimatedRoute>
      <FormProvider {...registerForm}>
        <div
          className="w-screen h-screen  overflow-hidden flex justify-center items-center "
          style={{
            background: `url(${RegisterBackground})`,
            backgroundSize: "cover",
          }}>
          <RegisterForm />
        </div>
      </FormProvider>
    </AnimatedRoute>
  );
};

export default RegisterPage;
