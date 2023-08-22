type CustomErrorMessageProps = {
  message: string;
};

const CustomErrorMessage = (props: CustomErrorMessageProps) => {
  const { message } = props;

  return (
    <span
      className={`absolute text-red-500 text-sm min-h-4 pointer-events-none transition-opacity duration-300 -bottom-6 ${
        message !== "" ? "opacity-100" : "opacity-0"
      }`}>
      {message}
    </span>
  );
};

export default CustomErrorMessage;
