'use server'

import { CepInfo, CepResult } from "@/types/cep"

export async function searchCEP(previousState: CepResult | null, formData: FormData) {
  try {
    const cep = formData.get("cep")

    if (!cep) throw new Error()

    const updatedCep = cep.toString().replace(/(\D)/, "")

    const result = await fetch(`https://viacep.com.br/ws/${updatedCep}/json/`, {
      cache: 'default'
    })
    const parsedResult = await result.json()

    if (parsedResult?.erro) throw new Error()

    return {
      error: false,
      msg: 'O CEP foi localizado com sucesso!',
      result: parsedResult
    }
  } catch (e: any) {
    console.log(e.message)
    return {
      error: true,
      msg: "Não foi possível localizar esse CEP.",
      result: null
    }
  }
}