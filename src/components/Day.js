import styled from 'styled-components';

import Horary from './Horary';

function Day () {
    return (
        <Container>
            <div>Dia</div>
            <div>
                <Horary />
            </div>
        </Container>
    );
}

const Container = styled.div`
    margin: 0px 7vw 25px 7vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div:first-child {
        margin-bottom: 25px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #293845;
    }
`;

export default Day;