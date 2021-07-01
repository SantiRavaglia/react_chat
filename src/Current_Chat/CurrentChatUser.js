import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
height: 10vh;
background: #ffffff;
padding: 13px 50px;
`

const CCUserName = styled.div`
display: flex;
flex-direction: row;
padding-left: 10px;
font-family: Montserrat;
`

const CCUserImg = styled.img`
border-radius:50%;
height: 60px;
display:flex;
`

const CurrentChatUser = props => {
    return (
        <Container>
            <CCUserImg src={props.currentChatUser.pfp}></CCUserImg>
            <CCUserName><b>{props.currentChatUser.name}</b></CCUserName>
        </Container>
    )
}

export default CurrentChatUser;