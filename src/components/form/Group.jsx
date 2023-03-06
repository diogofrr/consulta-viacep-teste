import P from 'prop-types';

import { FormGroup } from '../../assets/css/form/styles.js';

import { Input } from './Input';
import { Label } from './Label';

export const Group = ({
  inputPlaceholder,
  labelText,
  htmlFor,
  name,
  mask,
  disabled,
  inputRef,
  onChange,
  autoFocus = false,
  hasMask,
}) => {
  return (
    <FormGroup>
      <Label text={labelText} htmlFor={htmlFor} />
      <Input
        placeholder={inputPlaceholder}
        name={name}
        mask={mask}
        disabled={disabled}
        inputRef={inputRef}
        onChange={onChange}
        autoFocus={autoFocus}
        hasMask={hasMask}
      />
    </FormGroup>
  );
};

Group.propTypes = {
  inputPlaceholder: P.string.isRequired,
  labelText: P.string.isRequired,
  htmlFor: P.string.isRequired,
  name: P.string.isRequired,
  mask: P.string,
  disabled: P.bool,
  inputRef: P.object,
  onChange: P.func,
  autoFocus: P.bool,
  hasMask: P.bool,
};
