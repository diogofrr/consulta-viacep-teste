import P from 'prop-types';
import { FormButton } from '../../assets/css/form/styles.js';

export const Button = ({ text, type, onClick, setDisabled }) => {
  return (
    <FormButton type={type} onClick={onClick} disabled={setDisabled}>
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
