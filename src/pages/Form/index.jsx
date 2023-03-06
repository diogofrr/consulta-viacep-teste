import { FormForm } from '../../assets/css/form/styles';
import { H1, Section } from '../../assets/css/ui/styles';
import '../../assets/css/global-styles.css';

import { Group } from '../../components/form/Group';
import { Button } from '../../components/form/Button';

import { cepApi } from '../../api/cepApi';
import { useState, useRef, useEffect } from 'react';

const Form = () => {
  const cepRef = useRef(null);
  const ruaRef = useRef(null);
  const compRef = useRef(null);
  const bairroRef = useRef(null);
  const cidadeRef = useRef(null);
  const estadoRef = useRef(null);

  const [isDisabled, setIsDisabled] = useState(true);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (Object.keys(result).length != 0) {
      console.log(result);
      setIsDisabled(() => false);
      ruaRef.current.value = result.logradouro;
      compRef.current.value = result.complemento != '' ? result.complemento : '-';
      bairroRef.current.value = result.bairro;
      cidadeRef.current.value = result.localidade;
      estadoRef.current.value = result.uf;
    }
  }, [result]);

  const handleSaveCep = async (val) => {
    const fmtVal = val.replace(/[-_]/g, '');
    const valLength = fmtVal.length;

    if (valLength === 8) {
      const results = await cepApi(fmtVal);
      if (results.erro) {
        cepRef.current.value = '';
        window.alert('Valor inválido');
      } else {
        setResult(results);
      }
    }
  };

  const handleResetForm = () => {
    setIsDisabled(() => true);
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
      <FormForm>
        <H1>Insira seu CEP</H1>
        <Group
          name="cep"
          htmlFor="cep"
          labelText="CEP"
          inputPlaceholder={'Digite seu CEP aqui'}
          mask={'99999-999'}
          inputRef={cepRef}
          onChange={() => handleSaveCep(cepRef.current.value)}
          autoFocus={false}
          hasMask={true}
          disabled={!isDisabled}
        />
        <Group
          name="rua"
          htmlFor="rua"
          labelText="Rua"
          inputPlaceholder={'Digite o nome da sua rua aqui'}
          disabled={isDisabled}
          inputRef={ruaRef}
        />
        <Group
          name="complemento"
          htmlFor="complemento"
          labelText="Complemento"
          inputPlaceholder={'Digite o complemento aqui'}
          disabled={isDisabled}
          inputRef={compRef}
        />
        <Group
          name="bairro"
          htmlFor="bairro"
          labelText="Bairro"
          inputPlaceholder={'Digite seu bairro aqui'}
          disabled={isDisabled}
          inputRef={bairroRef}
        />
        <Group
          name="cidade"
          htmlFor="cidade"
          labelText="Cidade"
          inputPlaceholder={'Digite sua cidade aqui'}
          disabled={isDisabled}
          inputRef={cidadeRef}
        />
        <Group
          name="estado"
          htmlFor="estado"
          labelText="Estado"
          inputPlaceholder={'Digite o estado aqui'}
          mask={'aa'}
          disabled={isDisabled}
          inputRef={estadoRef}
          hasMask={true}
        />
        <Button text={'Limpar'} type={'button'} onClick={handleResetForm} setDisabled={false} disabled={isDisabled} />
      </FormForm>
    </Section>
  );
};

export default Form;
