import React from 'react';

import { Container } from './styles';

function Input({ type, placeholder }) {
    return (
        <Container type={type} placeholder={placeholder} />
    )
}

export default Input;