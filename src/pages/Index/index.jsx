import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from "formik";

import Button from '../../components/Button';

import { Container, FormWrapper } from './styles';



const validate = values => {

    const errors = {};

    if (values.username.length < 6) {
        errors.username = "Usuário não existente";
    }

    if (values.password.length < 6) {
        errors.password = "Senha incorreta";
    }

    return errors;
};

function Index(props) {

    const navigate = useNavigate();

    const formik = useFormik({

        initialValues: {
            username: "",
            password: ""
        },
        validate,
        onSubmit: e => {
            navigate("/menu");
            props.loginFunction();
        }

    });

    function handleLogin(e) {
        navigate("/menu");
        
        e.preventDefault();
    }

    return (
        <Container>
            <FormWrapper>
                <img src="assets/logo.svg" alt="logo" />
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder='Insira seu e-mail' />
                    <input type="password" placeholder='Insira sua senha' />
                    <Button>Entrar</Button>
                </form>
                <div>
                    <h3>Ainda não fez cadastro ?</h3>
                    <Link to="/register">
                        <Button outline={true}>cadastre-se</Button>
                    </Link>

                </div>
            </FormWrapper>
            <div>

            </div>
        </Container>
    )
}

export default Index;