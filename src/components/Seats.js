import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Loading from './common/Loading';
import Title from './common/Title';
import Seat from './Seat';
import Legend from './Legend';
import Form from './Form';
import Footer from './common/Footer';

function Seats({order, setOrder}) {
    const {idSessao} = useParams();

    const [sessionSeats, setSessionSeats] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(
        () => {
            const promise = axios.get(
                `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
            );
            promise.then(
                (response) => {
                    setSessionSeats(response.data);
                }
            );
        },
    []);

    if (sessionSeats === null) {
        return (
            <Loading />
        );
    }
    
    return (
        <>
            <Title>{`Selecione o(s) assento(s)`}</Title>
            <Container>
                <div>
                    {sessionSeats.seats.map((item, index) => 
                        <Seat
                            key={index}
                            position={index}
                            sessionSeat={item}
                            selectedSeats={selectedSeats}
                            setSelectedSeats={setSelectedSeats}
                        />
                    )}
                </div>
                <Legend />
                <Form
                    order={order}
                    setOrder={setOrder}
                    selectedSeats={selectedSeats}
                    sessionSeats={sessionSeats}
                />
            </Container>
            <Footer
               title={sessionSeats.movie.title}
               posterURL={sessionSeats.movie.posterURL}
               weekday={sessionSeats.day.weekday}
               name={sessionSeats.name} 
            />
        </>
    );
}

const Container = styled.div`
    margin-bottom: 140px;

    & > div:first-child {
        margin: 0px 6vw 20px 6vw;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
`;

export default Seats;