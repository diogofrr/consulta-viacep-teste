'use client'

import { useState } from "react";

interface InputProps {
  className: string
  disabled: boolean
  mask: (value: string) => any
}

const Input: React.FC<InputProps> = ({ className, disabled, mask }: InputProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col w-full relative">
      <label
        htmlFor="cep"
        className="font-medium text-xs absolute -top-2 left-4 bg-white pl-1 pr-3 text-gray-500"
      >
        CEP
      </label>
      <input
        onChange={(e) => {
          const maskValue = mask(e.currentTarget.value)
          setValue(maskValue)
        }}
        disabled={disabled}
        value={value}
        autoFocus
        type="text"
        id="cep"
        name="cep"
        className={`w-full p-2 rounded-lg border-2 border-solid border-gray-500 outline-none focus:border-blue-600 ${className}`}
      />
    </div>
  );
}

export default Input;