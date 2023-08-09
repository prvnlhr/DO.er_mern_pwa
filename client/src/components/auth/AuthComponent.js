import React, { useEffect, useState } from 'react';
import styles from "./styles/authComponentStyles.module.css";
import SignInComponent from "./SignInComponent"
import SignUpComponent from './SignUpComponent';
import OtpComponent from './otpComponents/OtpComponent';

import { useLocalAuthContext } from "../../appState/localAuthContext"

import { useDispatch, useSelector } from 'react-redux'


const AuthComponent = () => {


  const { localAuthData, updateLocalAuthState, resetLocalAuthState } = useLocalAuthContext();


  const authState = useSelector((state) => state.auth);
  const { message, isLoading } = authState || {};

  const otpEmailSent = useSelector(state => state.auth.emailSent);
  const resentOtpEmailSent = useSelector(state => state.auth.resentOpt);

  const handleFormCloseBtnClicked = () => {
    resetLocalAuthState();
  }

  return (
    <div className={styles.authComponentWrapper} >

      <div className={styles.authComponentFormWrapper} >
        {/* <SignUpComponent /> */}
        {/* <SignInComponent /> */}
        <OtpComponent />
      </div>
    </div>
  );
};

export default AuthComponent;