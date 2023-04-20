import { Formik } from 'formik';
import * as Yup from 'yup';
import { Label, Field, Form, ErrorMessage, Button } from './LogInForm.styled';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const SubmitSchema = Yup.object().shape({
  email: Yup.string()
    .nullable()
    .email('Invalid email address')
    .required('Enter email')
    .trim(),
  password: Yup.string()
    .min(8, 'Minimum 8 characters!')
    .max(14, 'Maximum 14 characters!')
    .required('Enter password')
    .trim(),
});

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label htmlFor="email">Email:</Label>
          <Field type="email" name="email" placeholder="Enter email" />
          <ErrorMessage name="email" component="span"></ErrorMessage>

          <Label htmlFor="password">Password:</Label>
          <Field type="password" name="password" placeholder="Enter password" />
          <ErrorMessage name="password" component="span"></ErrorMessage>

          <Button type="submit">Log in</Button>
        </Form>
      </Formik>
    </div>
  );
}
