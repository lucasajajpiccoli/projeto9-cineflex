import styled from 'styled-components';

function Status({ background, border, status }) {
    return (
        <StatusContainer background={background} border={border}>
            <div></div>
            <div>{status}</div>
        </StatusContainer>
    );
}

function Legend() {
    const statusList = [
        {
            background: "#8DD7CF",
            border: "#1AAE9E",
            status: "Selecionado",
        },
        {
            background: "#C3CFD9",
            border: "#7B8B99",
            status: "Disponível",
        },
        {
            background: "#FBE192",
            border: "#F7C52B",
            status: "Indisponível",
        }
    ];

    return (
        <Container>
            {statusList.map((item, index) => (
                <Status
                    key={index}
                    background={item.background}
                    border={item.border}
                    status={item.status}
                />
            ))}
        </Container>
    );
}

const Container = styled.div`
    margin: 0vw 6vw;
    display: flex;
    justify-content: space-around;
`;

const StatusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:first-child {
        width: 7vw;
        height: 7vw;
        margin-bottom: 5px;
        background-color: ${props => props.background};
        border: 1px solid ${props => props.border};
        border-radius: 50%;
    }
    & > div:last-child {
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        color: #4E5A65;
    }
`;

export default Legend;