type FormSubmitButtonProps = {
  displayValue: string;
};

const FormSubmitButton = (props: FormSubmitButtonProps) => {
  const { displayValue } = props;
  return (
    <button
      type="submit"
      className="mt-8 bg-purple-700 text-white text-xl outline-none rounded-[5%] w-[150px] h-[50px] transition ease-linear  hover:scale-[1.2]">
      {displayValue}
    </button>
  );
};

export default FormSubmitButton;
