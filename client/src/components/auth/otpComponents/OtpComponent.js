import React, { useEffect, useState, useRef } from 'react'
import styles from "./styles/otpComponentStyles.module.css"
import OtpInputComponent from "./OtpInputComponent"
import { useDispatch, useSelector } from 'react-redux'
import { useLocalAuthContext } from "../../../appState/localAuthContext"

import FullNameIcon from "../formIcons/FullNameIcon"
import EmailIcon from "../formIcons/EmailIcon"
import CountryIcon from "../formIcons/CountryIcon"
import ButtonArrowIcon from "../formIcons/ButtonArrowIcon"
import ErrorIcon from "../formIcons/ErrorIcon"
import SuccessIcon from "../formIcons/SuccessIcon"
import ResendIcon from "../formIcons/ResendIcon"

import OtpResendBtnComponent from './OtpResendBtnComponent'

const OtpComponent = () => {

    const [timer, setTimer] = useState({
        time: 10,
        timeExpired: false
    });


    const { localAuthData, updateLocalAuthState, setLocalAuthData } = useLocalAuthContext();
    const { emailAddress } = localAuthData;

    const authState = useSelector((state) => state.auth);
    const { message, isLoading, otpVerified } = authState || {};

    const resentOptEmailSent = useSelector(state => state.auth.resentOpt);

    const handleSubmitBtnClicked = () => {
        console.log('clicked', otpValues);
    }

    const isError = false;


    useEffect(() => {
        let interval;

        if (timer.time > 0 && otpVerified === 'not_verified' && !timer.timeExpired) {
            interval = setInterval(() => {
                setTimer((prevTimer) => ({
                    ...prevTimer,
                    time: prevTimer.time - 1
                }));
            }, 1000);

        } else if (timer.time === 0) {
            setTimer((prevTimer) => ({
                ...prevTimer,
                timeExpired: true
            }));
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [timer.time, otpVerified, timer.timeExpired]);


    //-----------------------------------------------------------------------------
    const [otpValues, setOtpValues] = useState(['', '', '', '']);
    const [activeFieldIndex, setActiveFieldIndex] = useState(0);

    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleOtpInputChange = (index, value) => {
        console.log(index, value)
        if (value.length === 1) {
            const newOtpValues = [...otpValues];
            newOtpValues[index] = value;
            setOtpValues(newOtpValues);

            if (index < 3) {
                inputRefs[index + 1].current.focus();
            } else {
                console.log(otpValues);
            }
        }
    };

    const handleBackspace = (index) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = '';
        setOtpValues(newOtpValues);

        if (index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Backspace') {
                handleBackspace(activeFieldIndex);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeFieldIndex]);


    const resetTimer = () => {

        setTimer({
            time: 10,
            timeExpired: false
        });

        setOtpValues(['', '', '', ''])
        setActiveFieldIndex(0);
    };



    //--------------------------------------------------------------------------------

    return (
        <div className={styles.otpFormGrid} >
            <div className={styles.headingCell} >
                <p>OTP Verification</p>
            </div>

            <div className={styles.emailAddressCell} >
                <p className={styles.emailMessageText}>Enter the OTP you received on</p>
                <p className={styles.emailText} >andr***garf@gmail.com</p>
            </div>
            <div className={styles.messageCell} >
                <div className={`${styles.messageWrapper} ${isError ? styles.errorBackGround : styles.successBackGround}`} >
                    <div className={styles.messageIconContainer} >
                        <div className={styles.messageIconDiv} >
                            {/* <ErrorIcon /> */}
                            <SuccessIcon />
                        </div>
                    </div>
                    <div className={styles.messageTextContainer} >
                        <p className={`${styles.messageText} ${isError ? styles.errorText : styles.successText}`}>
                            Account with this email Already exists
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.inputCell} >
                {/* <div className={`${styles.optInputContainer}`}>
                    <input value={7} className={`${styles.otpInput} ${currFocusField === 1 && styles.otpActiveInput} `} onFocus={() => setCurrFocusField(1)} />
                </div>
                <div className={`${styles.optInputContainer}`}>
                    <input value={5} className={`${styles.otpInput}  ${currFocusField === 2 && styles.otpActiveInput} `} onFocus={() => setCurrFocusField(2)} />
                </div>
                <div className={`${styles.optInputContainer}`}>
                    <input value={3} className={`${styles.otpInput} ${currFocusField === 3 && styles.otpActiveInput} `} onFocus={() => setCurrFocusField(3)} />
                </div>
                <div className={`${styles.optInputContainer}`}>
                    <input value={8} className={`${styles.otpInput} ${currFocusField === 4 && styles.otpActiveInput} `} onFocus={() => setCurrFocusField(4)} />
                </div> */}
                {otpValues.map((value, index) => (
                    <div key={index} className={`${styles.optInputContainer}`}>
                        <input
                            ref={inputRefs[index]}
                            type='number'
                            value={value}
                            className={`${styles.otpInput} ${activeFieldIndex === index && styles.otpActiveInput}`}
                            onFocus={() => setActiveFieldIndex(index)}
                            onChange={(e) => handleOtpInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.timerCell} >
                <div className={`${styles.timeDiv} ${timer.timeExpired === true && styles.timeExpireBackGround}`} ><p className={`${styles.timeText} ${timer.timeExpired === true && styles.timeExpireText}`} >{Math.floor(timer.time / 60)}</p></div>
                <div className={styles.timeColonDiv}><p>:</p></div>
                <div className={`${styles.timeDiv} ${timer.timeExpired === true && styles.timeExpireBackGround}`}  ><p className={`${styles.timeText} ${timer.timeExpired === true && styles.timeExpireText}`} >{timer.time % 60}</p></div>
            </div>
            <div className={styles.resendCell}  >
                <button className={styles.optResendBtn} onFocus={() => setActiveFieldIndex(5)} onClick={resetTimer}>
                    <div className={styles.otpResendTextContainer} >
                        <p>RESEND OTP</p>
                    </div>
                    <div className={styles.optResendIconContainer} >
                        <div className={styles.optResendIconDiv}>
                            <ResendIcon />
                        </div>
                    </div>
                </button>
            </div>
            <div className={styles.submitBtnCell} >
                <div className={styles.btnWrapper} >
                    <div className={styles.btnTextContainer} >
                        <p>Verify<span> OTP</span></p>
                    </div>
                    <div className={styles.btnIconContainer} >
                        <button className={styles.submitBtn}
                            onFocus={() => setActiveFieldIndex(6)}
                            onClick={handleSubmitBtnClicked}
                        >
                            <ButtonArrowIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OtpComponent