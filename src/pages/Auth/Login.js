import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../firebase/AuthContext";

import AppLogo from "../../components/AppLogo";
import Button from "../../components/Button";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Login(props) {
  const { user, error, login } = useAuth();

  const location = useLocation();

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  function getError(name) {
    return formik.touched[name] && formik.errors[name]
      ? formik.errors[name]
      : null;
  }

  function onSubmit(values) {
    const { email, password } = values;
    login(email, password);
  }

  if (user) {
    const { state } = location;

    return state ? <Redirect to={state.from.pathname} /> : <Redirect to='/u' />;
  }

  return (
    <div className='d-flex flex-center h-vh'>
      <Form onSubmit={formik.handleSubmit}>
        <AppLogo className='form-logo' />
        {error && <p className='text-danger'>{error}</p>}
        <FormInput
          label='Email'
          type='email'
          placeholder='youremail@example.com'
          error={getError("email")}
          {...formik.getFieldProps("email")}
        />
        <FormInput
          label='Password'
          type='password'
          placeholder='Enter your password'
          error={getError("password")}
          {...formik.getFieldProps("password")}
        />
        <Button
          className='w-100 mt-3'
          text='Sign In'
          type='submit'
          disabled={!formik.isValid}
        />
        <div className='d-flex mt-8'>
          <p className='form-text form-text--link'>Forgot password?</p>
          <p className='form-text  ml-auto'>
            No account yet?
            <span className='form-text--link text-primary'>
              &nbsp; Register
            </span>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Login;
