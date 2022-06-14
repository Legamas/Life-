import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container } from './styles';

function Register() {
    return (
        <Container>
            <h1>Preencha com seus dados:</h1>

            <div>
                <div>
                    <Input type="text" placeholder="Insira seu nome *" />
                    <Input type="text" placeholder="Nome Social *" />
                    <Input type="text" placeholder="E-mail *" />
                    <img src="assets/logo.svg" alt="logo" />
                </div>

                <div>
                    <Input type="password" placeholder="Crie uma senha de 8 dígitos *" />
                    <Input type="password" placeholder="Insira novamente a senha *" />

                    <div>
                        <img src="assets/profile.svg" alt="profile" />
                        <span>Envie sua foto </span>
                    </div>

                    <Button> Cadastrar</Button>
                    
                    <h2>Já tem uma conta?</h2>
                    <Button>Login</Button>
                </div>
            </div>

        </Container>
    );
}

export default Register;