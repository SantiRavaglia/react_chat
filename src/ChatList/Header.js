import styled from 'styled-components';
import logo from '../images/psh_brand.svg'

const Container = styled.div`
    background: #ff3636;
    height: 14vh;
    display: flex;
    align-items: center;
    `

    const ReactChat = styled.h2`
    display: flex;
    color: #ffffff;
    font-size: 25px;
    font-family: Montserrat;
    `

    const Isologotipo = styled.img`
    display: flex;
    margin-left: 20px;
    `

const Header = props => {
    return (
        <Container>
                <Isologotipo src={logo} alt="logo" height='50%' width='20%' />
                <ReactChat >React Chat</ReactChat>
        </Container>
    )
}

export default Header;