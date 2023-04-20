import { Formik } from 'formik';
import * as Yup from 'yup';
import { Label, Field, Form, ErrorMessage, Button } from './SignUp.styled';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter name').trim(),
  email: Yup.string()
    .nullable()
    .email('Invalid email address')
    .required('Enter email')
    .trim(),
  password: Yup.string()
    .min(6, 'Minimum 6 characters!')
    .max(14, 'Maximum 14 characters!')
    .required('Enter password')
    .trim(),
});

function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
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
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label htmlFor="name">User name:</Label>
          <Field type="text" name="name" placeholder="Enter user name" />
          <ErrorMessage name="name" component="span"></ErrorMessage>

          <Label htmlFor="email">Email:</Label>
          <Field type="email" name="email" placeholder="Enter email" />
          <ErrorMessage name="email" component="span"></ErrorMessage>

          <Label htmlFor="password">Password:</Label>
          <Field type="password" name="password" placeholder="Enter password" />
          <ErrorMessage name="password" component="span"></ErrorMessage>

          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </div>
  );
}
export default SignUp;
