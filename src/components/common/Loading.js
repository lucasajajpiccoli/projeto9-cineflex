import styled from 'styled-components';

import loading from "../../assets/images/loading.gif";

function Loading () {
    return (
        <Container>
            <img src={loading} alt="Carregando" />
        </Container>
    );
}

const Container = styled.div`
    width: 30vw;
    height: 30vw;
    position: fixed;
    left: 35vw;
    top: calc(50vh - 15vw);

    img {
        width: 30vw;
        height: 30vw;
    }
`;

export default Loading;