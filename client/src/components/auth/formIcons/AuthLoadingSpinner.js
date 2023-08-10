import React from 'react'
import { SpinnerCircular } from 'spinners-react';

const AuthLoadingSpinner = () => {
    return (
        <SpinnerCircular style={{ height: '100%', border: '0px solid red' }} thickness={124} speed={180} color="rgba(158, 119, 237, 1)" secondaryColor="rgba(158, 119, 237, 0.06)" />
    )
}

export default AuthLoadingSpinner