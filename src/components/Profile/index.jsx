import React from 'react';

import { Container } from './styles';

function Profile({ userName }) {
    return (
        <Container>
            {userName}
            <img src="assets/me.png" className='profile-img' alt={userName} />
            <img src="assets/dropdown.png" className='dropdown-img' alt="Dropdown" />
        </Container>
    )
}

export default Profile;