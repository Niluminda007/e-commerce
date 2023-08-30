import LoginForm from "../components/Login/LoginForm";
import { useForm, FormProvider, Resolver } from "react-hook-form";
import { UserLogin } from "../Types/InterfaceTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginValidationSchema } from "../schemas/userLoginSchema";
import LoginBackground from "../components/Login/LoginBackground";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
const LoginPage = () => {
  const form = useForm<UserLogin>({
    resolver: yupResolver(userLoginValidationSchema) as Resolver<
      UserLogin,
      object
    >,
    mode: "onTouched",
  });
  return (
    <>
      <motion.div
        initial={{
          scale: 0.4,
          width: "200px",
          height: "200px",
          borderRadius: "9999px",
          top: "50%",
          left: "50%",
          opacity: 0.2,
        }}
        animate={{
          scale: 1,
          borderRadius: "0px",
          width: "100%",
          height: "100%",
          top: "0%",
          left: "0",
          opacity: 1,
        }}
        exit={{ x: "999px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full h-full bg-black absolute top-0 left-0"></motion.div>
      <FormProvider {...form}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{ x: "-999px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative sm:static w-full h-full sm:h-auto sm:flex sm:items-center sm:justify-center ">
          <div className="sm:w-[70rem] w-full h-full sm:aspect-[12/8] bg-white shadow-custom_shadow rounded-lg flex relative">
            <LoginBackground />
            <LoginForm />
          </div>
        </motion.div>
      </FormProvider>
    </>
  );
};

export default LoginPage;
