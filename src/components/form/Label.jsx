import P from 'prop-types';
import { FormLabel } from '../../assets/css/form/styles.js';

export const Label = ({ text, htmlFor }) => {
  return <FormLabel htmlFor={htmlFor}>*{text}</FormLabel>;
};

Label.propTypes = {
  text: P.string.isRequired,
  htmlFor: P.string.isRequired,
};
