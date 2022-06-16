import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

import Header from '../../components/Header';

import { Container, Wrapper } from './styles';
import { api } from '../../services/api';

const data = [
    { name: 'Page A', pv: 2400, amt: 2400 },
    { name: 'Page B', pv: 1398, amt: 2210 },
    { name: 'Page C', pv: 9800, amt: 2290 },
    { name: 'Page D', pv: 3908, amt: 2000 },
    { name: 'Page E', pv: 4800, amt: 2181 },
    { name: 'Page F', pv: 3800, amt: 2500 },
    { name: 'Page G', pv: 4300, amt: 2100 },
];


function Graph() {

    const [histories, setHistories] = useState([]);

    useEffect(() => {

        api.get("getGraph").then(({ data }) => {
            setHistories(data);
            console.log(histories);
        });
    }, []);

    return (
        <Container>
            <Header>Gráficos de desempenho</Header>

            <Wrapper>
                <section>
                    <h4>14/06/2022</h4>
                    <LineChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <Line
                            type='monotone'
                            dataKey='pv'
                            stroke='#8884d8'
                            activeDot={{ r: 8 }}
                        />
                        <CartesianGrid strokeDasharray='3 3' />
                        <Tooltip />
                        <YAxis />
                        <XAxis dataKey='name' />
                        <Legend />
                    </LineChart>
                </section>

                <section>
                    <h4>15/06/2022</h4>
                    <LineChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <Line
                            type='monotone'
                            dataKey='pv'
                            stroke='#8884d8'
                            activeDot={{ r: 8 }}
                        />
                        <CartesianGrid strokeDasharray='3 3' />
                        <Tooltip />
                        <YAxis />
                        <XAxis dataKey='name' />
                        <Legend />
                    </LineChart>
                </section>


                <section>
                    <h4>16/06/2022</h4>
                    <LineChart
                        width={600}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <Line
                            type='monotone'
                            dataKey='pv'
                            stroke='#8884d8'
                            activeDot={{ r: 8 }}
                        />
                        <CartesianGrid strokeDasharray='3 3' />
                        <Tooltip />
                        <YAxis />
                        <XAxis dataKey='name' />
                        <Legend />
                    </LineChart>
                </section>
            </Wrapper>
        </Container>
    )
}

export default Graph;