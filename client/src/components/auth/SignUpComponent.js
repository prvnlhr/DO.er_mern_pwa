import React, { useEffect, useState } from 'react'
import styles from "./styles/signUpComponentStyles.module.css"
import 'react-phone-number-input/style.css'; // Import the CSS for react-phone-number-input
import PhoneInput from 'react-phone-number-input';

import { useDispatch, useSelector } from 'react-redux'
import { userSignUpAsync } from "../../redux/features/auth/authSlice"
import { useLocalAuthContext } from "../../appState/localAuthContext"



const SignUpComponent = () => {

    const dispatch = useDispatch();

    const { localAuthData, updateLocalAuthState, setLocalAuthData } = useLocalAuthContext();


    const authState = useSelector((state) => state.auth);
    const { message, isLoading } = authState || {};



    const [signUpFormData, setSignUpFormData] = useState({
        fullName: 'Praveen Lohar',
        emailAddress: 'prvnlhr522@gmail.com',
        country: 'India'
    });

    const handleSignUpFormDataChange = (e) => {
        const { name, value } = e.target;
        setSignUpFormData({
            ...signUpFormData,
            [name]: value
        });
    }

    const handleFormSubmitBtnClicked = () => {
        dispatch(userSignUpAsync(signUpFormData));
    }

    const handleToggleFormLinkClicked = () => {
        updateLocalAuthState('showSignInForm', true);
    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.signUpFormWrapper}>
                <p>{message}</p>
                <input
                    placeholder="Full name"
                    name='fullName'
                    value={signUpFormData.fullName}
                    onChange={handleSignUpFormDataChange}
                />

                <input
                    id=""
                    type='email'
                    placeholder="Email address"
                    name='emailAddress'
                    value={signUpFormData.emailAddress}
                    onChange={handleSignUpFormDataChange}
                />


                <input
                    placeholder="Country"
                    name='country' value={signUpFormData.country}
                    onChange={handleSignUpFormDataChange}
                />


                <div className={styles.submitBtnDiv} onClick={handleFormSubmitBtnClicked}>
                    {isLoading
                        ?
                        <p>Loading...</p>
                        :
                        <p>Sign Up</p>
                    }
                </div>
                <p className={styles.toggleLinkText} onClick={handleToggleFormLinkClicked}>Already Registered ? Sign In</p>
            </div>
        </div>
    )
}

export default SignUpComponent