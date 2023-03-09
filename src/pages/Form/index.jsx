import '../../assets/css/global-styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { FormForm } from '../../assets/css/form/styles';
import { H1, Section } from '../../assets/css/ui/styles';

import { FormField } from '../../components/form/FormField';
import { Button } from '../../components/form/Button';

import { cepApi } from '../../api/cepApi';

import { toast, ToastContainer } from 'react-toastify';
import { useState, useRef, useEffect, useCallback } from 'react';
import throttle from 'lodash.throttle';

const Form = () => {
  const cepRef = useRef(null);
  const ruaRef = useRef(null);
  const compRef = useRef(null);
  const bairroRef = useRef(null);
  const cidadeRef = useRef(null);
  const estadoRef = useRef(null);

  const [inputDisable, setInputDisable] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (Object.keys(result).length) {
      const { logradouro, complemento, bairro, localidade, uf } = result;
      setInputDisable(() => false);
      ruaRef.current.value = logradouro;
      compRef.current.value = complemento || '-';
      bairroRef.current.value = bairro;
      cidadeRef.current.value = localidade;
      estadoRef.current.value = uf;
    }
  }, [result]);

  const handleSaveCep = useCallback(async (val) => {
    const fmtVal = val.replace(/[-_]/g, '');
    const valLength = fmtVal.length;

    if (valLength === 8) {
      const results = await cepApi(fmtVal);
      if (results.erro) {
        cepRef.current.value = '';
        toast.error('CEP inexistente ou valor inválido.');
      } else {
        setResult(results);
        toast.success('CEP localizado com sucesso!');
      }
    }
  }, []);

  const handleSaveCepThrottled = throttle(handleSaveCep, 800);

  const handleResetForm = () => {
    setInputDisable(() => true);
    setResult(() => '');
    cepRef.current.value = '';
    ruaRef.current.value = '';
    compRef.current.value = '';
    bairroRef.current.value = '';
    cidadeRef.current.value = '';
    estadoRef.current.value = '';
  };

  return (
    <Section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
      <FormForm>
        <H1>Insira seu CEP</H1>
        <FormField
          name="cep"
          htmlFor="cep"
          labelText="CEP"
          inputPlaceholder={'Digite seu CEP aqui'}
          mask={'99999-999'}
          inputRef={cepRef}
          onChange={() => handleSaveCepThrottled(cepRef.current.value)}
          autoFocus={false}
          hasMask={true}
          disabled={!inputDisable}
        />
        <FormField
          name="rua"
          htmlFor="rua"
          labelText="Rua"
          inputPlaceholder={'Digite o nome da sua rua aqui'}
          disabled={inputDisable}
          inputRef={ruaRef}
        />
        <FormField
          name="complemento"
          htmlFor="complemento"
          labelText="Complemento"
          inputPlaceholder={'Digite o complemento aqui'}
          disabled={inputDisable}
          inputRef={compRef}
        />
        <FormField
          name="bairro"
          htmlFor="bairro"
          labelText="Bairro"
          inputPlaceholder={'Digite seu bairro aqui'}
          disabled={inputDisable}
          inputRef={bairroRef}
        />
        <FormField
          name="cidade"
          htmlFor="cidade"
          labelText="Cidade"
          inputPlaceholder={'Digite sua cidade aqui'}
          disabled={inputDisable}
          inputRef={cidadeRef}
        />
        <FormField
          name="estado"
          htmlFor="estado"
          labelText="Estado"
          inputPlaceholder={'Digite o estado aqui'}
          mask={'aa'}
          disabled={inputDisable}
          inputRef={estadoRef}
          hasMask={true}
        />
        <Button text={'Enviar'} type={'button'} onClick={handleResetForm} setDisabled={inputDisable} />
      </FormForm>
    </Section>
  );
};

export default Form;
