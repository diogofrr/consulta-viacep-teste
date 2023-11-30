'use client'

import { useState } from "react"
import Form from "./form"
import { searchCEP } from "@/app/actions"
import { type CepResult } from "@/types/cep"
import ListInfo from "./list-info"
import useStatus from "@/hooks/useStatus"


export default function CepModal() {
  const [cepInfo, setCepInfo] = useState<CepResult | null>(null)
  const status = useStatus();

  const handleSaveCepInfo = (result: CepResult) => setCepInfo(result)

  return (
    <div className="bg-white px-8 py-4 rounded-lg shadow-xl flex items-center justify-center flex-col">
      <Form handleFormAction={searchCEP} handleSaveFormReturnValue={handleSaveCepInfo} description="Busca CEP"/>
      {cepInfo?.result && (
        <ListInfo data={cepInfo.result} />
      )
      }
    </div>
  )
}