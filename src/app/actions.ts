'use server'

import { CepResult } from "@/types/cep"

export async function searchCEP(previousState: CepResult | null, formData: FormData) {
  try {
    const cep = formData.get("cep")

    if (!cep) throw new Error()

    const updatedCep = cep.toString().replace(/(\D)/, "")
    console.log(updatedCep)

    const result = await fetch(`https://viacep.com.br/ws/${updatedCep}/json/`, {
      cache: 'no-cache'
    })
    const parsedResult = await result.json()
    
    if (parsedResult?.erro) throw new Error()
    console.log(parsedResult)
    
    return {
      error: false,
      msg: "O CEP foi localizado com sucesso!",
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