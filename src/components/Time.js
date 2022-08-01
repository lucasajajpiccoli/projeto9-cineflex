import { Fgrament, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Loading from './common/Loading';
import Title from './common/Title';
import Day from './Day';
import Footer from './common/Footer';

function Time() {
    const { idFilme } = useParams();

    const [sessions, setSessions] = useState(null);

    useEffect(
        () => {
            const promise = axios.get(
                `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
            );
            promise.then(
                (response) => {
                    setSessions(response.data);
                }
            );
        }, []);

    if (sessions === null) {
        return (
            <Loading />
        );
    }

    return (
        <>
            <Title>
                Selecione o horário
            </Title>
            <Container>
                {sessions.days.map((item, index) =>
                    <Day
                        key={index}
                        sessionDay={item}
                    />
                )}
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    margin-bottom: 140px;
`;

export default Time;