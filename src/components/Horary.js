import styled from 'styled-components';

function Horary () {
    return (
        <Container>
            15:00
        </Container>
    );
}

const Container = styled.div`
    width: 20vw;
    height: 45px;
    background-color: #E8833A;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;

`;

export default Horary;