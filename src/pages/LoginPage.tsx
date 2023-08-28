import LoginForm from "../components/Login/LoginForm";
import { useForm, FormProvider, Resolver } from "react-hook-form";
import { UserLogin } from "../Types/InterfaceTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginValidationSchema } from "../schemas/userLoginSchema";
import LoginBackground from "../components/Login/LoginBackground";
import AnimatedRoute from "../components/HOC/AnimatedRoute";
const LoginPage = () => {
  const form = useForm<UserLogin>({
    resolver: yupResolver(userLoginValidationSchema) as Resolver<
      UserLogin,
      object
    >,
    mode: "onTouched",
  });
  return (
    <AnimatedRoute>
      <FormProvider {...form}>
        <div className="relative sm:static w-[100vw] h-[100vh] sm:h-auto sm:flex sm:items-center sm:justify-center ">
          <div className="sm:w-[70rem] w-full h-full sm:aspect-[12/8] bg-cold_white shadow-custom_shadow rounded-lg flex relative">
            <LoginBackground />
            <LoginForm />
          </div>
        </div>
      </FormProvider>
    </AnimatedRoute>
  );
};

export default LoginPage;
