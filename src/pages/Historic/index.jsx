import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { api } from '../../services/api';

import { Container } from './styles';

function Historic() {

    const [histories, setHistories] = useState([]);

    useEffect(() => {

        api.get("historic").then(({ data }) => {
            setHistories(data.data);
            console.log(histories);
        });
    }, []);


    return (
        <Container>
            <Header>Histórico diário</Header>

            <table id="customers">
                <thead>
                    <tr>
                        <th>Horário/local</th>
                        <th>Preparação</th>
                        <th>Alimento</th>
                        <th>Quantidade</th>
                        <th>Freq. Semanal</th>
                        <th>Freq. Diária</th>
                    </tr>
                </thead>
                <tbody>
                    {histories && histories.map((item, index) => (
                        <tr key={index}>
                            <td>{item.time} - {item.location}</td>
                            <td>{item.preparation}</td>
                            <td>{item.food}</td>
                            <td>{item.quantity}</td>
                            <td>{item.weekly}</td>
                            <td>{item.daily}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </Container >
    )
}

export default Historic;