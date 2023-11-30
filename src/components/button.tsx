import { type ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled: boolean
}

const Button: React.FC<CustomButtonProps> = ({ disabled, ...props }: CustomButtonProps  ) => {
  return (
    <button { ...props } disabled={disabled} className="w-full border-blue-500 border-solid border-2 bg-blue-500 rounded-md py-2 px-4 uppercase text-sm font-medium text-white tracking-wide">Pesquisar</button>
  )
}

export default Button