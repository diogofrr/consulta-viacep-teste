"use client";

import { useFormState } from "react-dom";
import Input from "./input";
import { CepResult } from "@/types/cep";
import { useEffect } from "react";
import useStatus from "@/hooks/useStatus";
import Button from "./button";
import { cepMask } from "@/utils/masks";

interface FormProps {
  handleFormAction: (
    state: CepResult | null,
    formData: FormData
  ) => Promise<CepResult>;
  handleSaveFormReturnValue?: (result: any) => void;
  description: string;
}

export default function Form({
  handleFormAction,
  handleSaveFormReturnValue,
  description,
}: FormProps) {
  const [returnValue, action] = useFormState(handleFormAction, null);
  const { status, error, setErrorStatus, setLoading, setSuccess, setIdle } =
    useStatus();

  useEffect(() => {
    if (returnValue && handleSaveFormReturnValue) {
      handleSaveFormReturnValue(returnValue);
      
    }
  }, [action, handleSaveFormReturnValue, returnValue]);

  return (
    <>
      <form
        action={(formData: FormData) => {
          const cep = formData.get("cep");
          if (cep?.toString().length === 9) {
            setLoading()
            action(formData);
          }
        }}
      >
        <h1 className="font-medium text-2xl mb-6">{description}</h1>
        <Input
          className="mb-2"
          disabled={status === "loading"}
          mask={cepMask}
        />
        <Button disabled={status === "loading"} type="submit" />
      </form>
    </>
  );
}
