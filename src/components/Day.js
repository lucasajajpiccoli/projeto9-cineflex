import styled from 'styled-components';

import Horary from './Horary';

function Day ({sessionDay : {weekday, date, showtimes}}) {

    return (
        <Container>
            <div>{weekday} - {date}</div>
            <div>
                {showtimes.map((item, index) =>
                    <Horary
                        key={index}
                        position={index}
                        sessionTime={item}
                    />
                )}
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

    & > div:last-child {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
`;

export default Day;