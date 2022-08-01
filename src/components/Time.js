import { Fgrament } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Title from './common/Title';
import Day from './Day';
import Footer from './common/Footer';

function Time() {
    const { idFilme } = useParams();

    return (
        <>
            <Title>
                Selecione o horário
            </Title>
            <Container>
                <Day />
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    margin-bottom: 120px;
`;

export default Time;