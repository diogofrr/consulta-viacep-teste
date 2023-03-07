import axios from 'axios';

export const cepApi = (cep) => {
  if (cep != '') {
    console.log('chamou');

    const response = axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.data)
      .catch((res) => res.data);
    return response;
  }
};
