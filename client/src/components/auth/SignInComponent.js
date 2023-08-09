import React, { useState } from 'react'
import styles from "./styles/signInComponent.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { userSignInAsync } from "../../redux/features/auth/authSlice"
import { useLocalAuthContext } from "../../appState/localAuthContext"

const SignInCOmponent = () => {

    const dispatch = useDispatch();

    const { localAuthData, updateLocalAuthState, setLocalAuthData } = useLocalAuthContext();

    const authState = useSelector((state) => state.auth);

    const { message, isLoading } = authState || {};
    const emailSent = useSelector(state => state.auth.emailSent);


    const [signInFormData, setSignInFormData] = useState({
        emailAddress: ''
    });

    const handleSignInFormDataChange = (e) => {
        const { name, value } = e.target;
        setSignInFormData({
            ...signInFormData,
            [name]: value
        });

        setLocalAuthData({
            ...localAuthData,
            [name]: value
        })
    };



    const handleFormSubmitBtnClicked = async () => {
        const res = await dispatch(userSignInAsync(signInFormData));
        console.log('dispatch res', res);
        if (res.type === 'auth/userSignIn/fulfilled' && res.payload === 'OTP sent to your email.') {
            updateLocalAuthState('showOtpComponent', true);
        }
    };

    const handleToggleFormLinkClicked = () => {
        updateLocalAuthState('showSignInForm', false);
    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.signInFormWrapper}>

                <p>{message}</p>
                <label for="phone">Email Address</label>
                <input type="email" id="email" name='emailAddress' placeholder="Enter your Email Address" value={signInFormData.emailAddress} onChange={handleSignInFormDataChange} />
                <div className={styles.submitBtnDiv} onClick={handleFormSubmitBtnClicked}>
                    {isLoading
                        ?
                        <p>Loading...</p>
                        :
                        <p>Sign In</p>
                    }
                </div>
                <p className={styles.toggleLinkText} onClick={handleToggleFormLinkClicked} >Not Registered yet ? Sign Up</p>
            </div>
        </div>

    )
}

export default SignInCOmponent