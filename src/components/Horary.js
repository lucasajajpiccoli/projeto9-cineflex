import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Horary({ sessionTime: { name, id }, position }) {
    return (
        <Link to={`/assentos/${id}`}>
            <Container position={position}>
                {name}
            </Container>
        </Link>
    );
}

const Container = styled.div`
    width: 20vw;
    height: 45px;
    margin: 0vw ${(props) => props.position % 4 === 3 ? 0 : 2}vw 2vw 0vw;
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