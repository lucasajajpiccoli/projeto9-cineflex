import { Fragment } from 'react';
import styled from 'styled-components';

import Loading from './common/Loading';
import Title from './common/Title';
import Seat from './Seat';
import Legend from './Legend';
import Form from './Form';
import Footer from './common/Footer';

function Seats() {

    
    return (
        <>
            <Title>{`Selecione o(s) assento(s)`}</Title>
            <Container>
                <div>

                </div>
                <Legend />
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    margin-bottom: 120px;

    & > div:first-child {
        margin: 0px 6vw 20px 6vw;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
`;

export default Seats;