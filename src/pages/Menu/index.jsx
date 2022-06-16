import React from 'react';
import Header from '../../components/Header';

import { Container, Wrapper } from './styles';

function Menu() {
    return (
        <Container>
            <Header>Menu</Header>
            <Wrapper>
                <div>
                    <h2>Histórico diário</h2>
                    <a href='#historico'>
                        <img src="assets/fitness.png" alt="fitness" />
                    </a>
                </div>
                <div>
                    <h2>Gráficos de desempenhos</h2>
                    <a href='#grafico'>
                        <img src="assets/growing.png" alt="growing" />
                    </a>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Menu;