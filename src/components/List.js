import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Loading from './common/Loading';
import Title from './common/Title';
import Poster from './Poster';

function List () {
    const [movies, setMovies] = useState(null);

    useEffect(
        () => {
            const promise = axios.get(
                "https://mock-api.driven.com.br/api/v7/cineflex/movies"
            );
            promise.then(
                (response) => {
                    setMovies(response.data);
                }
            );
        }, []);

    if (movies === null) {
        return (
            <Loading />
        );
    }

    return (
        <>
            <Title>Selecione o filme</Title>
            <Container>
            {movies.map((item, index) => 
                <Poster
                    key={index}
                    source={item.posterURL}
                    idMovie={item.id}
                />
            )}
            </Container>
        </>
    );
}

const Container = styled.div`
    margin: 0vw 8vw 20px 8vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default List;