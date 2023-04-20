import styled from '@emotion/styled';
import {
  Form as FormikForm,
  ErrorMessage as Message,
  Field as Input,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 500;
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #ff1744;
`;
export const Field = styled(Input)`
  height: 30px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  font-weight: 500;
`;
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
  font-size: 18px;
  font-weight: 500;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #3f51b5;
  transition: 250ms;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  :hover {
    scale: 1.05;
  }
  :active {
    scale: 0.95;
    background-color: #ff1744;
  }
  :disabled {
    background-color: red;
    color: black;
  }
`;
