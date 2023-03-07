import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const FormForm = styled.form`
  width: 65rem;
  height auto;
  background-color: white;
  box-shadow: -9px 9px 20px 0px rgb(0 0 0 / 30%);
  padding 3rem
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1rem 0;
`;

export const FormLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0.3rem 0;
`;

export const StyledInputMask = styled(InputMask)`
  padding: 1rem;
  font-size: 1.6rem;
  border: solid black 2px;
  border-radius: 7px;
  width: 100%;
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & {
    -moz-appearance: textfield;
  }

  &[disabled] {
    background-color: lightgray;
    cursor: auto;
  }
`;

export const NormalInput = styled.input`
  padding: 1rem;
  font-size: 1.6rem;
  border: solid black 2px;
  border-radius: 7px;
  width: 100%;
  appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & {
    -moz-appearance: textfield;
  }

  &[disabled] {
    background-color: lightgray;
    cursor: auto;
  }
`;

export const FormButton = styled.button`
  margin: 2rem 0 0 0;
  padding: 1.5rem 5rem;
  font-size: 1.6rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  border: solid 0.3rem blue;
  border-radius: 7px;
  background-color: blue;
  color: white;
  transition: 0.3s;

  &:hover {
    background-color: white;
    color: blue;
    cursor: pointer;
  }

  &[disabled] {
    background-color: lightgray;
    border-color: gray;
    cursor: auto;
    color: gray;
  }
`;
