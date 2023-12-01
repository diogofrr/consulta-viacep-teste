import { type ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean;
}

const Button: React.FC<CustomButtonProps> = ({
  disabled,
  ...props
}: CustomButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`w-full ${
        disabled ? "border-gray-400 bg-gray-400" : "border-blue-500 bg-blue-500"
      } border-solid border-2 rounded-md py-2 px-4 uppercase text-sm font-medium text-white tracking-wide`}
    >
      {disabled ? "Pesquisando..." : "Pesquisar"}
    </button>
  );
};

export default Button;
