import P from 'prop-types';
import { StyledInputMask, NormalInput } from '../../assets/css/form/styles.js';

export const Input = ({ placeholder, name, mask, onChange, inputRef, disabled, autoFocus, hasMask = false }) => {
  return hasMask ? (
    <StyledInputMask
      type={'text'}
      placeholder={placeholder}
      name={name}
      mask={mask}
      onChange={onChange}
      ref={inputRef}
      disabled={disabled}
      autoFocus={autoFocus}
      required
    />
  ) : (
    <NormalInput
      type={'text'}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      ref={inputRef}
      disabled={disabled}
      autoFocus={autoFocus}
      required
    />
  );
};

Input.propTypes = {
  placeholder: P.string.isRequired,
  name: P.string.isRequired,
  hasMask: P.bool,
  mask: P.string,
  onChange: P.func,
  inputRef: P.object,
  disabled: P.bool,
  autoFocus: P.bool,
};
