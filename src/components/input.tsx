'use client'

import { useState } from "react";

interface Props {
  className: string
}

export default function Input({ className }: Props) {
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleStartLoading = () => setLoading(true);
  const handleStopLoading = () => setLoading(false);

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
          if (e.target.value.length < 9) {
            const updatedValue = e.target.value.replace(/(\D)/, "")
            setValue(updatedValue)

            // if (updatedValue.length === 8) {
            //   const maskValue = updatedValue.replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
            //   setValue(maskValue)
            // } else {
            //   setValue(updatedValue)
            // }
          }
        }}
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
