import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Title from './common/Title';

function Receipt({order}) {
    return (
        <Container>
            <div>Filme e sessão</div>
            <div>{order.title}</div>
            <div>{order.date} {order.time}</div>
            <div>
                <div>Ingressos</div>
                {order.ids.map((item, index) => <div>{`Assento ${(item % 50).toString().padStart(2, '0')}`}</div>)}
            </div>
            <div>Comprador</div>
            <div>{`Nome: ${order.nome}`}</div>
            <div>{`CPF: ${order.cpf[0]}${order.cpf[1]}${order.cpf[2]}.${order.cpf[3]}${order.cpf[4]}${order.cpf[5]}.${order.cpf[6]}${order.cpf[7]}${order.cpf[8]}-${order.cpf[9]}${order.cpf[10]}`}</div>
        </Container>
    );
}

function Success({order, setOrder}) {
    
    const navigate = useNavigate();

    function comeBack () {
        setOrder({
            ...order,
            ids : [],
            nome: "",
            cpf: "",
            title: "",
            date: "",
            time: ""
        });

        navigate("/");
    }

    return (
        <>
            <Title weight={700} color={"#247A6B"}>Pedido feito com sucesso!</Title>
            <Receipt order={order} />
            <GoBack onClick={comeBack}>Voltar pra Home</GoBack>
        </>
    );
}

const Container = styled.div`
    margin: 0vw 6vw;

    div {
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #293845;
    }

    & > div:nth-child(1),
    & > div:nth-child(5),
    & > div:nth-child(4) div:first-child {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }

    & > div:nth-child(3),
    & > div:nth-child(4) {
        margin-bottom: 50px;
    }
`;

const GoBack = styled.button`
    width: 60vw;
    height: 45px;
    margin: 60px 20vw 20px 20vw;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
`;

export default Success;