"use client";

import { useFormState } from "react-dom";
import Input from "./input";
import { CepResult } from "@/types/cep";
import { useEffect } from "react";
import useStatus, { StatusEnum } from "@/hooks/useStatus";
import Button from "./button";
import { cepMask } from "@/utils/masks";
import ErrorAlert from "./error-alert";

interface FormProps {
  handleFormAction: (
    state: CepResult | null,
    formData: FormData
  ) => Promise<CepResult>;
  handleSaveFormReturnValue?: (result: any) => void;
  description: string;
}

export default function CepForm({
  handleFormAction,
  handleSaveFormReturnValue,
  description,
}: FormProps) {
  const [returnValue, action] = useFormState(handleFormAction, null);
  const { status, setLoading } =
    useStatus();

  useEffect(() => {
    if (returnValue && handleSaveFormReturnValue) {
      handleSaveFormReturnValue(returnValue);
      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [returnValue]);

  return (
    <>
      <form
        className="w-full flex flex-col gap-2"
        action={(formData: FormData) => {
          const cep = formData.get("cep");

          if (cep?.toString().length === 9) {
            setLoading("Buscando CEP...");
            setTimeout(() => {
              action(formData);
            }, 200)
          }
        }}
      >
        <h1 className={`font-medium text-2xl mb-1`}>{description}</h1>
        {status.status === StatusEnum.Error && (
          <ErrorAlert message={status.msg} />
        )}
        <Input
          className="mb-2"
          disabled={status.status === StatusEnum.Loading}
          mask={cepMask}
        />
        <Button disabled={status.status === StatusEnum.Loading} type="submit" />
      </form>
    </>
  );
}
