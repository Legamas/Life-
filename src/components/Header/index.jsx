import React from 'react';
import Profile from '../Profile';

import { Container } from './styles';

function Header({ children }) {
    return (
        <Container>
            <img src="assets/logoWithoutName.svg" alt="logo" />
            <h1>{children}</h1>
            <Profile userName="José Ramos" />
        </Container>
    )
}

export default Header;