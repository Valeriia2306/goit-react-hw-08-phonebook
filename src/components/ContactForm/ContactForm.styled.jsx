import styled from '@emotion/styled';
import {
  Form as FormikForm,
  ErrorMessage as Message,
  // Input as Field,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;
// const Input = styled(Field)`
//   height: 25px;
//   width: 220px;
//   padding-left: 10px;

//   border: none;
//   border-radius: 5px;
//   outline: yellow;
// `;
export const ErrorMessage = styled(Message)`
  color: red;
  margin-left: auto;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 150px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 500;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #3f51b5;
  transition: 250ms;
  margin-left: auto;
  margin-right: auto;
  :hover {
    scale: 1.05;
  }
  :active {
    scale: 0.95;
    background-color: blue;
  }
  :disabled {
    background-color: red;
    color: black;
  }
`;
