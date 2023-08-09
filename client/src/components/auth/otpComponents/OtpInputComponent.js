import React, { useEffect, useState } from 'react'
import styles from "./styles/otpInuptComponentStyles.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { verifyOtpAsync } from "../../../redux/features/auth/authSlice"
import { useLocalAuthContext } from "../../../appState/localAuthContext"

const OtpInputComponent = () => {

    const dispatch = useDispatch();
    const { localAuthData, updateLocalAuthState, setLocalAuthData, resetLocalAuthState } = useLocalAuthContext();
    const { emailAddress } = localAuthData;

    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(120);

    const authState = useSelector((state) => state.auth);
    const { message, isLoading, otpVerified } = authState || {};


    useEffect(() => {
        let interval;
        if (timer > 0 && otpVerified === 'not_verified') { // Clear timer if otp is verified
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            updateLocalAuthState('showResendOtpBtn', true);
        }

        return () => {
            clearInterval(interval);
        };
    }, [timer, otpVerified]);

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async () => {
        console.log('This is my OTP : ', otp);
        try {
            const res = await dispatch(verifyOtpAsync({ otp, emailAddress }));
            if (res.type === 'auth/verifyOtp/fulfilled' && res.payload.message === 'OTP verified successfully.' && res.payload.accessToken) {
                console.log('OTP SENT TO EMAIL');
                resetLocalAuthState();
            } else if (res.type === 'auth/verifyOtp/rejected') {
                console.log(res);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const startTimer = () => {

    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.otpInuptFormWrapper}>
                <p>{message}</p>

                <input
                    type="text"
                    value={otp}
                    onChange={handleOtpChange}
                    maxLength={4}
                />

                {otpVerified === 'not_verified' && (
                    <p>Time remaining: {Math.floor(timer / 60)}:{timer % 60}</p>
                )}

                <div className={styles.submitBtnDiv} onClick={handleSubmit}>
                    {isLoading
                        ?
                        <p>Loading...</p>
                        :
                        <p>Submit</p>
                    }
                </div>

            </div>
        </div>
    )
}

export default OtpInputComponent