import React from 'react';

import { Container } from './styles';

function Button({ outline = false, children }) {
    return (
        <Container outline={outline}>
            {children}
        </Container>
    )
}

export default Button;