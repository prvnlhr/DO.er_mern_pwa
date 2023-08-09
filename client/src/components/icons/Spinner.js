import React from 'react'
import { SpinnerCircular } from 'spinners-react';

const Spinner = () => {
    return (
        <SpinnerCircular
            // size={50} 
            thickness={250} style={{ width: '100%' }} speed={140} color="rgba(158, 119, 237, 1)" secondaryColor="rgba(158, 119, 237, 0.14)" />
    )
}

export default Spinner