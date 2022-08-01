import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Poster({ source, idMovie }) {
    return (
        <Link to={`/sessoes/${idMovie}`}>
            <Container>
                <img src={source} alt="" />
            </Container>
        </Link>
    );
}

const Container = styled.div`
    width: 38vw;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 10px 0px;

    img {
        width: calc(38vw - 16px);
    }
`;

export default Poster;
