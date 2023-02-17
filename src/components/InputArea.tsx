import { Input } from "../stories/Input";

interface InputAreaProps {
  label?: string;
  htmlFor: string | undefined;
  errorMsg: string;
  error: boolean;
  register?: any;
  size?: "small" | "medium" | "large";
  validation: any;
  hasError: any;
}

const InputArea = ({ label, htmlFor, errorMsg, error, size, validation, hasError, register }: InputAreaProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={htmlFor}>
        {label}
      </label>
      <Input
        register={register}
        name={htmlFor}
        validation={validation}
        hasError={hasError}
        size={size}
        error={error}
        errorMsg={errorMsg}
      />
    </div>
  );
};
export default InputArea;
