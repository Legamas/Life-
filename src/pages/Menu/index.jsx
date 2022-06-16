import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, Wrapper } from './styles';

function Menu() {
    return (
        <Container>
            <Header>Menu</Header>
            <Wrapper>
                <div>
                    <h2>Histórico diário</h2>
                    <Link to="/historic">
                        <a href='#historico'>
                            <img src="assets/fitness.png" alt="fitness" />
                        </a>
                    </Link>
                </div>
                <div>
                    <h2>Gráficos de desempenhos</h2>
                    <Link to="/graph">
                        <a href='#grafico'>
                            <img src="assets/growing.png" alt="growing" />
                        </a>
                    </Link>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Menu;