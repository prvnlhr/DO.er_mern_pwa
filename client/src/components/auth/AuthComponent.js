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
      <div className={styles.authComponentCloseBtnWrapper} >
        <div className={styles.closeBtnDiv} onClick={handleFormCloseBtnClicked} >
          <svg
            style={{ width: '60%' }}
            // width="16" height="16" 
            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.71934 3.72C3.85997 3.57955 4.05059 3.50066 4.24934 3.50066C4.44809 3.50066 4.63871 3.57955 4.77934 3.72L7.99934 6.94L11.2193 3.72C11.311 3.62127 11.4276 3.5491 11.5569 3.51109C11.6861 3.47307 11.8232 3.47062 11.9537 3.504C12.0843 3.53737 12.2034 3.60533 12.2985 3.70072C12.3937 3.7961 12.4613 3.91539 12.4943 4.046C12.5278 4.17637 12.5254 4.31334 12.4876 4.44251C12.4498 4.57167 12.3778 4.68826 12.2793 4.78L9.05934 8L12.2793 11.22C12.3781 11.3117 12.4502 11.4283 12.4882 11.5575C12.5263 11.6868 12.5287 11.8239 12.4953 11.9544C12.462 12.0849 12.394 12.204 12.2986 12.2992C12.2032 12.3943 12.084 12.462 11.9533 12.495C11.823 12.5284 11.686 12.5261 11.5568 12.4882C11.4277 12.4504 11.3111 12.3785 11.2193 12.28L7.99934 9.06L4.77934 12.28C4.63708 12.4124 4.44903 12.4845 4.25471 12.4812C4.06039 12.4778 3.87494 12.3992 3.73734 12.262C3.6001 12.1244 3.52154 11.9389 3.51818 11.7446C3.51483 11.5503 3.58693 11.3623 3.71934 11.22L6.93934 8L3.71934 4.78C3.57889 4.63937 3.5 4.44875 3.5 4.25C3.5 4.05125 3.57889 3.86062 3.71934 3.72Z" fill="white" />
          </svg>


        </div>
      </div>
      <div className={styles.authComponentFormWrapper} >
        {
          localAuthData.showOtpComponent && (otpEmailSent === 'sent' || resentOtpEmailSent === 'sent')
            ?
            <OtpComponent />
            :
            (
              localAuthData.showSignInForm
                ?
                <SignInComponent />
                :
                <SignUpComponent />
            )
        }
        {/* <SignInComponent /> */}

        {/* <SignUpComponent /> */}

        {/* <OtpComponent /> */}
      </div>
    </div>
  );
};

export default AuthComponent;
