import styled from 'styled-components';

function Header () {
    return (
        <Container>
            CINEFLEX
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 67px;
    background-color: #C3CFD9;
    position: fixed;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #E8833A;
`;

export default Header;