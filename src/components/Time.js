import { Fgrament } from 'react';
import styled from 'styled-components';

import Day from './Day';
import Horary from './Horary';
import Footer from './common/Footer';

function Time() {
    return (
        <>
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