import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function Form ({order, setOrder, selectedSeats, sessionSeats}) {
    const [data, setData] = useState({
        nome: "",
        cpf: ""
    });
    const navigate = useNavigate();

    function handleForm (event) {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    function completeOrder (event) {
        event.preventDefault();
        setOrder({
            ...order,
            ids : [...selectedSeats],
            nome: data.nome,
            cpf: data.cpf,
            title: sessionSeats.movie.title,
            date: sessionSeats.day.date,
            time: sessionSeats.name
        });

        const request = axios.post(
            "https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", 
            {
                ids: selectedSeats,
                name: data.nome,
                cpf: data.cpf
            }
        );

        request.then(() => {
            navigate("/sucesso");
        })
    }

    return (
        <Container onSubmit={completeOrder}>
            <label htmlFor="nome">Nome do comprador:</label>
            <input
                type="text"
                id="nome"
                placeholder="Digite seu nome..."
                name="nome"
                onChange={handleForm}
                value={data.nome}
                required
            />
            <label htmlFor="cpf">CPF do comprador:</label>
            <input
                type="number"
                id="cpf"
                placeholder="Digite seu CPF..."
                name="cpf"
                onChange={handleForm}
                value={data.cpf}
                required
            />
            <button type="submit">{`Reservar assento(s)`}</button>
        </Container>
    );
}

const Container = styled.form`
    margin: 60px 6vw 0px 6vw;


    label {
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    input {
        width: 88vw;
        height: 50px;
        padding-left: 15px;
        margin-bottom: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    input::placeholder {
        font-weight: 400;
        font-style: italic;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
    }

    button {
        width: 60vw;
        height: 45px;
        margin: 50px 14vw 0px 14vw;
        background: #E8833A;
        border-radius: 3px;
        border: none;

        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #FFFFFF;
    }
`;

export default Form;