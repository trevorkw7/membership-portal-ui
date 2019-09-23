import React from 'react';
import LoginLayout from '../components/LoginLayout';
import SignInForm from '../components/SignInForm';

const LoginPage = () => {
  return (
    <LoginLayout>
      <SignInForm />
    </LoginLayout>
  );
};

export default LoginPage;