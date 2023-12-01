'use client'

import { useState } from "react"
import CepForm from "./cep-form"
import { searchCEP } from "@/app/actions"
import { type CepResult } from "@/types/cep"
import ListInfo from "./list-info"
import useStatus from "@/hooks/useStatus"


export default function CepModal() {
  const [cepInfo, setCepInfo] = useState<CepResult | null>(null)
  const { status, setSuccess, setError } = useStatus();

  const handleSaveCepInfo = (result: CepResult) => {
    if (result.error) {
      setError(result.msg)
      setCepInfo(null)
    }
    else {
      setCepInfo(result) 
      setSuccess("CEP localizado com sucesso.")
    }
  }

  return (
    <div className="bg-white px-8 py-4 rounded-lg shadow-xl flex items-center justify-center flex-col w-screen h-screen xs:h-auto xs:w-96">
      <CepForm handleFormAction={searchCEP} handleSaveFormReturnValue={handleSaveCepInfo} description="Busca CEP"/>
      {cepInfo && (
        <>
          <div className="w-full h-[2px] bg-blue-950 my-2 rounded-lg" />
          <ListInfo data={cepInfo.result} />
        </>
      )
      }
    </div>
  )
}