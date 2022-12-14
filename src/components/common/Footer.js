import styled from 'styled-components';

function Footer({title, posterURL, weekday = "", name = ""}) {
    return (
        <Container>
            <div>
                <img src={posterURL} alt="" />
            </div>
            <div>
                <div>{title}</div>
                <div>{weekday + name === "" ? "" : `${weekday} - ${name}`}</div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 120px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > div:first-child {
        width: 64px;
        height: 89px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin: 0px 12px;
        padding: 8px;

        img {
            width: 48px;
        }
    }

    & > div:last-child div {
        background-color: #DFE6ED;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;


        div {
            background-color: #DFE6ED;
        }
    }
`;

export default Footer;