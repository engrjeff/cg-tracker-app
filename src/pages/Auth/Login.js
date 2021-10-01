import React from "react";
import AppLogo from "../../components/AppLogo";
import Button from "../../components/Button";
import Form from "../../components/Form";
import FormInput from "../../components/FormInput";

function Login(props) {
  return (
    <div className='d-flex flex-center h-vh'>
      <Form>
        <AppLogo className='form-logo' />
        <FormInput
          label='Email'
          name='email'
          type='email'
          placeholder='youremail@example.com'
        />
        <FormInput
          label='Password'
          name='password'
          type='password'
          placeholder='Enter your password'
        />
        <Button className='w-100 mt-3' text='Sign In' type='submit' />
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
