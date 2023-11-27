'use server'

import { CepResult } from "@/types/cep"

export async function searchCEP(previousState: CepResult | null, formData: FormData) {
  try { 
    const cep = formData.get("cep")
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
      cache: 'no-cache'
    })
    const parsedResult = await result.json()
    console.log(parsedResult)
    return {
      error: false,
      msg: '',
      result: parsedResult
    }
  } catch (e: any) {
    console.log(e.message)
    return {
      error: true,
      msg: e.message,
      result: null
    }
  }
}