import React from 'react';
import LoginLayout from '../components/LoginLayout';
import EmailVerificationPage from '../components/EmailVerificationPage';

const EmailVerficationPageContainer = () => {
  return (
    <LoginLayout>
      <EmailVerificationPage />
    </LoginLayout>
  );
};

export default EmailVerficationPageContainer;