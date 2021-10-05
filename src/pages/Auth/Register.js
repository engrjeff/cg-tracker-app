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
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be minimum of 6 characters")
    .required("Password is required"),
});

function Register(props) {
  const { user, error, register } = useAuth();

  const location = useLocation();

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  function onSubmit(values) {
    const { name: displayName, email, password } = values;

    register(email, password, displayName);
  }

  function getError(name) {
    return formik.touched[name] && formik.errors[name]
      ? formik.errors[name]
      : null;
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
          label='Name'
          placeholder='Enter your name here'
          error={getError("name")}
          {...formik.getFieldProps("name")}
        />
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
          text='Register'
          type='submit'
          disabled={!formik.isValid}
        />
        <div className='d-flex mt-8'>
          <p className='form-text  ml-auto'>
            Already have an account?
            <span className='form-text--link text-primary'>&nbsp; Log In</span>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Register;
