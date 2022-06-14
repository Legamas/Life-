import React from 'react';
import Button from '../../components/Button';

import { Container, FormWrapper } from './styles';

function Index() {
    return (
        <Container>
            <FormWrapper>
                <img src="assets/logo.svg" alt="logo" />
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder='Insira seu e-mail'/>
                    <input type="password"  placeholder='Insira sua senha'/>
                    <Button>Entrar</Button>
                </form>
                <div>
                    <h3>Ainda não fez cadastro ?</h3>
                    <Button outline={true}>cadastre-se</Button>
                </div>
            </FormWrapper>
            <div>

            </div>
        </Container>
    )
}

export default Index;