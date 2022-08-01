import { Fragment } from 'react';
import styled from 'styled-components';

import Seat from './Seat';
import Legend from './Legend';
import Form from './Form';
import Footer from './common/Footer';

function Seats() {
    const listaTeste = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50
      ];
    
    return (
        <>
            <Container>
                <div>
                    {listaTeste.map((item, index) => (<Seat key={index}>{item}</Seat>))}
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