import React from 'react';

import { Container } from './styles';

function Header({ children }) {
    return (
        <Container>
            <img src="assets/logoWithoutName.svg" alt="logo" />
            {children}
            <div>
                <h4>José Ramos</h4>
            </div>
        </Container>
    )
}

export default Header;