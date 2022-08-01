import styled from 'styled-components';

function Title ({weight = 400, color = "#293845", children}) {
    return (
        <Container weight={weight} color={color}>
            {children}
        </Container>
    );
}

const Container = styled.div`
    width: 88vw;
    height: 110px;
    margin: 67px 6vw 0px 6vw;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: ${(props) => props.weight};
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: ${(props) => props.color};
`;

export default Title;