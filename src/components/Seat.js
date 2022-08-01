import styled from 'styled-components';

function Seat ({children}) {
    return (
        <Container number={children}>
            {children.toString().padStart(2, '0')}
        </Container>
    );
}

const Container = styled.div`
    width: 7vw;
    height: 7vw;
    margin-right: ${props => (props.number % 10 !== 0) ? 2 : 0 }vw;
    margin-bottom: 20px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
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