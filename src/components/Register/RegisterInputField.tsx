import { useFormContext, get } from "react-hook-form";
import CutomErrorMessage from "../Login/CutomErrorMessage";
type RegisterInputFieldProps = {
  name: string;
  type: string;
};

const RegisterInputField = (props: RegisterInputFieldProps) => {
  const { name, type } = props;
  const {
    formState: { errors },
    register,
  } = useFormContext();
  const error = get(errors, name);
  return (
    <div className="flex flex-col mb-8 relative">
      <label htmlFor={name} className="text-cold_white text-sm font-medium ">
        {name[0].toUpperCase() + name.slice(1)}
      </label>
      <input
        {...register(name)}
        name={name}
        type={type}
        className="w-[20rem] sm:w-[25rem] h-[40px] bg-[rgba(255,255,255,.1)] rounded-md text-white outline-none px-6 py-2 shadow-md transition ease-linear focus:bg-[rgba(0,0,0,0.2)] "
      />
      <CutomErrorMessage message={error ? error.message : ""} />
    </div>
  );
};

export default RegisterInputField;
