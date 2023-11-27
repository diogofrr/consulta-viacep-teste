'use client'

import { useFormState } from "react-dom";
import Input from "./input";
import { CepResult } from "@/types/cep";

interface Props {
  handleFormAction: (state: CepResult | null, formData: FormData) => Promise<CepResult>
  description: string
}

export default function Form({ handleFormAction, description }: Props) {
  const [returnValue, action] = useFormState(handleFormAction, null);

  return (
    <>
      {JSON.stringify(returnValue)}
      <form action={action} >
        <h1 className="font-medium text-2xl mb-6">{description}</h1>
        <Input className="mb-2" />
        <button type="submit" className="w-full border-blue-500 border-solid border-2 bg-blue-500 rounded-md py-2 px-4 uppercase text-sm font-medium text-white tracking-wide">Enviar</button>
      </form>
    </>
  )
}