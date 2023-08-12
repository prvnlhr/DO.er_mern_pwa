import React from 'react'
import { SpinnerCircular } from 'spinners-react';

const SpinnerIcon = () => {
    return (
        <SpinnerCircular
            // size={50} 
            thickness={150} style={{ height: '70%' }} speed={140} color="white" secondaryColor="transparent" />
    )
}

export default SpinnerIcon