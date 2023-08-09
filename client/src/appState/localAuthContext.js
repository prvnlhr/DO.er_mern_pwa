import { createContext, useState, useContext } from 'react';

const LocalAuthContext = createContext();


export const LocalAuthProvider = ({ children }) => {

    const [localAuthData, setLocalAuthData] = useState({
        emailAddress: '',
        showAuthForm: false,
        showOtpComponent: false,
        showSignInForm: true,
        showResendOtpBtn: false,
    })
    const updateLocalAuthState = (key, value) => {
        setLocalAuthData((prevState) => ({
            ...prevState,
            [key]: value
        }))
    }

    const resetLocalAuthState = () => {
        setLocalAuthData({
            emailAddress: '',
            showAuthForm: false,
            showOtpComponent: false,
            showSignInForm: true
        })
    }
    return (
        <LocalAuthContext.Provider
            value={{
                localAuthData,
                setLocalAuthData,
                updateLocalAuthState,
                resetLocalAuthState
            }}>
            {children}
        </LocalAuthContext.Provider>
    )
};


export default LocalAuthContext;

export const useLocalAuthContext = () => {
    return useContext(LocalAuthContext);
}