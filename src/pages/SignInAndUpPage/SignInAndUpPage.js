import React from 'react';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignInAndUpPage.scss';

const SignInAndUpPage = () => (
  <div className="signin-and-signup">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndUpPage;
