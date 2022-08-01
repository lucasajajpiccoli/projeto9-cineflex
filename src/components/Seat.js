import { useState } from 'react';
import styled from 'styled-components';

function Seat (
    {
        sessionSeat : 
            {
                id,
                name,
                isAvailable
            },
        position, 
        selectedSeats,
        setSelectedSeats
    }
) {

    const colors = {
        available: {
            border: "#808F9D",
            background: "#C3CFD9"
        },
        unavailable: {
            border: "#F7C52B",
            background: "#FBE192"
        },
        selected: {
            border: "#45BDB0",
            background: "#8DD7CF"
        }
    };

    function tryInvertSelection () {
        if (isAvailable) {
            if (selectedSeats.includes(id)) {
                setSelectedSeats(selectedSeats.filter(number => number !== id));
            } else {
                setSelectedSeats([...selectedSeats, id]);
            }
        } else {
            alert("Esse assento não está disponível");
        }
    }

    return (
        <Container
            position={position}
            onClick={tryInvertSelection}
            colors={colors}
            isAvailable={isAvailable}
            selectedSeats={selectedSeats}
            id={id}
        >
            {name.padStart(2, '0')}
        </Container>
    );
}

const Container = styled.div`
    width: 7vw;
    height: 7vw;
    margin-right: ${props => (props.position % 10 === 9) ? 0 : 2 }vw;
    margin-bottom: 20px;
    background: ${props => {
        if (!props.isAvailable) {
            return props.colors.unavailable.background;
        } else {
            if (props.selectedSeats.includes(props.id)) {
                return props.colors.selected.background;
            } else {
                return props.colors.available.background;
            }
        }
    }};
    border: 1px solid ${props => {
        if (!props.isAvailable) {
            return props.colors.unavailable.border;
        } else {
            if (props.selectedSeats.includes(props.id)) {
                return props.colors.selected.border;
            } else {
                return props.colors.available.border;
            }
        }
    }};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #000000;
`;

export default Seat;