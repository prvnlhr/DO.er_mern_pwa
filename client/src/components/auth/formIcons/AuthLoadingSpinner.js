import React from 'react'
import { SpinnerCircular } from 'spinners-react';

const AuthLoadingSpinner = () => {
    return (
        <SpinnerCircular style={{ height: '100%' }} thickness={124} speed={180} color="white" secondaryColor="transparent" />
    )
}

export default AuthLoadingSpinner