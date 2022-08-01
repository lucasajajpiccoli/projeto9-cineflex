import { Fragment } from 'react';
import styled from 'styled-components';

import Title from './common/Title';

function Receipt() {
    return (
        <Container>
            <div>Filme e sessão</div>
            <div></div>
            <div></div>
            <div>
                <div>Ingressos</div>
            </div>
            <div>Comprador</div>
            <div></div>
            <div></div>
        </Container>
    );
}

function Success() {
    return (
        <>
            <Title weight={700} color={"#247A6B"} />
            <Receipt />
            <GoBack>Voltar pra Home</GoBack>
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
    margin: 60px 20vw 120px 20vw;
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