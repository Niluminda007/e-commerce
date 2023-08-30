import { get, useFormContext } from "react-hook-form";
import CutomErrorMessage from "./CutomErrorMessage";
type InputFieldProps = {
  name: string;
  type: string;
};
const InputField = (props: InputFieldProps) => {
  const { name, type } = props;
  const {
    formState: { errors },
    register,
  } = useFormContext();
  const error = get(errors, name);
  return (
    <div className="flex flex-col mb-8 relative">
      <label
        htmlFor={name}
        className="text-[rgba(255,255,255,0.8)] sm:text-dark_black text-lg font-medium">
        {name[0].toUpperCase() + name.slice(1)}
      </label>
      <input
        {...register(name)}
        name={name}
        type={type}
        className="w-[20rem] sm:w-[25rem] h-[60px] bg-[rgba(126,34,206,0.2)] sm:bg-green rounded-md text-white outline-none px-6 py-2 shadow-md transition ease-linear focus:bg-[rgba(0,0,0,0.2)] "
      />
      {error ? <CutomErrorMessage message={error.message} /> : null}
    </div>
  );
};

export default InputField;
