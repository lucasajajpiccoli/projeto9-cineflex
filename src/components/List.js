import { Fragment } from 'react';
import styled from 'styled-components';

import Title from './common/Title';
import Poster from './Poster';

function List () {
    const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <>
            <Title>Selecione o filme</Title>
            <Container>
            {lista.map((item, index) => <Poster key={index} />)}
            </Container>
        </>
    );
}

const Container = styled.div`
    margin: 0vw 8vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default List;