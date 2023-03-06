/* eslint-disable no-unused-vars */
export const cepApi = (cep) => {
  if (cep != '') {
    const response = fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .catch((e) => e);

    return response;
  }
};
