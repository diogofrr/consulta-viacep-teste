export interface Result {
  error: boolean,
  msg: string,
  result: unknown
}

export interface CepResult extends Result {
  result: CepInfo | {
    error: boolean
  }
}

export interface CepInfo {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}