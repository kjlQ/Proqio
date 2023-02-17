interface InputProps {
  size?: "small" | "medium" | "large";
  error: boolean;
  errorMsg: string;
  value?: string;
  register: any;
  name: string | undefined;
  validation: any;
  hasError: any;
}
export const Input = ({
  size = "medium",
  value,
  error,
  name,
  register,
  validation,
  hasError,
  errorMsg,
  ...props
}: InputProps) => {
  const handleGetPropperSize = (size: string) => {
    switch (size) {
      case "small":
        return "py-1 px-2 text-sm";
      case "medium":
        return "py-2 px-3 text-base";
      case "large":
        return "py-3 px-4 text-lg";
      default:
        break;
    }
  };
  return (
    <>
      <input
        value={value}
        {...register(name, { ...validation })}
        className={[
          "shadow appearance-none border rounded w-full mb-2 text-gray-700 leading-tight outline-none focus:outline-none focus:bg-[#F0F8FF] focus:shadow-lg duration-200 transition-colors ",
          `${handleGetPropperSize(size)}`,
          `${hasError || error ? "border-red-500" : ""}`,
        ].join(" ")}
        {...props}
      />
      {(hasError || error) && <p className="text-red-500 text-xs italic ">{hasError ? hasError.message : errorMsg}</p>}
    </>
  );
};
