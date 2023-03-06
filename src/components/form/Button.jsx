import P from 'prop-types';
import { useEffect, useRef } from 'react';
import { FormButton } from '../../assets/css/form/styles.js';

export const Button = ({ text, type, onClick, setDisabled }) => {
  const isDisabled = useRef(null);

  useEffect(() => {
    setDisabled ? isDisabled.current.setAttribute('disabled', '') : isDisabled.current.removeAttribute('disabled');
  }, [setDisabled]);

  return (
    <FormButton type={type} onClick={onClick} ref={isDisabled}>
      {text}
    </FormButton>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  type: P.string.isRequired,
  onClick: P.func.isRequired,
  setDisabled: P.bool.isRequired,
};
