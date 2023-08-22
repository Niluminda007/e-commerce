type SpinnerProps = {
  color: string;
  type: "LOGIN" | "REGISTER" | "OTHER";
  loadingText: string;
  isLoading: boolean;
  textColor?: string;
};

const Spinner = (props: SpinnerProps) => {
  const { color, type, loadingText, isLoading, textColor } = props;
  const isLoginOrRegister = type !== "OTHER";
  const loadingTextColor = textColor ? textColor : "black";
  return (
    <div
      className={`${
        isLoading ? "opacity-100 z-10" : "opacity-0 -z-10"
      } ease-linear transition-all relative w-full h-full`}>
      <div
        className={`flex flex-col items-center absolute left-[50%]  ${
          !isLoginOrRegister ? " top-[50%] " : " -translate-x-[50%]"
        } `}>
        <div
          className={` animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent  rounded-full`}
          role="status"
          style={{ color: color }}
          aria-label="loading"></div>
        <span
          className=" text-sm flex items-center justify-center mt-2"
          style={{ color: loadingTextColor }}>
          {loadingText}
        </span>
      </div>
    </div>
  );
};

export default Spinner;
