import RegisterForm from "../components/Register/RegisterForm";
import { useForm, FormProvider, Resolver } from "react-hook-form";
import { UserRegisterModel } from "../Types/InterfaceTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterValidationSchema } from "../schemas/userRegisterSchema";
import RegisterBackground from "../assets/bg_reg_3.png";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const registerForm = useForm<UserRegisterModel>({
    resolver: yupResolver(userRegisterValidationSchema) as Resolver<
      UserRegisterModel,
      object
    >,
    mode: "onTouched",
  });
  return (
    <motion.div
      initial={{ y: "-1000px", opacity: 0.7 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      exit={{ y: "1000px", opacity: 0.7 }}>
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
    </motion.div>
  );
};

export default RegisterPage;
